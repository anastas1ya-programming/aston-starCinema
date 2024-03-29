import React, {createContext, lazy, Suspense, useEffect, useMemo, useState} from 'react';
import './App.css'
import {Route, Routes} from "react-router-dom";
import Header from "./Components/Header/Header.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import {PrivateRoute} from "./Components/PrivateRoute.jsx";
import {ErrorBoundary} from 'react-error-boundary';
import {Fallback} from "./Components/ErrorFallback.jsx";
import {getAppTheme, setAppTheme} from "./utils/localStorageUtils.js";

const Main = lazy(() => import("./Pages/Main/Main.jsx"));
const History = lazy(() => import("./Pages/History/History.jsx"));
const Favorites = lazy(() => import("./Pages/Favorites/Favorites.jsx"));
const DetailedContainer = lazy(() => import("./Pages/Detailed/DetailedContainer.jsx"));
const SearchContainer = lazy(() => import("./Pages/Search/SearchContainer.jsx"));
const LoginContainer = lazy(() => import("./Pages/Login/LoginContainer.jsx"));
const RegistrationContainer = lazy(() => import("./Pages/Registration/RegistrationContainer.jsx"));
const NotFound = lazy(() => import("./Pages/NotFound/NotFound.jsx"));


export const ThemeContext = createContext(null);

function App() {
    const storedTheme = getAppTheme();
    const [theme, setTheme] = useState(storedTheme || "light");
    useEffect(() => {
        setAppTheme(theme)
    }, [theme]);

    const toggleTheme = () => {
        setTheme((current) => (current === "light" ? "dark" : "light"));
    }
    const contextValue = useMemo(() => ({ theme, toggleTheme }), [theme]);

    return (
        <ThemeContext.Provider value={contextValue}>
            <div className="app-wrapper" id={theme}>
                <Header></Header>
                <div>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Routes>
                            <Route path="*" element={<NotFound/>}/>
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
                                    <DetailedContainer/>
                                </ErrorBoundary>
                            }/>
                            <Route path="/search" element={
                                <ErrorBoundary FallbackComponent={Fallback}>
                                    <SearchContainer/>
                                </ErrorBoundary>}/>
                            <Route path="/login" element={<LoginContainer/>}/>
                            <Route path="/registration" element={<RegistrationContainer/>}/>
                        </Routes>
                    </Suspense>
                </div>
                <Footer></Footer>

            </div>
        </ThemeContext.Provider>

    )
}

export default App
