import logo from "../../../assets/logo.png"
import c from './Logo.module.css'

const Logo = () => {
    return (
        <div>
            <div className="row">
                <div className="col">
                    <img src={logo} className={c.logo}/>
                </div>
                <div className="col">
                    <div>Star Cinema</div>
                </div>
            </div>
        </div>
    )
}
export default Logo