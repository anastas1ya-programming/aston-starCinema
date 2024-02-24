import CardItem from "./CardItem/CardItem.jsx";

const Main = (props) => {

    let movieElements = props.movies.map(movie =>
        <CardItem title={movie.name}
                  poster={movie.poster.url}
                  shortDescription={movie.shortDescription}
                  id={movie.id}
        />
    )

    return (
        <div className="container">
            <div className="row ">
                {movieElements}
            </div>
        </div>
    )
}
export default Main