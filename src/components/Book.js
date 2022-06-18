import PropTypes from 'prop-types';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Book = ({
  id, title, author, category, removeBookHandler,
}) => {
  const capitalizeFirstChar = (str) => str.charAt(0).toUpperCase() + str.slice(1);
  return (
    <>
      <div className="flex justify-between items-center p-5 bg-white border w-11/12 mx-auto">
        <div className="flex flex-col gap-4 self-start">
          <div>
            <p className="bookCategory text-zinc-500">{category}</p>
            <h2 className="BookTitle text-4xl text-black-two font-roboto font-bold">{capitalizeFirstChar(title)}</h2>
            <span className="author text-cool-blue font-roboto font-light">{author}</span>
            {' '}
            <br />
          </div>
          <div className="flex gap-3 text-cool-blue font-roboto font-light">
            <button type="button">Comments</button>
            <div>
              <hr className="border w-0.5 h-6" />
            </div>
            <button
              type="button"
              onClick={() => removeBookHandler(id)}
            >
              Remove
            </button>
            <div>
              <hr className="border w-0.5 h-6" />
            </div>
            <button type="button">Edit</button>
          </div>
        </div>
        <div className="flex w-3/5 justify-center gap-12 items-center">
          <div className="flex justify-center gap-3 items-center">
            <div className="w-20 h-20">
              <CircularProgressbarWithChildren
                value={Math.floor(Math.random() * 100)}
              />
            </div>
            <div>
              <p className="text-4xl text-black-two w-16 font-montserrat">
                {`${Math.floor(
                  Math.random() * 100,
                )}%`}

              </p>
              <p className="text-zinc-400 text-sm font-montserrat w-20 text-black-two opacity-75 leading-normal">
                completed
              </p>
            </div>
          </div>
          <div>
            <hr className="border w-0.5 h-20" />
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <p className="font-roboto font-light text-black-two text-sm opacity-50">
                CURRENT CHAPTER
              </p>
              <p className="font-robot0 font-light text-black-two font-base leading-normal">
                {`Chapter ${Math.floor(Math.random() * 100)}`}
              </p>
            </div>
            <button
              type="button"
              className="font-roboto font-light leading-normal rounded font-xs text-white text-center bg-azure py-1 px-4"
            >
              UPDATE PROGRESS
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  removeBookHandler: PropTypes.func.isRequired,
};
export default Book;
