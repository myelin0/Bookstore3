import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import booksReducer from './books/books';
import checkReducer from './categories/categories';

const rootReducer = combineReducers({
  booksReducer,
  checkReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(logger),
);

export default store;
