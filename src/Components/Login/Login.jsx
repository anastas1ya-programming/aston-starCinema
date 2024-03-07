import {NavLink, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {logInUser} from "../../redux/authSlice.js";
import {useRef} from "react";
import {isAuth} from "../../utils/localStorageUtils.js";
import {getFavoriteItem} from "../../redux/favoriteMovieSlice.js";
import {getUserHistory} from "../../redux/historySlice.js";


const Login = () => {


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
        <section className="mt-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4">
                        <div className="card border border-light-subtle rounded-3 shadow-sm">
                            <div className="card-body p-3 p-md-4 p-xl-5">
                                <h2 className="fs-6 fw-normal text-center text-secondary mb-4">Sign in to your
                                    account</h2>
                                <form onSubmit={handleSubmit}>
                                    <div className="row gy-2 overflow-hidden">
                                        <div className="col-12">
                                            <div className="form-floating mb-3">
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    name="email"
                                                    id="email"
                                                    placeholder="name@example.com"
                                                    required
                                                    ref={emailRef}

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
                                                    ref={passwordRef}
                                                />
                                                <label htmlFor="password" className="form-label">
                                                    Password
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="d-flex gap-2 justify-content-between">
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        value=""
                                                        name="rememberMe"
                                                        id="rememberMe"
                                                    />
                                                    <label
                                                        className="form-check-label text-secondary"
                                                        htmlFor="rememberMe"
                                                    >
                                                        Keep me logged in
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="d-grid my-3">
                                                <button
                                                    className="btn btn-primary btn-lg"
                                                    type="submit"
                                                >
                                                    Log in
                                                </button>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <p className="m-0 text-secondary text-center">
                                                Don't have an account?{" "}
                                                <NavLink
                                                    to="/registration"
                                                    className="nav-link text-info"
                                                >
                                                    Sign up
                                                </NavLink>
                                            </p>
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
export default Login;