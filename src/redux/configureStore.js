import { configureStore } from '@reduxjs/toolkit';
// import logger from 'redux-logger';
import booksReducer from './books/bookthunk';
import categoriesReducer from './categories/categories';

const store = configureStore({
  reducer: {
    books: booksReducer,
    categories: categoriesReducer,
  },
});

export default store;
