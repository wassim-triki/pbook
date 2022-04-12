import React, { useEffect } from 'react';

const BookCard = ({ book }) => {
  useEffect(() => {
    console.log(book);
  }, []);
  return (
    <div className="bg-gray-100 w-full lg:w-[400px] rounded-2xl  p-4 relative h-56 grid grid-cols-2">
      <div></div>
      <img
        className="absolute left-3 rounded-2xl -top-7"
        src={book.volumeInfo.imageLinks.thumbnail}
        alt={book.volumeInfo.title}
      />
      <h3 className="font-bold font-body">{book.volumeInfo.title}</h3>
    </div>
  );
};

export default BookCard;
