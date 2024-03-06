import {toggleFavorites} from "../redux/favoriteMovieSlice.js";
import {setFavoritesLS, setHistoryLS} from "../utils/localStorageUtils.js";
import {addHistoryItem, deleteHistoryItem} from "../redux/historySlice.js";

export const saveFavoritesMiddleware = (store) => (next) => (action) => {
    if (action.type === toggleFavorites.type) {
        const result = next(action);
        const currentState = store.getState().favoriteMovie;
        setFavoritesLS(currentState);
        return result;
    }
    return next(action);
};
export const setHistoryMiddleware = (store) => (next) => (action) => {
    if (action.type === addHistoryItem.type || action.type === deleteHistoryItem.type) {
        const result = next(action);
        const currentState = store.getState().history;
        setHistoryLS(currentState);
        return result;
    }
    return next(action);
};

