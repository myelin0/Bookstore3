import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { categoriesActions } from '../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.categories.showText);

  const toggleTextHandler = () => {
    dispatch(categoriesActions.toggleText());
  };
  return (
    <div className="absolute inset-2/4 inset-x-1/3">
      <button onClick={toggleTextHandler} type="button" className="bg-azure font-sm font-normal rounded border text-white py-2 px-4">
        Check status
      </button>
      {show && <h3 className="text-red-600 mt-1.5">Under Construction</h3>}
    </div>
  );
};

export default Categories;
