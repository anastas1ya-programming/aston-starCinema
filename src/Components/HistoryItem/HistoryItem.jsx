import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {deleteHistoryItem} from "../../redux/historySlice.js";
import s from './HistoryItem.module.css'


const HistoryItem = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleDelete = (id) => {
        dispatch(deleteHistoryItem(id));
    };

    return (
        <li className={s.historyItem}>
            <p onClick={() => navigate(`/search/?query=${props.item}`)}>
                {props.item}
            </p>
            <button className={s.deleteButton} onClick={() => handleDelete(props.id)}>X</button>
        </li>
    )
}
export default HistoryItem