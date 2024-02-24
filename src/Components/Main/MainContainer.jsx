import Main from "./Main.jsx";
import {useEffect, useState} from "react";

const MainContainer = (props) => {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const selectFields = ['name', 'year', 'id', 'rating', 'poster', 'shortDescription', 'description'];

                const params = new URLSearchParams({
                    year: '2023',
                    limit: '20',
                    'rating.imdb': '8-10',

                });
                selectFields.forEach(field => {
                    params.append('selectFields', field);
                });


                const headers = {
                    'Content-Type': 'application/json',
                    'X-API-KEY': 'ZET3EKN-MGJ4H00-GPBRZFA-RDMMFW5',
                };


                const response = await fetch(`https://api.kinopoisk.dev/v1.4/movie?${params}`, {headers});


                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }


                const result = await response.json();

                setMovies(result);
                setIsLoading(false);
            } catch (error) {

                setError(error);
                setIsLoading(false);
            }
        };


        fetchData();
    }, []);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }
    debugger;
    return (

        <Main movies={movies.docs}/>
    )
}
export default MainContainer