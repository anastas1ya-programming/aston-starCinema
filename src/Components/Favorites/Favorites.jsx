import heart from "../../assets/heart.png"
import c from './Favorites.module.css'
const Favorites = () =>{
    return(
        <div>
            <img className={c.img} src={heart} alt="favorites"/>
        </div>
    )
}
export default Favorites