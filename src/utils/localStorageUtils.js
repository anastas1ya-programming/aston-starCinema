
export const setFavoritesLS = (favorites) =>{
    localStorage.setItem('favorite', JSON.stringify(favorites));

}
export const getFavoritesLS = () =>{
    const favorites = JSON.parse(localStorage.getItem('favorite')) || [];
    return favorites;
}

export const setHistoryLS =(history) =>{
    localStorage.setItem('history', JSON.stringify(history));
}

export const getHistoryLS = () =>{
    const history = JSON.parse(localStorage.getItem('history')) || [];
    return history;
}