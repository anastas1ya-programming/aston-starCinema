import {useSelector} from "react-redux";
import CardItem from "../Main/CardItem/CardItem.jsx";
import {useGetFavoriteMoviesQuery} from "../../api/api.js";
import {toggleFavorites} from "../../redux/favoriteMovieSlice.js";
import {useState} from "react";

const Favorites = () =>{


    const selectFields = ['name', 'year', 'id', 'rating', 'poster', 'shortDescription', 'description'];
    const params = new URLSearchParams();
    selectFields.forEach(field => {
        params.append('selectFields', field);
    });
    const {favoriteMovie} = useSelector(state => state)
    const favIds = favoriteMovie.map(obj => obj.id) || [];
    favIds.forEach(id => {
        params.append('id', id);
    });


    const {data: movies, isError, isLoading } = useGetFavoriteMoviesQuery(params);



    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (isError) {
        return <p>Error occurred while loading favorites!</p>;
    }
    return(
        <div className="container">
            <div className="row ">
                { movies.docs.map(movie =>
                    <CardItem title={movie.name} key={movie.id}
                              poster={movie.poster.url}
                              shortDescription={movie.shortDescription}
                              id={movie.id}

                    />
                )}
            </div>
        </div>
    )
}
export default Favorites