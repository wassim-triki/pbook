import React, { useEffect } from 'react';

const BookCard = ({ book }) => {
  useEffect(() => {
    console.log(book);
  }, []);
  return (
    <div className="bg-gray-100 dark:bg-bg-dark-50 dark-mode-transition w-full rounded-2xl  p-4 relative h-56 grid grid-cols-2 shadow-sm">
      <div></div>
      <img
        className="absolute left-3 rounded-2xl -top-5 shadow-xl hover:shadow-2xl cursor-pointer hover:scale-110 transition-all duration-200 ease-in-out"
        src={book.volumeInfo.imageLinks.thumbnail}
        alt={book.volumeInfo.title}
      />
      <h3 className="font-bold font-body">{book.volumeInfo.title}</h3>
    </div>
  );
};

export default BookCard;
