import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteBook, getBooksData } from '../redux/books/bookthunk';
import Book from './Book';

const BookList = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);
  const booksKey = Object.keys(books);

  useEffect(() => {
    dispatch(getBooksData());
  }, []);

  const removeBookfromStore = (id) => {
    dispatch(deleteBook(id));
  };

  return (
    <div>
      <ul>
        {
          booksKey.map((id) => {
            const book = books[id];
            const { category, author, title } = book[0];
            return (
              <Book
                key="key"
                title={title}
                author={author}
                category={category}
                id={id}
                removeBookHandler={removeBookfromStore}
              />
            );
          })
}
      </ul>
    </div>
  );
};

export default BookList;
