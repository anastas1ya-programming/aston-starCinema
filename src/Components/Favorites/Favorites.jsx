import {useSelector} from "react-redux";
import CardItem from "../Main/CardItem/CardItem.jsx";
import {useGetFavoriteMoviesQuery} from "../../api/api.js";

// const selectFields = ['name', 'year', 'id', 'rating', 'poster', 'shortDescription', 'description'];

const Favorites = () => {
    // const params = new URLSearchParams();
    // selectFields.forEach(field => {
    //     params.append('selectFields', field);
    // });
    const {favoriteMovie} = useSelector(state => state)
    // const favIds = favoriteMovie.map(obj => obj.id) || [];
    // favIds.forEach(id => {s
    //     params.append('id', id);
    // });


   // const {data: movies, isError, isLoading} = useGetFavoriteMoviesQuery(params);

    // if (isLoading) {
    //     return <p>Loading...</p>;
    // }
    //
    if (favoriteMovie.length===0) {
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