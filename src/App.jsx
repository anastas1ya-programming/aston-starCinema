import './App.css'
import Header from "./Components/Header/Header.jsx";
import Main from "./Components/Main/Main.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import {Route, Routes} from "react-router-dom";

import Favorites from "./Components/Favorites/Favorites.jsx";
import History from "./Components/History/History.jsx";
import MainContainer from "./Components/Main/MainContainer.jsx";

function App(props) {

    return (
        <div className="app-wrapper">
            <Header></Header>
            <div >
                <Routes>
                    <Route path="/" element={<MainContainer/>}/>
                    <Route path="/history" element={<History/>}/>
                    <Route path="/favorites" element={<Favorites/>}/>
                </Routes>


            </div>
            <Footer></Footer>
        </div>
    )
}

export default App
