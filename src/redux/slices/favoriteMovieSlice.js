import {createSelector, createSlice} from "@reduxjs/toolkit";
import {getUserFavorites} from "../../utils/localStorageUtils.js";

let initialState = getUserFavorites() || []

export const favoriteMovieSlice = createSlice({
    name: 'favoriteMovie',
    initialState,
    reducers: {
        toggleFavorites(state, action) {
            const isExists = state.some(movie => movie.id === action.payload.id)
            if (isExists) {
                const index = state.findIndex(m => m.id === action.payload.id)
                if (index !== -1) {
                    state.splice(index, 1)
                }
            } else {
                state.push(action.payload)
            }
        },
        getFavoriteItem(state) {
            state = getUserFavorites();
            return state;
        },

        clearMovies(state) {
            state = [];
            return state;
        }
    }
});
export const getFavorite = (state) => state.favoriteMovie;
export const selectIsMovieLiked = createSelector(
    [getFavorite, (state, movies) => movies && movies.length > 0 ? movies[0].id : null],
    (favoriteMovies, movieId) =>
        favoriteMovies.some((movie) => movie.id === movieId)
);
export const {toggleFavorites, getFavoriteItem, clearMovies} = favoriteMovieSlice.actions;
export default favoriteMovieSlice.reducer;
