import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";


const movieApi = createApi({

    reducerPath: 'movieApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.kinopoisk.dev/',
        prepareHeaders: (headers) => {
            const API_KEY = 'ZET3EKN-MGJ4H00-GPBRZFA-RDMMFW5'
            headers.set('Content-Type', 'application/json');
            headers.set('X-API-KEY', API_KEY);
            return headers;
        },
    }),

    endpoints: builder => ({

        getMovies: builder.query({
            query: (args) => {
                    debugger
                const params = new URLSearchParams(args);
                return {url: `v1.4/movie?${params.toString()}`};
            }
        }),

        getDetailedInfo: builder.query({
            query: (args) => {
                debugger
                const params = new URLSearchParams(args)
                return {url: `v1.4/movie?${params.toString()}`};
            }
        }),



    })
})
export const {useGetMoviesQuery, useGetDetailedInfoQuery} = movieApi;
export default movieApi;