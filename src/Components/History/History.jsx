import history from "../../assets/history.png"
import c from './History.module.css'
const History = () =>{
    return(
        <div>
            <img className={c.img} src={history} alt="favorites"/>
        </div>
    )
}
export default History