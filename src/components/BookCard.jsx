import React, { useEffect } from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { AiFillHeart } from 'react-icons/ai';
import { BsHeartFill } from 'react-icons/bs';
import { FaBookReader } from 'react-icons/fa';
import { FaComments } from 'react-icons/fa';

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

  return (
    <div className="bg-gray-100 dark:bg-bg-dark-50 dark-mode-transition w-full shadow-sm rounded-2xl  p-3 relative min-h-[300px] grid grid-cols-2  font-main min-w-[300px]">
      <div className="relative ">
        <div className="  absolute h-[200px] w-[135px] lg:h-[250px] lg:w-[180px] rounded-2xl -top-10 flex justify-center">
          <img
            className="shadow-xl hover:shadow-2xl cursor-pointer hover:scale-110 transition-all duration-200 ease-in-out object-cover h-full rounded-2xl"
            src={info.imageLinks.thumbnail}
            alt={info.title}
          />
        </div>
      </div>

      <div>
        <h3 className="font-bold">{info.title}</h3>
        <p className="text-gray-500 text-sm dark:text-gray-300">
          {info.authors}
        </p>
        <span
          className={`bg-red-200 text-gray-600 px-4 py-2 rounded-full mt-4  text-center inline-block text-xs font-semibold`}
        >
          {info.categories}
        </span>
        <div className="flex flex-col gap-2">
          <div className="mt-4 flex gap-2  xl:items-center justify-start  flex-col md:flex-row ">
            <button className="btn bg-green-400  text-white flex-grow p-2 rounded-full hover:bg-green-300 focus:ring-green-300 ">
              Want to read
            </button>
            <button className="btn bg-yellow-400  text-white flex-grow p-2 rounded-full hover:bg-yellow-300 focus:ring-yellow-300 ">
              Reviews
            </button>
          </div>
          <button className="btn bg-transparent focus:bg-red-400 hover:text-white  focus:text-white text-red-400 flex-grow p-2 border-2 border-red-400 rounded-full hover:bg-red-400 focus:ring-red-300 ">
            Favourite
          </button>
        </div>
      </div>

      {/* <div className="overflow-hidden relative col-span-2 max-h-[50px]">
        <p className="text-sm text-gray-500 ">{info.description}</p>
      </div> */}
    </div>
  );
};

export default BookCard;
