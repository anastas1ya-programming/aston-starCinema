import {useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {useGetSearchMoviesQuery} from "../../../api/api.js";
import s from './SearchForm.module.css'
import {useDispatch} from "react-redux";
import {addHistoryItem} from "../../../redux/historySlice.js";
import {useDebounce} from "../../../Hooks/useDebounce.js";

const SearchForm = () => {

    const location = useLocation();

    const queryParam = new URLSearchParams(location.search).get('query');

    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState(queryParam || "");
    const debounceSearch = useDebounce(input, 500);
    const {data: movies} = useGetSearchMoviesQuery(debounceSearch, {skip: input.trim().length <= 0});
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addHistoryItem(input));
        navigate(`/search?query=${input}`);
    }
    const handleChange = (e) => {
        setInput(() => e.target.value);
    }

    const handleClick = (name, id) => {
        navigate(`/detailed/${id}`);

    }

    return (
        <section>
            <form className="d-flex" role="search" onSubmit={handleSubmit}>
                <input
                    className="form-control me-2"
                    type="text"
                    placeholder="Search"
                    value={input || ''}
                    onChange={handleChange}
                    aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            <div className={s.search}>
                {movies?.docs?.length ? (
                        <ul className={s.searchList}>
                            {movies.docs.map(movie =>
                                <li className={s.searchItem} key={movie.id} onClick={() => {
                                    handleClick(movie.name, movie.id)
                                }}
                                >{movie.name}</li>
                            )}
                        </ul>
                    ) :
                    <p>There are no matches 😓</p>}
            </div>
        </section>
    )
}
export default SearchForm