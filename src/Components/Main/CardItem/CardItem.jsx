import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {addMovieToFavorite, deleteMovieFromFavorite} from '../../../redux/favoriteMovieSlice.js'

const CardItem = (props) => {
    let path = '/movie/' + props.id
    const dispatch = useDispatch()
    const favoriteMovies = useSelector(state => state.favoriteMovie.favoriteMovies)
    const isMovieLiked = favoriteMovies.some(movie => movie.id === props.id)
    const toLikeMovie = () => {
        if (!isMovieLiked) {
            dispatch(addMovieToFavorite({
                id: props.id
            }));
        } else {
            dispatch(deleteMovieFromFavorite(props.id))

        }
    };
    const updatedFavoriteMovies = isMovieLiked
        ? favoriteMovies.filter((movie) => movie.id !== props.id)
        : favoriteMovies;


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
                    <button onClick={toLikeMovie} className="btn btn-primary ">{isMovieLiked ? 'Unlike' : 'Like'}</button>
                    <NavLink to={path} className="card-link">Подробнее</NavLink>

                </div>
            </div>
        </div>
    )
}
export default CardItem