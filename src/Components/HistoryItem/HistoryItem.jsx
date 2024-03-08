import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {deleteHistoryItem} from "../../redux/slices/historySlice.js";
import s from './HistoryItem.module.css'
import {useContext} from "react";
import {ThemeContext} from "../../App.jsx";


const HistoryItem = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { theme } = useContext(ThemeContext);

    const handleDelete = (id) => {
        dispatch(deleteHistoryItem(id));
    };

    return (
        <li className={`${s.historyItem} ${theme === "dark" ? s.darkTheme : s.lightTheme}`}>
            <p onClick={() => navigate(`/search/?query=${props.item}`)}>
                {props.item}
            </p>
            <button className={s.deleteButton} onClick={() => handleDelete(props.id)}>X</button>
        </li>
    );
}
export default HistoryItem