import {useEffect, useRef, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {useGetSearchMoviesQuery} from "../../api/api.js";
import s from './SearchForm.module.css'
import {useDispatch} from "react-redux";
import {addHistoryItem} from "../../redux/slices/historySlice.js";
import {useDebounce} from "../../Hooks/useDebounce.js";
import {isAuth} from "../../utils/localStorageUtils.js";

const SearchForm = () => {

    const location = useLocation();
    const queryParam = new URLSearchParams(location.search).get('query');
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState(queryParam || "");
    const debounceSearch = useDebounce(input, 500);
    const {data: movies} = useGetSearchMoviesQuery(debounceSearch, {skip: input.trim().length <= 0});
    const navigate = useNavigate();
    const suggestionRef = useRef(null);


    const handleSubmit = (e) => {
        e.preventDefault();
        if(isAuth()){dispatch(addHistoryItem(input));}
        navigate(`/search?query=${input}`);
        setIsOpen(false);
    }
    const handleChange = (e) => {
        setInput(() => e.target.value);
    }

    const handleClear = () => {
        setInput("");
    }

    const handleClick = (name, id) => {
        navigate(`/detailed/${id}`);
        setIsOpen(false);
    }


    const handleFormClick = () => {
        setIsOpen(true);
    }

    const handleOutsideClick = (e) => {
        if (suggestionRef.current && !suggestionRef.current.contains(e.target)) {
            setIsOpen(false);
        }
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleOutsideClick);
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, []);


    return (
        <section>
            <form className="d-flex pb-2" role="search" onSubmit={handleSubmit} onClick={handleFormClick}>
                <input
                    className="form-control me-2"
                    type="text"
                    placeholder="Search"
                    value={input || ''}
                    onChange={handleChange}
                    aria-label="Search"
                />
                {input && (
                    <button
                        className={`btn btn-outline-none`}
                        type="button"
                        onClick={handleClear}
                    >
                        <i className="bi bi-x-circle"></i>
                    </button>
                )}
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            {input.length === 0 || isOpen && (
                <div className={s.search} ref={suggestionRef}>
                    {movies?.docs?.length ? (
                        <ul className={s.searchList}>
                            {movies.docs.map(movie =>
                                <li
                                    className={s.searchItem}
                                    key={movie.id}
                                    onClick={() => handleClick(movie.name, movie.id)}
                                >
                                    <div className={s.movieInfo}>
                                        {movie.poster.url && (
                                            <img
                                                src={movie.poster.url}
                                                alt={movie.name}
                                                className={s.movieImage}
                                            />
                                        )}
                                        <span>{movie.name}</span>
                                    </div>
                                </li>
                            )}
                        </ul>
                    ) : (
                        <p>There are no matches 😓</p>
                    )}
                </div>
            )}
        </section>
    );
}
export default SearchForm