import {combineReducers, configureStore} from "@reduxjs/toolkit";
import favoriteMoviesReducer from './favoriteMovieSlice.js'
import movieApi from "../api/api.js";


const reducers = combineReducers({

})

export const store = configureStore({
    reducer: {
        favoriteMovie: favoriteMoviesReducer,
        [movieApi.reducerPath]: movieApi.reducer,

    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(movieApi.middleware)
})