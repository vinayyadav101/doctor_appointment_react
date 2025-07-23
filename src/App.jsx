import { Route, Routes } from "react-router-dom";
import TemporaryDrawer from "./layoutes/TestPage";
import HomePage from "./pages/HomePage";
import AppointmentForm from "./pages/AppointmentForm";
import UserForm from "./layoutes/TestPage";


export default function App() {
  return (
    <Routes>
        <Route path="/test" element={<UserForm/>}  />
        <Route path="/" element={<HomePage/>}  />
        <Route path="/appointment-form" element={<AppointmentForm />} />
    </Routes>
  )
}

