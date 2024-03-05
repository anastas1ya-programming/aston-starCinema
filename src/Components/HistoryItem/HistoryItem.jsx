import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {deleteHistoryItem} from "../../redux/historySlice.js";

const HistoryItem = ({item, key}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleDelete = (item) => {
        dispatch(deleteHistoryItem(item));
    };

    return (
        <li>
            <p onClick={() => navigate(`/search/?query=${item}`)}>
                {item}
            </p>
            <button onClick={() => handleDelete(item)}>X</button>
        </li>
    )
}
export default HistoryItem