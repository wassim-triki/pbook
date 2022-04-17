import React, { useState } from 'react';
import BookCard from './BookCard';
import { AiFillPlayCircle } from 'react-icons/ai';

const CategoryList = ({ categoryName, books }) => {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(6);
  const filtered = books.filter((b) => b.hasOwnProperty(categoryName));
  return (
    <div className="lg:px-10 w-full flex items-center place-items-center flex-col gap-5 md:gap-y-12 md:grid md:grid-cols-2 xl:grid-cols-3 xl:place-items-center 3xl:grid-cols-4  ">
      <button
        disabled={start === 0}
        className="group md:col-span-full "
        onClick={() => {
          setStart((start) => start - 5);
          setEnd((end) => end - 5);
        }}
      >
        <AiFillPlayCircle className={`-rotate-90 load-more trans`} />
      </button>

      {books.slice(start, end).map((b) => (
        <BookCard key={b.id} book={b} categoryName={categoryName} />
      ))}
      <button
        disabled={end >= books.length}
        className="group md:col-span-full "
        onClick={() => {
          setStart((start) => start + 5);
          setEnd((end) => end + 5);
        }}
      >
        <AiFillPlayCircle className="rotate-90 load-more trans" />
      </button>
    </div>
  );
};

export default CategoryList;
