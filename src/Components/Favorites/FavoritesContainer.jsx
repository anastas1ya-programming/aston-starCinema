import Favorites from "./Favorites.jsx";
import {store} from "../../redux/store.js";
import {useGetFavoriteMoviesQuery} from "../../redux/movieApi.js";

const FavoritesContainer = () =>{
    const selectFields = ['name', 'year', 'id', 'rating', 'poster', 'shortDescription', 'description'];
    const params = new URLSearchParams();
    selectFields.forEach(field => {
        params.append('selectFields', field);
    });

    const favIds = JSON.parse(localStorage.getItem('favorite')).map(obj => obj.id )
    console.log(favIds)
    favIds.forEach(id => {
        params.append('id', id);
    });


    const {data: movies, isError, isLoading} = useGetFavoriteMoviesQuery(params);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (isError) {
        return <p>Error occurred while loading favorites!</p>;
    }
    return(
        <div>
            <Favorites movies={movies.docs} store={store}/>
        </div>
    )
}
export default FavoritesContainer