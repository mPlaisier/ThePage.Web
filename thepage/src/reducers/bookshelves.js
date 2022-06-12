import { GET_BOOKSHELVES } from '../constants/actionTypes';

const bookshelfReducer = (state = null, action) => {
    switch (action.type){
        case GET_BOOKSHELVES:
            return action.data;
        default:
            return state;
    }    
}

export default bookshelfReducer;