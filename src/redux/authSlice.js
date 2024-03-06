import {createSlice} from "@reduxjs/toolkit";
import {createUserLS, getUserInfoLS} from "../utils/localStorageUtils.js";

let initialState = {
    username: '',
    email: '',
    password: ''
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        createUser(state, action ){
            state.username = action.payload.username;
            state.email = action.payload.email;
            state.password = action.payload.password;
            createUserLS(state.username, state.email, state.password)
        },
        logInUser(state, action){
            const user = getUserInfoLS(action.payload);
            if (user) {
                state.username = user.username;
                state.email = user.email;
                state.password = user.password;
            }


        },
        logOutUser(state, action){
            state.username = '';
            state.email = '';
            state.password = '';

        }
    }
})
export const getUser = (state) => state.auth
export const {createUser, logInUser, logOutUser} = authSlice.actions;
export default authSlice.reducer;