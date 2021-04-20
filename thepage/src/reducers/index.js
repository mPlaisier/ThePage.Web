import { combineReducers } from 'redux';

import auth  from './auth';
import books from './books';
import authors from './authors';

export default combineReducers({ auth, books, authors });