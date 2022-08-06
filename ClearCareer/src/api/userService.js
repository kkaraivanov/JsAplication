import api from "./api.js"
import * as storage from './storageService.js'

const base = '/users'; 
const endpoint = {
    login: base + '/login',
    logout: base + '/logout',
    register: base + '/register'
}

const request = async (uri, data) => api.post(uri, data)
    .then(user => {
        storage.setUser(user);
        return user;
    });

const login = async (data) => request(endpoint.login, data);
const register = async (obj) => request(endpoint.register, obj);
const logout = () => api.get(endpoint.logout)
    .then(() => storage.removeUser());

export {
    login,
    logout,
    register
}