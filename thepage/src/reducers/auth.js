import { AUTH, LOGOUT, LOGIN_FAIL, REFRESH_TOKENS } from '../constants/actionTypes';

const initialState = {
    username: '',
    password: '',
    isLoading: false,
    error: '',
    isLoggedIn: false,
    data: ''
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FIELD': 
            return {
                ...state,
                [action.fieldName]: action.payload,
            };
        case 'START_AUTH':
            return { ...state, isLoading: true, error: '' };
        case AUTH:
            localStorage.setItem('profile', JSON.stringify({ ...action?.data?.tokens }))
            return {
                ...state,
                error: '',
                isLoggedIn: false,
                isLoading: false,
                username: 'destruction505',
                password: 'abc123456'
              };
        case LOGOUT:
            localStorage.clear();
            return { ...state, initialState };
        case LOGIN_FAIL:
            return {
                ...state,
                error: action.data,
                isLoggedIn: false,
                isLoading: false,
                username: 'destruction505',
                password: 'abc123456'
              };
        case REFRESH_TOKENS:
            localStorage.setItem('profile', JSON.stringify({ ...action?.data?.data }))
            return state;
        default:
            return state;
    }
};

export default authReducer;