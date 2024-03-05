import {createSlice} from "@reduxjs/toolkit";
import {getHistoryLS, setHistoryLS} from "../utils/localStorageUtils.js";

let initialState = getHistoryLS();

export const historySlice = createSlice({
    name: 'history',
    initialState,
    reducers: {
        addHistoryItem(state, action) {
            state.push(action.payload);
            setHistoryLS(state);
        },
        deleteHistoryItem(state, action) {
            state = state.filter((item) => item !== action.payload);
            setHistoryLS(state)
        },
        getHistory(state) {
            const historyItems = getHistoryLS;
            if (historyItems) {
                state = historyItems;
            }
        }
    }
});
export const {addHistoryItem, deleteHistoryItem, getHistory} = historySlice.actions;
export default historySlice.reducer;
