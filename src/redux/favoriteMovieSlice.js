import {createSlice} from "@reduxjs/toolkit";
import { getUserFavorites} from "../utils/localStorageUtils.js";


let initialState = []

debugger

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
                    //return state
                }
            } else {
                state.push(action.payload)

            }
        },
        getFavoriteItem(state) {
            const email = localStorage.getItem('current_user')
            if(email){
                state = getUserFavorites(email)
            }
            return state;
        },

        clearMovies(state){
            state = initialState;
            return state;
        }


    }
});
export const getFavorite = (state) => state.favoriteMovie
export const {toggleFavorites, getFavoriteItem, clearMovies} = favoriteMovieSlice.actions;
export default favoriteMovieSlice.reducer;
