import {NavLink} from "react-router-dom";

const CardItem = (props) => {
    let path = '/movie/' + props.id
    return (
        <div className="col mb-4">
            <div className="card m-auto mb-2 h-100" style={{width: "18rem"}}>
                <img
                    src={props.poster}
                    className="card-img-top" alt={props.title}/>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text"> {props.shortDescription}</p>
                </div>

                <div className="card-footer d-flex justify-content-between align-items-center">
                    <button className="btn btn-primary ">Like</button>
                    <NavLink to={path} className="card-link">Подробнее</NavLink>

                </div>
            </div>
        </div>
    )
}
export default CardItem