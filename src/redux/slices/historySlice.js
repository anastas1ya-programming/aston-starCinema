import {createSlice} from "@reduxjs/toolkit";
import {getUserHistoryLS} from "../../utils/localStorageUtils.js";
import {v4 as uuidv4} from "uuid";

let initialState = getUserHistoryLS() || [];

export const historySlice = createSlice({
    name: 'history',
    initialState,
    reducers: {
        addHistoryItem(state, action) {
            const newItem = {
                id: uuidv4(),
                value: action.payload
            }
            const isExists = state.some(item => item.id === action.payload.id)
            if (!isExists) state.push(newItem);

        },
        deleteHistoryItem(state, action) {
            state = state.filter((item) => item.id !== action.payload);
            return state;

        },
        getUserHistory (state) {
            state = getUserHistoryLS();
            return state;
        },

        clearHistory(state){
            state = [];
            return state;
        }

    }
});
export const getHistory = (state) => state.history
export const {addHistoryItem, deleteHistoryItem, getUserHistory, clearHistory} = historySlice.actions;
export default historySlice.reducer;
