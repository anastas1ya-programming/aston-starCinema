import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {useActions} from "../../Hooks/useActions.js";
import {getFavorite} from "../../redux/slices/favoriteMovieSlice.js";
import {useContext} from "react";
import {ThemeContext} from "../../App.jsx";
import {isAuth} from "../../utils/localStorageUtils.js";

const CardItem = (props) => {

    const {toggleFavorites} = useActions();

    const favoriteMovie = useSelector(getFavorite)

    const isMovieLiked = favoriteMovie.some(movie => movie.id === props.id)

    const navigate = useNavigate();

    const { theme } = useContext(ThemeContext);

    const handleAddToFavorites =()=>{
        if(isAuth()){
            toggleFavorites(props.card)
        } else{
            navigate('/login')
        }
    }

    return (
        <div className="col mb-4">
            <div className={`card m-auto mb-2 h-100 ${theme === "dark" ? "text-light bg-dark" : "bg-light"}`} style={{ width: "18rem" }}>
                <img src={props.poster} className="card-img-top" alt={props.title} />
                <div className={`card-body ${theme === "dark" ? "text-light" : "text-dark"}`}>
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text"> {props.shortDescription}</p>
                </div>

                <div className={`card-footer d-flex justify-content-between align-items-center ${theme === "dark" ? "text-light bg-dark" : "bg-light"}`}>
                    <button onClick={handleAddToFavorites} className="btn btn-danger">
                        {isMovieLiked ? "Unlike" : "Like"}
                    </button>
                    <button onClick={() => navigate(`/detailed/${props.id}`)} className="btn btn-info">
                        Details
                    </button>
                </div>
            </div>
        </div>
    );
}
export default CardItem