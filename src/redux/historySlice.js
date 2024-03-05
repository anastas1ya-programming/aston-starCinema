import {createSlice} from "@reduxjs/toolkit";
import {getHistoryLS, setHistoryLS} from "../utils/localStorageUtils.js";
import { v4 as uuidv4 } from "uuid";

let initialState = getHistoryLS();

export const historySlice = createSlice({
    name: 'history',
    initialState,
    reducers: {
        addHistoryItem(state, action) {
            const newItem ={
                id: uuidv4(),
                value: action.payload
            }
            const isExists = state.some(item => item.id === action.payload.id)
            if (!isExists) state.push(newItem);
            setHistoryLS(state);
        },
        deleteHistoryItem(state, action) {
            state = state.filter((item) => item.id !== action.payload);
            setHistoryLS(state);
            return state;

        },

    }
});
export const {addHistoryItem, deleteHistoryItem} = historySlice.actions;
export default historySlice.reducer;
