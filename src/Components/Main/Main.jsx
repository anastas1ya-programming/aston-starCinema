import CardItem from "./CardItem/CardItem.jsx";
import {useGetMoviesQuery} from "../../api/api.js";

const Main = (props) => {

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

    console.log(movies)


    return (
        <div className="container">
            <div className="row ">
                { movies.docs.map(movie =>
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
export default Main