import { createSlice } from "@reduxjs/toolkit";

const initialState = {

};

const authSlice = createSlice({
    name:'auth',
    initialState:initialState,
    reducers:{

    },
    extraReducers:{}
})

export const authReduser = authSlice.reducer