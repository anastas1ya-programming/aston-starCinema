import {combineReducers, configureStore} from "@reduxjs/toolkit";
import favoriteMoviesReducer from './slices/favoriteMovieSlice.js';
import historyReducer from './slices/historySlice.js';
import authReducer from './slices/authSlice.js';
import movieApi from "../api/api.js";
import {
    initInfoMiddleware,
    resetStateMiddleware,
    saveFavoritesMiddleware,
    setHistoryMiddleware
} from "./middleware/middleware.js";


const reducers = combineReducers({
    favoriteMovie: favoriteMoviesReducer,
    history: historyReducer,
    auth: authReducer,
    [movieApi.reducerPath]: movieApi.reducer,

})

export const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(movieApi.middleware, saveFavoritesMiddleware, setHistoryMiddleware, initInfoMiddleware, resetStateMiddleware)
})