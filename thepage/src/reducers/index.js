import { combineReducers } from 'redux';

import auth  from './auth';
import books from './books';
import authors from './authors';
import genres from './genres';

export default combineReducers({ auth, books, authors, genres });