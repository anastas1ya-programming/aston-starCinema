import {combineReducers, configureStore} from "@reduxjs/toolkit";
import favoriteMoviesReducer from './favoriteMovieSlice.js';
import historyReducer from './historySlice.js';
import authReducer from './authSlice.js';
import movieApi from "../api/api.js";
import {saveFavoritesMiddleware, setHistoryMiddleware} from "../middleware/middleware.js";


const reducers = combineReducers({
    favoriteMovie: favoriteMoviesReducer,
    history: historyReducer,
    auth: authReducer,
    [movieApi.reducerPath]: movieApi.reducer,

})

export const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(movieApi.middleware, saveFavoritesMiddleware, setHistoryMiddleware)
})