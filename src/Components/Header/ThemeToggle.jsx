import {useContext} from "react";
import {ThemeContext} from "../../App.jsx";

export const ThemeToggle = () => {
    const {theme, toggleTheme} = useContext(ThemeContext);

    const toggleIcon = () => {
        toggleTheme();
    };

    return (
        <div className={`toggle ${theme === "dark" ? "enabled" : "disabled"}`} onClick={toggleIcon}>
            <div className="icons">
                {theme === "dark" ? (
                    <i className="bi bi-brightness-high-fill" style={{fontSize: "2rem", color: "floralwhite"}}></i>
                ) : (
                    <i className="bi bi-moon-stars-fill" style={{fontSize: "2rem", color: "darkgrey"}}></i>
                )}
            </div>
        </div>
    );
};