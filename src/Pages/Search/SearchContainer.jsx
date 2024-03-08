import {useLocation, useNavigate} from "react-router-dom";
import {useGetSearchMoviesQuery} from "../../api/api.js";
import Search from "./Search.jsx";

const SearchContainer = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const queryParam = new URLSearchParams(location.search).get('query');
    const {data: movies, isSuccess, isLoading, isError} = useGetSearchMoviesQuery(queryParam);

    const handleClick = (id) => {
        navigate(`/detailed/${id}`);
    };

    return (
        <Search
            movies={movies}
            isSuccess={isSuccess}
            isLoading={isLoading}
            isError={isError}
            handleClick={handleClick}
        />
    )
};
export default SearchContainer;