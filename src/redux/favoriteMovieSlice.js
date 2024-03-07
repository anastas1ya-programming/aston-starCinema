import {createSlice} from "@reduxjs/toolkit";
import { getUserFavorites} from "../utils/localStorageUtils.js";

const email = localStorage.getItem('current_user')
let initialState = []
if (email) {initialState = getUserFavorites(email);}
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
        initState(state,action){

          return state = action.payload
        },
        clearState(state){
            state=[]
            return state
        }


    }
});
export const getFavorite = (state) => state.favoriteMovie
export const {toggleFavorites,clearState,initState} = favoriteMovieSlice.actions;
export default favoriteMovieSlice.reducer;
