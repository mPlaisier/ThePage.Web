import { GET_GENRES } from '../constants/actionTypes';

const genreReducer = (state = null, action) => {
    switch (action.type){
        case GET_GENRES:
            return action.data;
        default:
            return state;
    }    
}

export default genreReducer;