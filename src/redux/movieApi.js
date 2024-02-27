import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
const movieApi = createApi({
    reducerPath: 'movieApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.kinopoisk.dev/',
        prepareHeaders: (headers) => {
            // const API_KEY = 'GCB4F62-3N3M73C-M6924VJ-ACG23C3'
            headers.set('Content-Type', 'application/json');
            headers.set('X-API-KEY', API_KEY);
            return headers;
        },
    }),

    endpoints: (builder) => ({
        getMovies: builder.query({
            query: (args) => {
                const params = new URLSearchParams(args);

                return {url: `v1.4/movie?${params.toString()}`};
            }
        }),
        getFavoriteMovies: builder.query({
            query: (args) =>{
                const params = new URLSearchParams(args)
                return {url: `v1.4/movie?${params.toString()}`};
            }
        })

    })
})
export const {useGetMoviesQuery, useGetFavoriteMoviesQuery} = movieApi;
export default movieApi;
