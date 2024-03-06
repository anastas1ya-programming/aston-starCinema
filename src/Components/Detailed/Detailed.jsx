import {useGetDetailedInfoQuery,} from "../../api/api.js";
import s from "./Detailed.module.css"
import {useNavigate, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {useActions} from "../../Hooks/useActions.js";

const Detailed = (props) => {
    const {toggleFavorites} = useActions();

    const {favoriteMovie} = useSelector(state => state)

    const navigate = useNavigate();

    const paramFromUrl = useParams();

    const {data: movies, isError, isLoading, isSuccess} = useGetDetailedInfoQuery(paramFromUrl.id);

    const isMovieLiked = favoriteMovie.some(movie => movie.id === movies?.docs[0].id)

    return (
        <div className="container">
            {isError && <h3>ERROR</h3>}
            {isLoading && <h3>Loading...</h3>}
            {isSuccess && movies?.docs.map(currentMovie =>

                <div className={s.movie_card} id="ave">
                    <div className={s.info_section}>
                        <div className={s.movie_header}>
                            <img className={s.locandina}
                                 src={currentMovie.poster.url}/>
                            <h1>{currentMovie.name}</h1>
                            <h4>{currentMovie.year} </h4>
                            <span className={s.minutes}>
                                {currentMovie.seriesLength ? `${currentMovie.seriesLength} min`
                                    : currentMovie.movieLength ? `${currentMovie.movieLength} min`
                                        : currentMovie.totalSeriesLength ? `${currentMovie.totalSeriesLength} min`
                                            : '- min'}</span>
                            <p className={s.type}>{...currentMovie.genres.map(g => g.name).join(", ")}</p>
                        </div>
                        <div className={s.movie_desc}>
                            <p className={s.text}>
                                {currentMovie.description}
                            </p>
                        </div>
                        <div className={s.movie_social}>
                            <ul>
                                <li>
                                    <button onClick={() => {
                                        toggleFavorites(currentMovie)

                                    }} className="btn btn-danger ">{isMovieLiked ? 'Unlike' : 'Like'}</button>
                                </li>
                                <li>
                                    <button onClick={() => navigate(-1)} className="btn btn-dark">&larr; Назад</button>
                                </li>

                            </ul>
                        </div>
                    </div>
                    <div className={`${s.blur_back} ${s.ave_back}`}
                         style={{
                             background: `url(${currentMovie.backdrop.url
                             || "https://cinemaplex.ru/wp-content/uploads/2019/03/mirovoi-kinematograf.jpg"})`,
                             backgroundSize: 'cover'
                         }}></div>
                </div>)}

        </div>)
}
export default Detailed