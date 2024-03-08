import s from './Search.module.css'

const Search = ({movies, isSuccess, isLoading, isError, handleClick}) => {
    return (
        <div className="container">

            {isLoading && <h3>Loading</h3>}
            {isSuccess && movies?.docs.length > 0 && (
                <ul className={s.searchList}>
                    {movies.docs.map(movie =>
                        <li className={s.searchItem}
                            key={movie.id}
                            onClick={() => handleClick(movie.id)}
                        >
                            <div className={s.movieWrapper}>
                                <img
                                    className={s.movieImage}
                                    src={movie.poster.url}
                                    alt={movie.name}
                                />
                                <p>{movie.name}</p>
                            </div>

                        </li>)}
                </ul>
            )}
            {isSuccess && movies?.docs.length === 0 && (
                <p>There are no matches 😓</p>
            )}
            {isError && <p>Something went wrong!</p>}

        </div>
    )
};
export default Search;