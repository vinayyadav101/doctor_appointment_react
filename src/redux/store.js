import {configureStore} from '@reduxjs/toolkit'
import { authReduser } from './slices/authSlice'
import doctorReduser from './slices/doctorDataSlice'

export const store = configureStore({
    reducer:{
        auth:authReduser,
        // payment:,
        doctor:doctorReduser,
        // user:,
    },
    devTools:true
})