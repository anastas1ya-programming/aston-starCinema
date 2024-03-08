import {clearMovies, getFavoriteItem, toggleFavorites} from "../slices/favoriteMovieSlice.js";
import {
    addUserFavorites, createUserLS,
    isUserDataCorrect,
    removeCurrent,
    setCurrent,
    setUserHistory
} from "../../utils/localStorageUtils.js";
import {addHistoryItem, clearHistory, deleteHistoryItem, getUserHistory} from "../slices/historySlice.js";
import {createUser, logInUser, logOutUser} from "../slices/authSlice.js";

export const saveFavoritesMiddleware = (store) => (next) => (action) => {
    if (action.type === toggleFavorites.type) {
        const result = next(action);
        const currentState = store.getState().favoriteMovie;
        const email = localStorage.getItem('current_user').slice(1, -1)
        addUserFavorites(email, currentState);
        return result;
    }
    return next(action);
};
export const setHistoryMiddleware = (store) => (next) => (action) => {
    if (action.type === addHistoryItem.type || action.type === deleteHistoryItem.type) {
        const result = next(action);
        const currentState = store.getState().history;
        const email = localStorage.getItem('current_user').slice(1, -1);
        setUserHistory(email, currentState);
        return result;
    }
    return next(action);
};
export const createUserMiddleware = (store) => (next) => (action) => {
    if (action.type === createUser.type) {
        const result = next(action);
        createUserLS(action.payload.username, action.payload.email, action.payload.password)
        return result;
    }
    return next(action);
};
export const logInMiddleware = (store) => (next) => (action) => {
    if (action.type === logInUser.type) {
        const result = next(action);
        const user = isUserDataCorrect(action.payload.email, action.payload.password);
        setCurrent(user);
        store.dispatch(getUserHistory());
        store.dispatch(getFavoriteItem());
        return result;
    }
    return next(action);
};
export const logOutMiddleware = (store) => (next) => (action) => {
    if (action.type === logOutUser.type) {
        const result = next(action);
        removeCurrent();
        store.dispatch(clearMovies());
        store.dispatch(clearHistory());
        return result;
    }
    return next(action);
};

