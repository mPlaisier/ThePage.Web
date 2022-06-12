import { GET_BOOKSHELVES, REFRESH_TOKENS } from '../constants/actionTypes';
import * as api from '../api';

import { refreshTokens } from './auth';

export const getBookshelves = (history) => async (dispatch) => {
    
    try {
        //Refresh tokens if required
        var refresh = await refreshTokens(dispatch, history);
        if(refresh){
            dispatch({ type: REFRESH_TOKENS, data: refresh});
        }

        api.FetchBookshelves().then(
            (res) => {
                dispatch({ type: GET_BOOKSHELVES, data: res.data });
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
        console.log("Bookshelf action - getBookshelves");
        console.log(error);
    }    
};