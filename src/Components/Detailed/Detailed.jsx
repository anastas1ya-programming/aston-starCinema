import {useGetDetailedInfoQuery} from "../../api/api.js";
import s from "./Detailed.module.css"
import {useNavigate, useParams} from "react-router-dom";
import {toggleFavorites} from "../../redux/favoriteMovieSlice.js";
import {useDispatch, useSelector} from "react-redux";

const Detailed = (props) => {

    const dispatch = useDispatch()

    const {favoriteMovie} = useSelector(state => state)

    const isMovieLiked = favoriteMovie.some(movie => movie.id === props.id)

    const navigate = useNavigate();
    const paramFromUrl = useParams();
    console.log(paramFromUrl.id)

    const selectFields = ['name', 'year', 'id', 'rating', 'poster', 'description', 'genres', 'movieLength', 'seriesLength', 'totalSeriesLength', 'backdrop'];

    const params = new URLSearchParams({

        'id': paramFromUrl.id
    });


    selectFields.forEach(field => {
        params.append('selectFields', field);
    });
    const {data: movies, isError, isLoading, isSuccess} = useGetDetailedInfoQuery(params);

    return (
        <div className="container">
            {isError && <h3>ERROR</h3>}
            {isLoading && <h3>Loading...</h3>}
            {isSuccess && movies.docs.map(movie =>

                <div className={s.movie_card} id="ave">
                    <div className={s.info_section}>
                        <div className={s.movie_header}>
                            <img className={s.locandina}
                                 src={movie.poster.url}/>
                            <h1>{movie.name}</h1>
                            <h4>{movie.year} </h4>
                            <span className={s.minutes}>
                                {movie.seriesLength ? `${movie.seriesLength} min`
                                    : movie.movieLength ? `${movie.movieLength} min`
                                        : movie.totalSeriesLength ? `${movie.totalSeriesLength} min`
                                            : '- min'}</span>
                            <p className={s.type}>{...movie.genres.map(g => g.name).join(", ")}</p>
                        </div>
                        <div className={s.movie_desc}>
                            <p className={s.text}>
                                {movie.description}
                            </p>
                        </div>
                        <div className={s.movie_social}>
                            <ul>
                                <li>
                                    <button onClick={() => {
                                        dispatch(toggleFavorites(props.card))

                                    }} className="btn btn-danger ">{isMovieLiked ? 'Unlike' : 'Like'}</button>
                                </li>
                                <li><button onClick={()=>navigate(-1)} className="btn btn-dark">Назад</button></li>

                            </ul>
                        </div>
                    </div>
                    <div className={`${s.blur_back} ${s.ave_back}`}
                         style={{
                             background: `url(${movie.backdrop.url || "https://cinemaplex.ru/wp-content/uploads/2019/03/mirovoi-kinematograf.jpg"})`,
                             backgroundSize: 'cover'
                    }}></div>
                </div>
            )}
        </div>
    )
}
export default Detailed