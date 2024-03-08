import CardItem from "../../Components/CardItem/CardItem.jsx";
import {useGetMoviesQuery} from "../../api/api.js";

const Main = (props) => {

    const selectFields = ['name', 'year', 'id', 'rating', 'poster', 'shortDescription', 'description'];

    const params = new URLSearchParams({
        year: '2023',
        limit: '20',
        'rating.imdb': '8-10'
    });
    selectFields.forEach(field => {
        params.append('selectFields', field);
    });

    const {data: movies, isError, isLoading} = useGetMoviesQuery(params);

    if (isLoading) {
        return (
            <div className="container">
                <div className="d-flex justify-content-center pt-3">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div>)
    }

    if (isError) {
        return <p>Error occurred while loading movies!</p>;
    }

    return (
        <div className="container">
            <div className="row ">
                {movies.docs.map(movie =>
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