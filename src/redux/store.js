import {combineReducers, configureStore} from "@reduxjs/toolkit";
import favoriteMoviesReducer from './favoriteMovieSlice.js'
import movieApi from "../api/api.js";


const reducers = combineReducers({
    favoriteMovie: favoriteMoviesReducer,
    [movieApi.reducerPath]: movieApi.reducer,

})

export const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(movieApi.middleware)
})