import {useDispatch, useSelector} from "react-redux";
import {createUser, getUser} from "../../redux/authSlice.js";
import {useRef} from "react";
import {useNavigate} from "react-router-dom";

const Registration = () => {

    const dispatch = useDispatch();
    const user = useSelector(getUser);

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const navigate = useNavigate();

    const handleSubmit = (event) =>{
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
        <section className="mt-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4">
                        <div className="card border border-light-subtle rounded-3 shadow-sm">
                            <div className="card-body p-3 p-md-4 p-xl-5">
                                <h2 className="fs-6 fw-normal text-center text-secondary mb-4">Create an account to use all the features</h2>
                                <form onSubmit={handleSubmit}>
                                    <div className="row gy-2 overflow-hidden">
                                        <div className="col-12">
                                            <div className="form-floating mb-3">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="name"
                                                    id="name"
                                                    placeholder="Your name"
                                                    required
                                                    ref = {nameRef}
                                                />
                                                <label htmlFor="name" className="form-label">
                                                    Your name
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating mb-3">
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    name="email"
                                                    id="email"
                                                    placeholder="name@example.com"
                                                    required
                                                    ref = {emailRef}
                                                />
                                                <label htmlFor="email" className="form-label">
                                                    Email
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating mb-3">
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                    name="password"
                                                    id="password"
                                                    placeholder="Password"
                                                    required
                                                    ref = {passwordRef}
                                                />
                                                <label htmlFor="password" className="form-label">
                                                    Password
                                                </label>
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <div className="d-grid my-3">
                                                <button
                                                    className="btn btn-primary btn-lg"
                                                    type="submit"
                                                >
                                                    Sign up
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Registration;