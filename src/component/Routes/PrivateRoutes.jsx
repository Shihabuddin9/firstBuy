import { useContext } from "react";
import { AuthContext } from "../Provider/Context/Context";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()

    if (loading) {
        return <div className="flex justify-center items-center min-h-screen"><span className="loading loading-ring loading-lg"></span></div>
    }
    if (user) {
        return children;
    } else {
        return <Navigate state={location.pathname} to='/signIn'></Navigate>
    }
}


export default PrivateRoutes;