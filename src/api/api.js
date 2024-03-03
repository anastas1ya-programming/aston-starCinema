import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
const selectFields = ['name', 'year', 'id', 'rating', 'poster', 'description', 'genres', 'movieLength', 'seriesLength', 'totalSeriesLength', 'backdrop'];
const movieApi = createApi({

    reducerPath: 'movieApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.kinopoisk.dev/',
        prepareHeaders: (headers) => {
            const API_KEY = '0ZYHMMB-0PK4KA6-Q98FNTP-8XYEN0B'
            headers.set('Content-Type', 'application/json');
            headers.set('X-API-KEY', API_KEY);
            return headers;
        },
    }),

    endpoints: builder => ({

        getMovies: builder.query({
            query: (args) => {
                const params = new URLSearchParams(args);
                return {url: `v1.4/movie?${params.toString()}`};
            }
        }),

        getDetailedInfo: builder.query({
            query: (args) => {
                const params = new URLSearchParams({'id': args});
                selectFields.forEach(field => {
                    params.append('selectFields', field);
                });
                return {url: `v1.4/movie?${params.toString()}`};
            }
        }),


    })
})
export const {useGetMoviesQuery, useGetDetailedInfoQuery} = movieApi;
export default movieApi;