import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {logInUser} from "../../redux/slices/authSlice.js";
import {useRef} from "react";
import {isAuth} from "../../utils/localStorageUtils.js";
import {getFavoriteItem} from "../../redux/slices/favoriteMovieSlice.js";
import {getUserHistory} from "../../redux/slices/historySlice.js";
import Login from "./Login.jsx";


const LoginContainer = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = emailRef?.current?.value;
        const password = passwordRef?.current?.value;
        dispatch(logInUser({email, password}));
        if (isAuth()) {
            navigate('/')
            dispatch(getFavoriteItem())
            dispatch(getUserHistory())
        }
    }

    return (
        <Login
            emailRef={emailRef}
            passwordRef={passwordRef}
            handleSubmit={handleSubmit}
        />
    );
};
export default LoginContainer;