import CardItem from "../Main/CardItem/CardItem.jsx";
const Favorites = (props) =>{
    let movieElements = props.movies.map(movie =>
        <CardItem title={movie.name} key={movie.id}
                  poster={movie.poster.url}
                  shortDescription={movie.shortDescription}
                  id={movie.id}
        />
    )

    return(
        <div>
            {movieElements}
        </div>
    )
}
export default Favorites