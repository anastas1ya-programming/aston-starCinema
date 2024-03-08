import React, { Suspense } from 'react';
import './App.css'
import {createContext, lazy, useEffect, useState} from "react";
import {Route, Routes} from "react-router-dom";
import Header from "./Components/Header/Header.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import {PrivateRoute} from "./PrivateRoute.jsx";
import {ErrorBoundary} from 'react-error-boundary';
import {Fallback} from "./Components/ErrorFallback.jsx";


const Main = lazy(() => import("./Components/Main/Main.jsx"));
const History = lazy(() => import("./Components/History/History.jsx"));
const Favorites = lazy(() => import("./Components/Favorites/Favorites.jsx"));
const Detailed = lazy(() => import("./Components/Detailed/Detailed.jsx"));
const Search = lazy(() => import("./Components/Search/Search.jsx"));
const Login = lazy(() => import("./Components/Login/Login.jsx"));
const Registration = lazy(() => import("./Components/Registration/Registration.jsx"));


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
                    <Suspense fallback={<div>Loading...</div>}>
                        <Routes>
                            <Route path="/" element={
                                <ErrorBoundary FallbackComponent={Fallback}>
                                    <Main/>
                                </ErrorBoundary>
                            }/>
                            <Route path='/history' element={<PrivateRoute/>}>
                                <Route
                                    path='/history'
                                    element={
                                        <ErrorBoundary FallbackComponent={Fallback}>
                                            <History/>
                                        </ErrorBoundary>
                                    }
                                />
                            </Route>
                            <Route path='/favorites' element={<PrivateRoute/>}>
                                <Route
                                    path='/favorites'
                                    element={
                                        <ErrorBoundary FallbackComponent={Fallback}>
                                            <Favorites/>
                                        </ErrorBoundary>
                                    }
                                />
                            </Route>
                            <Route path="/detailed/:id" element={
                                <ErrorBoundary FallbackComponent={Fallback}>
                                    <Detailed/>
                                </ErrorBoundary>
                            }/>
                            <Route path="/search" element={
                                <ErrorBoundary FallbackComponent={Fallback}>
                                    <Search/>
                                </ErrorBoundary>}/>
                            <Route path="/login" element={<Login/>}/>
                            <Route path="/registration" element={<Registration/>}/>
                        </Routes>
                    </Suspense>
                </div>
                <Footer></Footer>

            </div>
        </ThemeContext.Provider>

    )
}

export default App
