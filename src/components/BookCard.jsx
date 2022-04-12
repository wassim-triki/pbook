import React, { useEffect } from 'react';
import { AiOutlineHeart } from 'react-icons/ai';

const categoryColors = {
  psychology: 'teal',
  fiction: 'red',
  drama: 'orange',
  crime: 'blue',
  science: 'teal',
  'self-help': 'red',
  history: 'orange',
  'health & fitness': 'red',
};

const BookCard = ({ book, categoryName }) => {
  const info = book.volumeInfo;
  useEffect(() => {
    console.log(categoryName, categoryColors[categoryName]);
  }, []);

  return (
    <div className="bg-gray-100 dark:bg-bg-dark-50 dark-mode-transition w-full shadow-sm rounded-2xl  p-3 relative min-h-[250px] grid grid-cols-2  font-body min-w-[300px]">
      <div className="relative h-[180px]">
        <img
          className="absolute left-1 rounded-2xl -top-10 shadow-xl hover:shadow-2xl cursor-pointer hover:scale-110 transition-all duration-200 ease-in-out"
          src={info.imageLinks.thumbnail}
          alt={info.title}
        />
      </div>

      <div>
        <h3 className="font-bold">{info.title}</h3>
        <p className="text-gray-500 text-sm">{info.authors}</p>
        <span
          className={`bg-${categoryColors[categoryName]}-200 text-gray-600 px-4 py-2 rounded-full mt-4  text-center inline-block text-xs font-semibold`}
        >
          {info.categories}
        </span>
        <div className="mt-4 flex gap-2  xl:items-center justify-start  flex-col md:flex-row ">
          <button className="block bg-green-400 font-medium text-white flex-grow p-2 rounded-full hover:bg-green-300 text-sm transition-transform duration-100 ease-in-out active:scale-95 focus:ring-2 ring-offset-1 focus:ring-green-300">
            Want to read
          </button>
          <button className="block bg-yellow-400 font-medium text-white flex-grow p-2 rounded-full hover:bg-yellow-300 text-sm transition-transform duration-100 ease-in-out active:scale-95 focus:ring-2 ring-offset-1 focus:ring-yellow-300">
            Reviews
          </button>
          {/* <AiOutlineHeart className="text-3xl text-red-400" /> */}
        </div>
      </div>
      {/* <div className="overflow-hidden relative col-span-2 max-h-[50px]">
        <p className="text-sm text-gray-500 ">{info.description}</p>
      </div> */}
    </div>
  );
};

export default BookCard;
