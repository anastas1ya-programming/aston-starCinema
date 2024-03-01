import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { toggleFavorites } from '../../../redux/favoriteMovieSlice.js';

const CardItem = (props) => {

    let path = '/movie/' + props.id

    const dispatch = useDispatch()

    const {favoriteMovie} = useSelector(state => state)

    const isMovieLiked = favoriteMovie.some(movie => movie.id === props.id)

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
                        dispatch(toggleFavorites(  props.card))

                    }} className="btn btn-primary ">{isMovieLiked ? 'Unlike' : 'Like'}</button>
                    <NavLink to={path} className="card-link">Подробнее</NavLink>

                </div>
            </div>
        </div>
    )
}
export default CardItem