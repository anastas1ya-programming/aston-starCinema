import {toggleFavorites} from "../redux/favoriteMovieSlice.js";
import {addUserFavorites, setUserHistory} from "../utils/localStorageUtils.js";
import {addHistoryItem, deleteHistoryItem} from "../redux/historySlice.js";

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

