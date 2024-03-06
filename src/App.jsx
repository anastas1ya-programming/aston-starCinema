import './App.css'
import Header from "./Components/Header/Header.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import {Route, Routes} from "react-router-dom";
import History from "./Components/History/History.jsx";
import Main from "./Components/Main/Main.jsx";
import Favorites from "./Components/Favorites/Favorites.jsx";
import Detailed from "./Components/Detailed/Detailed.jsx";
import Search from "./Components/Search/Search.jsx";


function App(props) {

    return (
        <div className="app-wrapper">
            <Header></Header>
            <div>
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/history" element={<History/>}/>
                    <Route path="/favorites" element={<Favorites/>}/>
                    <Route path="/detailed/:id" element={<Detailed/>}/>
                    <Route path="/search" element={<Search/>}/>
                </Routes>
            </div>
            <Footer></Footer>

        </div>

    )
}

export default App
