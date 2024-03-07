import {useSelector} from "react-redux";
import CardItem from "../Main/CardItem/CardItem.jsx";
import {getFavorite} from "../../redux/favoriteMovieSlice.js";

const Favorites = () => {

    const favoriteMovie = useSelector(getFavorite)

    if (favoriteMovie.length === 0) {
        return <div className="container"><h3>You have not added anything yet!</h3></div>;
    }
    return (
        <div className="container">
            <div className="row ">
                {favoriteMovie.map(movie =>
                    <CardItem title={movie.name} key={movie.id}
                              poster={movie.poster.url}
                              shortDescription={movie.shortDescription}
                              id={movie.id}
                              card={movie}
                    />
                )}
            </div>
        </div>
    )
}
export default Favorites