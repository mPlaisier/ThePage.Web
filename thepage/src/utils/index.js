export const isLogin = () => {
    if (localStorage.getItem('profile')) {
        var data = JSON.parse(localStorage.getItem('profile'));
        if(data.tokens?.access?.token)        
            return true;
    }

    return false;
};

export const getToken = () => {
    if(isLogin()){

        var data = JSON.parse(localStorage.getItem('profile'));
        return data.tokens.access.token;
    }
    return null;
};