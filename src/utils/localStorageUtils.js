
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

export const getUserInfoLS = () =>{
    const user = JSON.parse(localStorage.getItem('email')) ;
    return user;
}

export const createUserLS = (username, email, password) =>{
    if(email) {
        localStorage.setItem(email,
            JSON.stringify({
                username: username,
                email: email,
                password: password,
                favorites: [],
                history: []
            }))
    }
}

export const addUserFavoritesLS = (email, favorite) =>{
    JSON.stringify(JSON.parse(localStorage.getItem(email)).favorites.append(favorite));


}

export const addUserHistoryLS = (email, history) =>{
    JSON.stringify(JSON.parse(localStorage.getItem(email)).favorites.append(history));
}

