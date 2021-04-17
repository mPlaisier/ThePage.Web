import { GET_BOOKS, REFRESH_TOKENS } from '../constants/actionTypes';
import * as api from '../api';

import { refreshTokens } from './auth';

export const getBooks = (history) => async (dispatch) => {
    
    try {
        //Refresh tokens if required
        var refresh = await refreshTokens(dispatch, history);
        if(refresh){
            dispatch({ type: REFRESH_TOKENS, data: refresh});
        }

        api.FetchBooks().then(
            (res) => {
                //console.log(res.data);
                dispatch({ type: GET_BOOKS, data: res.data });
            },
            (error) => {
                const message = (error.response &&
                                error.response.data &&
                                error.response.data.message) ||
                                error.message ||
                                error.toString();
                console.log("Error: " + message);
            });        
    } catch (error) {
        console.log("Book action - getBooks");
        console.log(error);
    }    
};