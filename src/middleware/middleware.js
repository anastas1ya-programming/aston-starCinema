import {clearMovies, getFavoriteItem, toggleFavorites} from "../redux/favoriteMovieSlice.js";
import { addUserFavorites, setUserHistory} from "../utils/localStorageUtils.js";
import {addHistoryItem, clearHistory, deleteHistoryItem, getUserHistory} from "../redux/historySlice.js";
import {logInUser, logOutUser} from "../redux/authSlice.js";

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
export const initInfoMiddleware = (store) => (next) => (action) => {
    if (action.type === logInUser.type) {
        const result = next(action);
        store.dispatch(getUserHistory());
        store.dispatch(getFavoriteItem());
        return result;
    }
    return next(action);
};
export const resetStateMiddleware = (store) => (next) => (action) => {
    if (action.type === logOutUser.type) {
        const result = next(action);
        store.dispatch(clearMovies());
        store.dispatch(clearHistory());
        return result;
    }
    return next(action);
};

