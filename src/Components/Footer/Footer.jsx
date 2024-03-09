import {useContext} from "react";
import {ThemeContext} from "../../App.jsx";

const Footer = () => {
    const {theme} = useContext(ThemeContext)
    return (
        <footer className={`container text-center ${theme === "dark" ? "bg-dark text-light" : "bg-light text-dark"}`}>
            <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.05)"}}>
                © 2024 Copyright :
                <a className={`text-${theme === "dark" ? "light" : "dark"}`} href="https://starcinema.com/">
                    Starcinema.com
                </a>
            </div>
        </footer>
    );
}
export default Footer