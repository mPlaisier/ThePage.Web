import { GET_AUTHORS, REFRESH_TOKENS } from '../constants/actionTypes';
import * as api from '../api';

import { refreshTokens } from './auth';

export const getAuthors = (history) => async (dispatch) => {
    
    try {
        //Refresh tokens if required
        var refresh = await refreshTokens(dispatch, history);
        if(refresh){
            dispatch({ type: REFRESH_TOKENS, data: refresh});
        }

        api.FetchAuthors().then(
            (res) => {
                dispatch({ type: GET_AUTHORS, data: res.data });
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
        console.log("Author action - getAuthors");
        console.log(error);
    }    
};