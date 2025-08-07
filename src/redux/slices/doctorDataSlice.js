import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { instance } from "../../helpers/axiosInstans";

const initialState = {
    topThree: null , 
    searched:null
}
export const topThreeDoctorData = createAsyncThunk('/doctor/top-three' , async()=>{
    try {
        const response = await instance.get('/api/v1/search/topthreedoctors')
        return response.data
    } catch (error) {
        toast.error(error?.response?.data?.msg || error?.message)
    }
})
const doctorDataSlice = createSlice({
    name:'doctorSlice',
    initialState:initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(topThreeDoctorData.fulfilled , (state , {payload})=>{
            if(payload?.code === 1){
                state.topThree = payload.data
            }
        })
    }
})

export default doctorDataSlice.reducer;