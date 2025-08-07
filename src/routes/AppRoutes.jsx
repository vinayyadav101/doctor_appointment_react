import { Route, Routes } from "react-router-dom";
import LoginSingup from "../pages/LoginSingup";
import HomePage from "../pages/HomePage";
import AppointmentForm from "../pages/AppointmentForm";
import DoctorDeshBoard from "../Deshboards/DoctorDeshBoard";
import AdminDeshBoard from "../Deshboards/AdminDeshBoard";
import Layout from "../layoutes/Home";
import AuthRoute from "../helpers/AuthRoute";

export default function AppRoutes(){
    return(
        <Routes>
            <Route element={<Layout />}>
                <Route path="/login-signup" element={<LoginSingup/>}  />
                <Route path="/" element={<HomePage/>}  />
                <Route element={<AuthRoute roles={["admin , user"]}/>}>
                    <Route path="/appointment-form" element={<AppointmentForm />} />
                </Route>
                <Route path="/doctor-deshboard" element={<DoctorDeshBoard />} />
                <Route path="/admin-deshboard" element={<AdminDeshBoard />} />
            </Route>
        </Routes>
    )
}