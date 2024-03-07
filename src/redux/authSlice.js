import {createSlice} from "@reduxjs/toolkit";
import {createUserLS, isUserDataCorrect} from "../utils/localStorageUtils.js";
import {useSelector} from "react-redux";
import {getFavorite} from "./favoriteMovieSlice.js";

const currentUserEmail = JSON.parse(localStorage.getItem('current_user'));
const currentUser = JSON.parse(localStorage.getItem(currentUserEmail))

let initialState = currentUser ||
    {
        username: '',
        email: '',
        password: ''
    };


export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        createUser(state, action) {
            createUserLS(action.payload.username, action.payload.email, action.payload.password)
        },
        logInUser(state, action) {

            const user = isUserDataCorrect(action.payload.email, action.payload.password);
            if (user) {
                state.username = user.username;
                state.email = user.email;
                state.password = user.password;

            }
            localStorage.setItem('current_user', JSON.stringify(user.email))


        },
        logOutUser: (state) => {
            state.username = '';
            state.email = '';
            state.password = '';

            localStorage.removeItem('current_user')

        }
    }
})
export const getUser = (state) => state.auth
export const {createUser, logInUser, logOutUser} = authSlice.actions;
export default authSlice.reducer;