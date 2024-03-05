import { useSelector} from "react-redux";
import HistoryItem from "../HistoryItem/HistoryItem.jsx";

const History = () => {

    const {history} = useSelector((state) => state)

    if (history.length === 0) {
        return <div className="container"><h3>You have not searched anything yet!</h3></div>;
    }

    return (
        <div className="container">
            <ul>
                {history.map((item, index) =>
                   <HistoryItem item={item} key ={index}/> )}

            </ul>

        </div>
    )
}
export default History