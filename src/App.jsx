import { Route, Routes } from "react-router-dom";
import TemporaryDrawer from "./layoutes/TestPage";
import HomePage from "./pages/HomePage";


export default function App() {
  return (
    <Routes>
        <Route path="/test" element={<TemporaryDrawer/>}  />
        <Route path="/" element={<HomePage/>}  />
    </Routes>
  )
}

