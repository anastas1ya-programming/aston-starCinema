import {createSlice} from "@reduxjs/toolkit";
import {createUserLS, getCurrent, isUserDataCorrect, removeCurrent, setCurrent} from "../../utils/localStorageUtils.js";


let initialState = getCurrent() ||
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

        },
        logInUser(state, action) {

            const user = isUserDataCorrect(action.payload.email, action.payload.password);
            if (user) {
                state.username = user.username;
                state.email = user.email;
                state.password = user.password;

            }
        },
        logOutUser: (state) => {
            state.username = '';
            state.email = '';
            state.password = '';

        }
    }
})
export const getUser = (state) => state.auth
export const {createUser, logInUser, logOutUser} = authSlice.actions;
export default authSlice.reducer;