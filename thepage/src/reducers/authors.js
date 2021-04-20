import { GET_AUTHORS } from '../constants/actionTypes';

const authorReducer = (state = null, action) => {
    switch (action.type){
        case GET_AUTHORS:
            return action.data;
        default:
            return state;
    }    
}

export default authorReducer;