import {createSlice} from "@reduxjs/toolkit";


let initialState =  JSON.parse(localStorage.getItem('favorite')) || []



export const favoriteMovieSlice = createSlice({
        name: 'favoriteMovie',
        initialState,
        reducers: {

            toggleFavorites (state, action) {
                debugger
                const isExists = state.some(movie => movie.id === action.payload.id)
                if (isExists) {
                    const index= state.findIndex(m => m.id === action.payload.id)
                 //   state = state.filter(m => m.id !== action.payload.id)
                    if(index!==-1){
                    state.splice(index,1)
                    localStorage.setItem('favorite', JSON.stringify(state))
                    }
                } else {state.push(action.payload)
                    localStorage.setItem('favorite', JSON.stringify(state))
                console.log(state)

                }

            }

        }

    }
);
export const {toggleFavorites} = favoriteMovieSlice.actions;
export default favoriteMovieSlice.reducer