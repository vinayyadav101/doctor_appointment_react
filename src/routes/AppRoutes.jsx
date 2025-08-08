import { Route, Routes } from "react-router-dom";
import LoginSingup from "../pages/LoginSingup";
import HomePage from "../pages/HomePage";
import AppointmentForm from "../pages/AppointmentForm";
import DoctorDeshBoard from "../Deshboards/DoctorDeshBoard";
import AdminDeshBoard from "../Deshboards/AdminDeshBoard";
import Layout from "../layoutes/Home";
import AuthRoute from "../helpers/AuthRoute";
import NotFound from "../pages/notFound";
import SearchDoctors from "../pages/SearchDoctors";

export default function AppRoutes(){
    return(
        <Routes>
            <Route element={<Layout />}>
                <Route path="/login-signup" element={<LoginSingup/>}  />
                <Route path="/" element={<HomePage/>}  />
                <Route element={<AuthRoute roles={["admin , user"]}/>}>
                </Route>
                    <Route path="/appointment-form" element={<AppointmentForm />} />
                    <Route path="/search/doctors" element={<SearchDoctors />} />
                <Route path="/doctor-deshboard" element={<DoctorDeshBoard />} />
                <Route path="/admin-deshboard" element={<AdminDeshBoard />} />
                <Route path="/*" element={<NotFound />} />
            </Route>
        </Routes>
    )
}