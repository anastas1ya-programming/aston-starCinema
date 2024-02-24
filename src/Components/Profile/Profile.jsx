import profile from "../../assets/profile.png"
import c from './Profile.module.css'
const Profile = () =>{
    return(
        <div>
            <img className={c.img} src={profile} alt="favorites"/>
        </div>
    )
}
export default Profile