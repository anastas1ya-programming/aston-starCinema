import './App.css'
import Header from "./Components/Header/Header.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import {Route, Routes} from "react-router-dom";
import History from "./Components/History/History.jsx";
import Main from "./Components/Main/Main.jsx";
import Favorites from "./Components/Favorites/Favorites.jsx";
import Detailed from "./Components/Detailed/Detailed.jsx";
import Search from "./Components/Search/Search.jsx";
import {createContext, useEffect, useState} from "react";
import Login from "./Components/Login/Login.jsx";
import Registration from "./Components/Registration/Registration.jsx";
import {PrivateRoute} from "./PrivateRoute.jsx";

export const ThemeContext = createContext(null);

function App(props) {
    const storedTheme = localStorage.getItem("theme");
    const [theme, setTheme] = useState(storedTheme || "light");
    useEffect(() => {
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((current) => (current === "light" ? "dark" : "light"));
    }
    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            <div className="app-wrapper" id={theme}>
                <Header></Header>
                <div>
                    <Routes>
                        <Route path="/" element={<Main/>}/>
                        <Route path='/history' element={<PrivateRoute />}>
                            <Route
                                path='/history'
                                element={
                                        <History />
                                }
                            />
                        </Route>
                        <Route path='/favorites' element={<PrivateRoute />}>
                            <Route
                                path='/favorites'
                                element={
                                    <Favorites />
                                }
                            />
                        </Route>
                        <Route path="/detailed/:id" element={<Detailed/>}/>
                        <Route path="/search" element={<Search/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/registration" element={<Registration/>}/>
                    </Routes>
                </div>
                <Footer></Footer>

            </div>
        </ThemeContext.Provider>

    )
}

export default App
