import { Children } from "react";
import { Navigate } from "react-router-dom";

const isAuthenticated = () => {
    return !!localStorage.getItem("token");
};

export const PublicRoute=({children})=>{
    if(isAuthenticated()){
        return <Navigate to="/" />;
    }
    return children;
}