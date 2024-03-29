import s from './Search.module.css'
import moviePic from "../../assets/movie.png";

const Search = ({movies, isSuccess, isLoading, isError, handleClick}) => {
    return (
        <div className="container">

            {isLoading && <h3>Loading</h3>}
            {isSuccess && movies?.length > 0 && (
                <ul className={s.searchList}>
                    {movies.map(movie =>
                        <li className={s.searchItem}
                            key={movie.id}
                            onClick={() => handleClick(movie.id)}
                        >
                            <div className={s.movieWrapper}>
                                {movie.poster && movie.poster.url ? (
                                    <img
                                        className={s.movieImage}
                                        src={movie.poster.url}
                                        alt={movie.name}
                                    />) : (<img src={moviePic} className={s.movieImage}/>)}
                                <p>{movie.name || movie.alternativeName || 'No name'}</p>
                            </div>

                        </li>)}
                </ul>
            )}
            {isSuccess && movies?.length === 0 && (
                <p>There are no matches 😓</p>
            )}
            {isError && <p>Something went wrong!</p>}

        </div>
    )
};
export default Search;