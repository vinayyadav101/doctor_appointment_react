import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instance } from "../../helpers/axiosInstans";
import toast from "react-hot-toast";


const initialState = {
    isLogin : false,
    profile: null,
    role: null,
};

export const getProfile = createAsyncThunk('/user/auth/profile' , async()=>{
    try {
        
        const response = await instance.get('/api/v1/user/profile')

        return response.data
    } catch (error) {
        toast.error(error?.response?.data?.msg || error?.message)
    }
})
export const ExpireyCheck = createAsyncThunk('/user/auth/exp',async()=>{
    try {
        const response = await instance.get('/api/v1/user/cookie_check')
            return response.data
    } catch (error) {
        return error?.response?.data
    }
})

export const login = createAsyncThunk('/login/auth',async(data)=>{
    
    try {
        const response = instance.post('/api/v1/user/login',data)
    
        toast.promise(response , {
            success:"user login successfully",
            loading:"please wait user data validation"
        })

        return (await response).data

    } catch (error) {
        toast.error(error?.response?.data?.msg || error?.message)
    }
}) 

export const logoutUser = createAsyncThunk('/logout' , async()=>{
    try {
        const response =  instance.get('/api/v1/user/logout')

        toast.promise(response , {
            success:"user logout successfully",
            loading:"please wait user data validation"
        })

        return (await response).data
    } catch (error) {
        toast.error(error?.response?.data?.msg || error?.message)
        
    }
})

const authSlice = createSlice({
    name:'auth',
    initialState:initialState,
    reducers:{

    },
    extraReducers:(builder)=>{
        builder.addCase(login.fulfilled ,(state , {payload})=>{
            if (payload.code === 1) {
                state.isLogin = true
                state.role = payload.data.role
                state.profile = payload.data 
            }
            
        })
        builder.addCase(ExpireyCheck.fulfilled , (state , {payload})=>{
            if (payload?.code === 0) {
                state.isLogin = false
                state.profile = null
                state.role = null
            }
        })
        builder.addCase(getProfile.fulfilled , (state , {payload})=>{
            if (payload?.code === 1) {
                state.isLogin = true
                state.role = payload.data.role
                state.profile = payload.data 
            }
            
        })
        builder.addCase(logoutUser.fulfilled , (state , {payload}) => {
            if (payload?.code === 1) {
                state.isLogin = false
                state.profile = null
                state.role = null
            }
        })
    }
})

export const authReduser = authSlice.reducer