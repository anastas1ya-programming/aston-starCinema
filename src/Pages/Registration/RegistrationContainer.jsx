import {useDispatch, useSelector} from "react-redux";
import {createUser, getUser} from "../../redux/slices/authSlice.js";
import {useRef} from "react";
import {useNavigate} from "react-router-dom";
import Registration from "./Registration.jsx";

const RegistrationContainer = () => {
    const dispatch = useDispatch();
    const user = useSelector(getUser);
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const navigate = useNavigate();

    const handleSubmit = (event) => {

        event.preventDefault();

        const username = nameRef?.current?.value;
        const email = emailRef?.current?.value;
        const password = passwordRef?.current?.value;

        dispatch(createUser({username, email, password}));

        nameRef.current.value = "";
        emailRef.current.value = "";
        passwordRef.current.value = "";

        navigate('/login')
    };


    return (
        <Registration
            nameRef={nameRef}
            emailRef={emailRef}
            passwordRef={passwordRef}
            handleSubmit={handleSubmit}
        />
    );
};
export default RegistrationContainer;