import Form from './Form';
import BookList from './BooksList';

function Books() {
  return (
    <>
      <div className="flex flex-col gap-9">
        <BookList />
      </div>
      <div className="w-11/12 mx-auto my-10">
        <hr className="border" />
      </div>
      <Form />
    </>
  );
}

export default Books;
