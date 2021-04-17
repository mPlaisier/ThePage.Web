import { GET_BOOKS } from '../constants/actionTypes';

const bookReducer = (state = null, action) => {
    switch (action.type){
        case GET_BOOKS:
            return action.data;
        default:
            return state;
    }    
}

export default bookReducer;