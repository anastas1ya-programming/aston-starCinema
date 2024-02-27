import './App.css'
import Header from "./Components/Header/Header.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import {Route, Routes} from "react-router-dom";
import History from "./Components/History/History.jsx";
import MainContainer from "./Components/Main/MainContainer.jsx";
import FavoritesContainer from "./Components/Favorites/FavoritesContainer.jsx";

function App(props) {

    return (
        <div className="app-wrapper">
            <Header></Header>
            <div >
                <Routes>
                    <Route path="/" element={<MainContainer/>}/>
                    <Route path="/history" element={<History/>}/>
                    <Route path="/favorites" element={<FavoritesContainer/>}/>
                </Routes>


            </div>
            <Footer></Footer>
        </div>
    )
}

export default App
