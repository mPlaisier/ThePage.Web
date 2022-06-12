import { combineReducers } from 'redux';

import auth  from './auth';
import books from './books';
import authors from './authors';
import genres from './genres';
import bookshelves from './bookshelves';

export default combineReducers({ auth, books, authors, genres, bookshelves });