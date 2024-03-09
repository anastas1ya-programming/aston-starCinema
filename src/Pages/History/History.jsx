import {useSelector} from "react-redux";
import HistoryItem from "../../Components/HistoryItem/HistoryItem.jsx";
import s from './History.module.css'
import {getHistory} from "../../redux/slices/historySlice.js";

const History = () => {
    const history = useSelector(getHistory)

    if (history.length === 0) {
        return <div className="container"><h3>You have not searched anything yet!</h3></div>;
    }

    return (
        <div className="container">
            <ul className={s.historyList}>
                {history.map((item) =>
                    <HistoryItem item={item.value} id={item.id} key={item.id}/>)}
            </ul>

        </div>
    )
}
export default History