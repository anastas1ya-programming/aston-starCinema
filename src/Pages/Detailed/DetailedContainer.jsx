import {useGetDetailedInfoQuery,} from "../../api/api.js";
import {useNavigate, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {useActions} from "../../Hooks/useActions.js";
import {getFavorite} from "../../redux/slices/favoriteMovieSlice.js";
import {isAuth} from "../../utils/localStorageUtils.js";
import Detailed from "./Detailed.jsx";

const DetailedContainer = () => {
    const {toggleFavorites} = useActions();

    const favoriteMovie = useSelector(getFavorite)

    const navigate = useNavigate();

    const paramFromUrl = useParams();

    const {data: movies, isError, isLoading, isSuccess} = useGetDetailedInfoQuery(paramFromUrl.id);

    const isMovieLiked = movies && movies.length > 0 &&
        favoriteMovie.some(movie => movie.id === movies[0].id);

    const handleAddToFavorites = (m) => {
        if (isAuth()) {
            toggleFavorites(m)
        } else {
            navigate('/login')
        }
    }

    return (
        <Detailed
            isError={isError}
            isLoading={isLoading}
            isSuccess={isSuccess}
            movies={movies}
            isMovieLiked={isMovieLiked}
            handleAddToFavorites={handleAddToFavorites}
            navigate = {navigate}
        />
    )
}
export default DetailedContainer