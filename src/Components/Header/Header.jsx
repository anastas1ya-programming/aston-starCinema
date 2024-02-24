import Logo from "./Logo/Logo.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavLink} from "react-router-dom";


const Header = (props) => {
    return (
        <div className="container">

            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/"><Logo/></NavLink>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>


                    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search"
                                   aria-label="Search"/>
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/favorites"><i
                                    className="bi bi-heart" style={{fontSize: '1.5rem'}}></i></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/history">History</NavLink>

                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><i className="bi bi-person-circle"
                                                                    style={{fontSize: '1.5rem'}}></i></a>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/signout">Sign out</NavLink>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>


        </div>

    );
}
export default Header