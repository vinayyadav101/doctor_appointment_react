import { Route, Routes } from "react-router-dom";
import TemporaryDrawer from "./layoutes/TestPage";
import HomePage from "./pages/HomePage";
import AppointmentForm from "./pages/AppointmentForm";
import UserForm from "./layoutes/TestPage";
import DoctorDeshBoard from "./Deshboards/DoctorDeshBoard";
import AdminDeshBoard from "./Deshboards/adminDeshBoard";
import TestPage from "./layoutes/TestPage";


export default function App() {
  return (
    <Routes>
        <Route path="/test" element={<TestPage/>}  />
        <Route path="/" element={<HomePage/>}  />
        <Route path="/appointment-form" element={<AppointmentForm />} />
        <Route path="/doctor-deshboard" element={<DoctorDeshBoard />} />
        <Route path="/admin-deshboard" element={<AdminDeshBoard />} />
    </Routes>
  )
}

