import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Navigate } from "react-router-dom";


function PrivateRoute({children}) {
    const {auth}= useContext(AuthContext)


    return children
}

export default PrivateRoute;
