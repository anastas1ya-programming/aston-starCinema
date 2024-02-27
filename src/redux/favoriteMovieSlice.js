import {createSlice} from "@reduxjs/toolkit";


let initialState = {
    favoriteMovies:  JSON.parse(localStorage.getItem('favorite')) || []

}

export const favoriteMovieSlice = createSlice({
        name: 'favoriteMovie',
        initialState,
        reducers: {
            addMovieToFavorite(state, action) {
                state.favoriteMovies.push(action.payload);
                localStorage.setItem('favorite', JSON.stringify(state.favoriteMovies))

            },
            deleteMovieFromFavorite(state, action) {
                debugger
                state.favoriteMovies = state.favoriteMovies.filter(movie => movie.id !== action.payload)
                localStorage.setItem('favorite', JSON.stringify(state.favoriteMovies))
            },

        }

    }
);
export const {addMovieToFavorite, deleteMovieFromFavorite} = favoriteMovieSlice.actions;
export default favoriteMovieSlice.reducer