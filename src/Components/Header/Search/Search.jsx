import c from './Search.module.css'
const Search = () =>{
    return(
        <div>
            <input type="text" placeholder="Введите название фильма"/>
            <button className={c.btn}>Искать</button>
        </div>
    )
}
export default Search