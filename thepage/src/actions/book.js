import { GET_BOOKS } from '../constants/actionTypes';
import * as api from '../api';

export const getBooks = () => async (dispatch) => {
    
    try {
        //TODO
        //dispatch({ type: 'START_AUTH' });

        api.FetchBooks().then(
            (res) => {
                console.log(res.data);
                dispatch({ type: GET_BOOKS, data: res.data });
            },
            (error) => {
                const message = (error.response &&
                                error.response.data &&
                                error.response.data.message) ||
                                error.message ||
                                error.toString();
        
                console.log("Error from webservice: " + message);
                console.log(error)      ;
                //TODO
                //dispatch({ type: LOGIN_FAIL, data: message });
            });        
    } catch (error) {
        console.log("Book action - getBooks");
        console.log(error);
    }    
};