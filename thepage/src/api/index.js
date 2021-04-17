import axios from 'axios';
import { getToken } from '../utils';

const API = axios.create({ baseURL: 'https://thepageapi-stg.herokuapp.com/api'})

API.interceptors.request.use((req) => {
    var token = getToken();
    //If the user has a token, we login
    if(token){
        req.headers.Authorization = `Bearer ${token}`
    }
    return req;
});

//AUTH
export const signIn = (authData) => API.post('/auth/login', authData);
export const refreshTokens = (token) => API.post('/auth/refresh-tokens', token);

//Books
export const FetchBooks = () => API.get('/books/v2');