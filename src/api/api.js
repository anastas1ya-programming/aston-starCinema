import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
const selectFields = ['name', 'year', 'id', 'rating', 'poster', 'description', 'genres', 'movieLength', 'seriesLength', 'totalSeriesLength', 'backdrop', 'alternativeName'];
const apiKey = import.meta.env.VITE_API_KEY;
const movieApi = createApi({

    reducerPath: 'movieApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.kinopoisk.dev/',
        prepareHeaders: (headers) => {

            headers.set('Content-Type', 'application/json');
            headers.set('X-API-KEY', apiKey);
            debugger;
            return headers;
        },
    }),

    endpoints: builder => ({

        getMovies: builder.query({
            query: (args) => {
                const params = new URLSearchParams(args);
                return {url: `v1.4/movie?${params.toString()}`};
            },
            transformResponse: (response) => {return response.docs}
        }),

        getDetailedInfo: builder.query({
            query: (args) => {
                const params = new URLSearchParams({'id': args});
                selectFields.forEach(field => {
                    params.append('selectFields', field);
                });
                return {url: `v1.4/movie?${params.toString()}`};
            },
            transformResponse: (response) => {return response.docs}
        }),

        getSearchMovies: builder.query({
            query: (request) => {

                return {url: `v1.4/movie/search?query=${request}`};
            },
            transformResponse: (response) => {return response.docs}
        })


    })
})
export const {useGetMoviesQuery, useGetDetailedInfoQuery, useGetSearchMoviesQuery} = movieApi;
export default movieApi;