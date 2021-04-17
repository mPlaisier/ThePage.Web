const moment = require('moment');

export const isLogin = () => {
    if (localStorage.getItem('profile')) {
        var tokens = JSON.parse(localStorage.getItem('profile'));
        if(tokens?.access?.token)        
            return true;
    }
    return false;
};

export const getToken = () => {
    if(isLogin()){
        var tokens = JSON.parse(localStorage.getItem('profile'));

        const expiresTime = tokens.access.expires;
        var isValidToken = moment(expiresTime).isAfter(moment.utc().format());

        if(isValidToken)
            return tokens.access.token;
    }
    return null;
};

export const getRefreshToken = () => {
    if(isLogin()){
        var tokens = JSON.parse(localStorage.getItem('profile'));
        
        const expiresTime = tokens.refresh.expires;
        var isValidToken = moment(expiresTime).isAfter(moment.utc().format());

        if(isValidToken)
            return tokens.refresh.token
    }
    return null;
}