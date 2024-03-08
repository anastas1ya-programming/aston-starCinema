import Logo from "./Logo/Logo.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavLink, useNavigate} from "react-router-dom";
import SearchForm from "../SearchForm/SearchForm.jsx";
import {useContext} from "react";
import {ThemeContext} from "../../App.jsx";
import {ThemeToggle} from "./ThemeToggle.jsx";
import {useDispatch, useSelector} from "react-redux";
import {getUser, logOutUser} from "../../redux/slices/authSlice.js";
import {isAuth} from "../../utils/localStorageUtils.js";


const Header = () => {
    const {theme} = useContext(ThemeContext)
    const user = useSelector(getUser);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogOut = () =>{
        dispatch(logOutUser())
        navigate('/')
    }

    return (
        <div className="container">

            <nav className={`navbar navbar-expand-lg ${theme === "dark" ? "bg-dark" : "bg-light"}`}>
                <div className="container-fluid">
                    <NavLink className={`navbar-brand ${theme === "dark" ? "text-light" : "text-dark"}`} to="/"><Logo/></NavLink>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarTogglerDemo03"
                        aria-controls="navbarTogglerDemo03"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className={`navbar-toggler-icon ${theme === "dark" ? "text-light" : "text-dark"}`}></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <SearchForm/>

                        <ul className={`navbar-nav ms-auto mb-2 mb-lg-0 ${theme === "dark" ? "text-light" : "text-dark"}`}>
                            {isAuth() ? (<li className="nav-item">
                                <NavLink className={`nav-link ${theme === "dark" ? "text-light" : "text-dark"}`} aria-current="page" to="/favorites"><i
                                    className="bi bi-heart" style={{fontSize: '1.5rem'}}></i></NavLink>
                            </li>) : null}
                            {isAuth() ? (<li className="nav-item">
                                <NavLink className={`nav-link ${theme === "dark" ? "text-light" : "text-dark"}`} to="/history">History</NavLink>

                            </li>): null}
                            {isAuth() ? (
                                    <li className="nav-item">
                                        <NavLink className={`nav-link ${theme === "dark" ? "text-light" : "text-dark"}`}
                                                 ><p>{user.username}</p></NavLink>
                                    </li>) :
                                null
                            }

                            {!isAuth() ? (
                                <li className="nav-item">
                                    <NavLink className={`nav-link ${theme === "dark" ? "text-light" : "text-dark"}`}
                                             to="/login">Log In</NavLink>
                                </li>) :
                                (<li className="nav-item">
                                <NavLink className={`nav-link ${theme === "dark" ? "text-light" : "text-dark"}`} onClick={()=>handleLogOut()}
                                         to="/" >Log Out</NavLink>
                            </li>)
                            }
                            <li className="nav-item">
                                <ThemeToggle />
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>


        </div>

    );
}
export default Header