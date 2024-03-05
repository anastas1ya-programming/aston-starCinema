import {useLocation, useNavigate} from "react-router-dom";
import {useGetSearchMoviesQuery} from "../../api/api.js";
import s from './Search.module.css'

const Search = () =>{
    const navigate = useNavigate();
    const location = useLocation();
    const queryParam = new URLSearchParams(location.search).get('query');
    const {data: movies, isSuccess, isLoading, isError} = useGetSearchMoviesQuery(queryParam);

    const handleClick = (id) =>{
        navigate(`/element/${id}`);
    };

    return (
        <div className="container">

            {isLoading && <h3>Loading</h3>}
            {isSuccess && movies?.docs.length > 0 && (
                <ul className={s.searchList}>
                    {movies.docs.map(movie =>
                    <li className={s.searchItem}
                        key={movie.id}
                        onClick = {() => handleClick(movie.id)}
                    >
                        <p>{movie.name}</p>

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