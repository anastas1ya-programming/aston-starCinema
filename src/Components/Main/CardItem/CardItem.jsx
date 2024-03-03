import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {useActions} from "../../../Hooks/useActions.js";

const CardItem = (props) => {

    const {toggleFavorites} = useActions();

    const {favoriteMovie} = useSelector(state => state)

    const isMovieLiked = favoriteMovie.some(movie => movie.id === props.id)

    const navigate = useNavigate();


    return (
        <div className="col mb-4">
            <div className="card m-auto mb-2 h-100" style={{width: "18rem"}}>
                <img
                    src={props.poster}
                    className="card-img-top" alt={props.title}/>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text"> {props.shortDescription}</p>
                </div>

                <div className="card-footer d-flex justify-content-between align-items-center">
                    <button onClick={() => {
                        toggleFavorites(props.card)

                    }} className="btn btn-danger ">{isMovieLiked ? 'Unlike' : 'Like'}</button>
                    <button onClick={() => navigate(`/detailed/${props.id}`)} className="btn btn-info">Details</button>
                    {/*<Link to={`/detailed/${props.id}`} >Подробнее</Link>*/}

                </div>
            </div>
        </div>
    )
}
export default CardItem