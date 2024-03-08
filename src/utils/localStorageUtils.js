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

export const isAuth = () => {
    if (localStorage.getItem('current_user')) {
        return true;
    } else {
        return false
    }
}

export const isUserExists = (email) => {
    if (localStorage.getItem(email)) {
        return true;
    } else {
        return false
    }
}

export const setCurrent = (user) => {
    localStorage.setItem('current_user', JSON.stringify(user.email))
}

export const getCurrent = () => {
    const currentUserEmail = JSON.parse(localStorage.getItem('current_user'));
    const currentUser = JSON.parse(localStorage.getItem(currentUserEmail));
    return currentUser;
}

export const removeCurrent = () =>{
    localStorage.removeItem('current_user')
}

export const addUserFavorites = (email, favorites) => {
    const user = JSON.parse(localStorage.getItem(email));
    user.favorites = favorites
    localStorage.setItem(email, JSON.stringify(user))


}
export const getUserFavorites = () => {
    const email = localStorage.getItem('current_user')
    if (email) {
        const user = JSON.parse(localStorage.getItem(email.slice(1, -1)));
        return user ? user.favorites : [];
    }
    return [];
}

export const setUserHistory = (email, history) => {
    const user = JSON.parse(localStorage.getItem(email));
    user.history = history;
    localStorage.setItem(email, JSON.stringify(user))

}

export const getUserHistoryLS = () => {
    const email = localStorage.getItem('current_user')
    if (email){
        const user = JSON.parse(localStorage.getItem(email.slice(1, -1)));
        return user ? user.history : [];
    }
    return [];

}

