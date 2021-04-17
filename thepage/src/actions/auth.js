import { AUTH, LOGIN_FAIL, START_AUTH } from '../constants/actionTypes';
import * as api from '../api';

export const signin = (authData, history) => async (dispatch) => {
    
    try {
        dispatch({ type: START_AUTH });

        api.signIn(authData).then(
            (res) => {
                dispatch({ type: AUTH, data: res.data });
                history.push('/dashboard');
            },
            (error) => {
                const message = (error.response &&
                                error.response.data &&
                                error.response.data.message) ||
                                error.message ||
                                error.toString();
        
                console.log("Error from webservice: " + message);
                dispatch({ type: LOGIN_FAIL, data: message });
            });        
    } catch (error) {
        console.log("Auth action - Signin");
        console.log(error);
    }    
};