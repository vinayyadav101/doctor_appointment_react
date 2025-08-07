import { Outlet } from "react-router-dom";

export default function AuthRoute({roles}){
    const role = localStorage.role
   if (roles.includes(role)) {
    return <Outlet />
   }else{
    console.log("access denid");
   }
}