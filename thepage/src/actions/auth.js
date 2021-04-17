import { AUTH, LOGIN_FAIL, START_AUTH } from '../constants/actionTypes';
import * as api from '../api';
import { getToken, getRefreshToken } from '../utils';

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
        
                console.log("Error: " + message);
                dispatch({ type: LOGIN_FAIL, data: message });
            });        
    } catch (error) {
        console.log("Auth action - Signin");
        console.log(error);
    }    
};

export const refreshTokens = async (dispatch, history) => {
    if(!getToken()){
        //TOKEN EXPIRED
        var token = getRefreshToken();
        if(token){
            try {
                var data = {refreshToken: token};
                console.log(data);
                var result = await api.refreshTokens(data);
                
                console.log("Reponse from refresh:" + result.data)

                return result;
            } catch (error) {
                console.log("Auth action - refreshTokens");
                console.log(error);
            }
        }else{
            //IF Refresh token is null
            //=> also expired => go to login screen
            dispatch({ type: 'LOGOUT' });
            history.push('/');
        }
    }
    return null;    
}