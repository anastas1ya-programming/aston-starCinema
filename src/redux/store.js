import {configureStore} from "@reduxjs/toolkit";
import favoriteMoviesReducer from './favoriteMovieSlice.js'
export const store = configureStore({
    reducer: {
        favoriteMovie: favoriteMoviesReducer,

    }
})