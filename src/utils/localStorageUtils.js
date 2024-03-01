
export const setFavoritesLS = (favorites) =>{
    localStorage.setItem('favorite', JSON.stringify(favorites));

}
export const getFavoritesLS = () =>{
    const favorites = JSON.parse(localStorage.getItem('favorite')) || [];
    return favorites;
}