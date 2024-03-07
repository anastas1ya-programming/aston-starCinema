
export const createUserLS = (username, email, password) => {
    if (email) {
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

export const isUserDataCorrect = (email, password) => {
    const user = JSON.parse(localStorage.getItem(email));
    if (password === user.password) {
        return user;
    }
}

export const isAuth = () =>{
    if (localStorage.getItem('current_user')){
        return true;
    } else{return false}
}

export const addUserFavorites = (email, favorites) => {
    const user = JSON.parse(localStorage.getItem(email));
    user.favorites = favorites
    localStorage.setItem(email, JSON.stringify(user))


}
export const getUserFavorites = (email) => {
    const user = JSON.parse(localStorage.getItem(email.slice(1, -1)));
    if (user) {
        return user.favorites

    }
}

export const setUserHistory = (email, history) => {
    const user = JSON.parse(localStorage.getItem(email));
    user.history = history;
    localStorage.setItem(email, JSON.stringify(user))

}

export const getUserHistoryLS = (email) => {
    const user = JSON.parse(localStorage.getItem(email.slice(1, -1)));
    if (user) {
        return user.history
    }
}
