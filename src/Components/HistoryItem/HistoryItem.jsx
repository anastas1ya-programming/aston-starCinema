import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {deleteHistoryItem} from "../../redux/historySlice.js";

const HistoryItem = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleDelete = (id) => {
        dispatch(deleteHistoryItem(id));
        console.log('was deleted ' + id)
    };

    return (
        <li>
            <p onClick={() => navigate(`/search/?query=${props.item}`)}>
                {props.item}
            </p>
            <button onClick={() => handleDelete(props.id)}>X</button>
        </li>
    )
}
export default HistoryItem