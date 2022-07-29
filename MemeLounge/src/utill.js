const storageKey = 'user';

export const getUser = () => {
    const user = sessionStorage.getItem(storageKey);

    if(user) return JSON.parse(user);
}

export const setUser = (user) => {
    if(user.accessToken){
        sessionStorage.setItem(storageKey, JSON.stringify(user));
    }
}

export const removeUser = () => {
    sessionStorage.removeItem(storageKey)
}