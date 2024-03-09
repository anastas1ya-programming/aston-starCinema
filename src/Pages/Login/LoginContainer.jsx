import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {logInUser} from "../../redux/slices/authSlice.js";
import {useRef, useState} from "react";
import {isAuth, isUserDataCorrect, isUserExists} from "../../utils/localStorageUtils.js";
import {getFavoriteItem} from "../../redux/slices/favoriteMovieSlice.js";
import {getUserHistory} from "../../redux/slices/historySlice.js";
import Login from "./Login.jsx";


const LoginContainer = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const [passwordError, setPasswordError] = useState("");
    const [emailError, setEmailError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = emailRef?.current?.value;
        const password = passwordRef?.current?.value;
        if (!isUserExists(email)) {
            setEmailError("User with this email does not exist!")
        }
        if (isUserDataCorrect(email, password)) {
            dispatch(logInUser({email, password}));
        } else {
            setPasswordError("Wrong password or email")
        }

        if (isAuth()) {
            navigate('/')
            dispatch(getFavoriteItem())
            dispatch(getUserHistory())
        }
    }

    const handleClearPasswordError = () => {
        setPasswordError('')
    }
    const handleClearEmailError = () => {
        setEmailError('')
    }

    return (
        <Login
            emailRef={emailRef}
            passwordRef={passwordRef}
            handleSubmit={handleSubmit}
            passwordError={passwordError}
            emailError={emailError}
            onClearPasswordError={handleClearPasswordError}
            onClearEmailError={handleClearEmailError}

        />
    );
};
export default LoginContainer;