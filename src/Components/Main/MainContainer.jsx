import Main from "./Main.jsx";
import {store} from "../../redux/store.js";
import {useGetMoviesQuery} from '../../redux/movieApi.js'

const MainContainer = (props) => {
    const selectFields = ['name', 'year', 'id', 'rating', 'poster', 'shortDescription', 'description'];

    const params = new URLSearchParams({
        year: '2023',
        limit: '20',
        'rating.imdb': '8-10',

    });
    selectFields.forEach(field => {
        params.append('selectFields', field);
    });

    const {data: movies, isError, isLoading} = useGetMoviesQuery(params);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (isError) {
        return <p>Error occurred while loading movies!</p>;
    }


    return (
        <Main movies={movies.docs} store={store}/>
    )
}
export default MainContainer