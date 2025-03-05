import { Children } from "react";
import { Navigate } from "react-router-dom";

const isAuthenticated = () => {
    return !!localStorage.getItem("token");
};

export const PublicRoute=({Children})=>{
    if(isAuthenticated()){
        return <Navigate to="/home" />;
    }
    return Children;
}