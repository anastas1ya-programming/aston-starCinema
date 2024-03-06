import {createSlice} from "@reduxjs/toolkit";
import {getFavoritesLS} from "../utils/localStorageUtils.js";

let initialState = getFavoritesLS();

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
        }
    }
});
export const getFavorite = (state) => state.favoriteMovie
export const {toggleFavorites} = favoriteMovieSlice.actions;
export default favoriteMovieSlice.reducer;
