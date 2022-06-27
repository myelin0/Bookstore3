import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBooks } from '../redux/books/bookthunk';

const Form = () => {
  const setup = () => ({
    id: '',
    title: '',
    author: '',
    category: '',
  });

  const dispatch = useDispatch();
  const [bookData, setBookData] = useState(setup());
  const { title, author, category } = bookData;
  const changeHandler = (e) => {
    setBookData((prevState) => ({
      ...prevState,
      id: uuidv4(),
      [e.target.name]: e.target.value,
    }));
  };

  const formHandler = (e) => {
    e.preventDefault();
    if (title.trim() !== '' && author.trim() !== '') {
      dispatch(addBooks(bookData));
      setBookData(setup());
    }
  };

  return (
    <div className="flex flex-col gap-6 w-11/12 mx-auto">
      <h2 className="font-montserrat font-bold text-warm-grey text-xl">ADD NEW BOOK</h2>
      <form onSubmit={formHandler} className="flex justify-between">
        <input
          className="Title border w-1/4 px-2 rounded bg-white text-pink-grey font-base font-montserrat font-normal leading-normal"
          name="title"
          type="text"
          placeholder="Book Title"
          value={title}
          onChange={changeHandler}
          required
        />
        <input
          className="Author border w-1/4 px-2 rounded bg-white text-pink-grey font-base font-montserrat font-normal leading-normal"
          type="text"
          name="author"
          placeholder="Author Name"
          value={author}
          onChange={changeHandler}
          required
        />

        <select
          className="border w-1/4 px-2 rounded bg-white text-pinkish-grey font-base font-montserrat font-normal leading-normal"
          name="category"
          value={category}
          onChange={changeHandler}
        >
          <option value="" hidden>
            Category
          </option>
          <option value="Action" className="text-black-two">
            Action
          </option>
          <option value="Sci-fi" className="text-black-two">
            Science Fiction
          </option>
          <option value="economy" className="text-black-two">
            Economy
          </option>
          <option value="Coding" className="text-black-two">
            Coding
          </option>
        </select>
        <button type="submit" className="text-white text-center font-bold font-roboto font-sm leading-normal py-2 px-8 rounded bg-azure ">Add Book</button>
      </form>
    </div>
  );
};
export default Form;
