import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getBooksData = createAsyncThunk('books/getBooksData', async () => {
  const apiId = '1ixeASo4AU3X3cZnoiCd';
  const response = await axios.get(
    `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${apiId}/books`,
  );

  return response.data;
});

export const addBooks = createAsyncThunk(
  'books / addBooks',
  async (payload) => {
    const apiId = 'QHCMn9kMxLOND7LUgjjJ';
    const book = {};
    book.item_id = payload.id;
    book.title = payload.title;
    book.author = payload.author;
    book.category = payload.category;

    await fetch(
      `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${apiId}/books`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(book),
      },
    );

    return book;
  },
);

export const deleteBook = createAsyncThunk(
  'books/deleteBook',
  async (payload) => {
    const apiId = 'QHCMn9kMxLOND7LUgjjJ';
    await fetch(
      `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${apiId}/books/${payload}`,
      {
        method: 'DELETE',
      },
    );
    console.log(payload);

    return payload;
  },
);

export const bookSlice = createSlice({
  name: 'books',
  initialState: {},
  extraReducers: {
    [getBooksData.pending]: () => {
      console.log('fetching');
    },
    [getBooksData.fulfilled]: (state, action) => {
      console.log('success');
      return action.payload.book;
    },
    [addBooks.fulfilled]: (state, action) => {
      state[action.payload.item_id] = [
        {
          title: action.payload.title,
          author: action.payload.author,
          category: action.payload.category,
        },
      ];
    },
    [deleteBook.fulfilled]: (state, action) => {
      console.log('success');
      delete state[action.payload];
    },
  },
});

export const selectAllBooks = (state) => state.books.books;
export const selectBooksError = (state) => state.books.error;
export const selectBooksStatus = (state) => state.books.status;
export const { bookAdded, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
