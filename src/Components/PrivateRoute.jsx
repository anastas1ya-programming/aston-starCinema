import {isAuth} from "../utils/localStorageUtils.js";
import {Navigate, Outlet} from "react-router-dom";

export const PrivateRoute = () => {
    return isAuth() ? <Outlet/> : <Navigate to='/login' replace/>
}