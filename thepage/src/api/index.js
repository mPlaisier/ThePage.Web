import axios from 'axios';
import { getToken } from '../utils';

const API = axios.create({ baseURL: 'https://thepageapi-stg.herokuapp.com/api'})

API.interceptors.request.use((req) => {
    var token = getToken();
    //If the user has a token, we login
    if(token){
        console.log(token);
        req.headers.Authorization = `Bearer ${token}`
    }
    return req;
});

//AUTH
export const signIn = (authData) => API.post('/auth/login', authData);

//Books
export const FetchBooks = () => API.get('/books/v2');