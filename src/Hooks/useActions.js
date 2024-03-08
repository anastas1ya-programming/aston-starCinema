import {useDispatch} from "react-redux";
import {useMemo} from "react";
import {bindActionCreators} from "@reduxjs/toolkit";
import {toggleFavorites} from '../redux/slices/favoriteMovieSlice.js'
const rootActions = {
    toggleFavorites
}
export const useActions = () => {
    const dispatch = useDispatch();
    return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])

}