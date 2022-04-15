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
  useEffect(() => {
    console.log(info);
  });

  return (
    <div className="group relative cursor-pointer h-[350px]  bg-blacsk  w-[70%] flex items-center justify-center shadow-sm hover:shadow-xl transition-all duration-200 ease-in-out overflow-hidden rounded-xl  ">
      <img
        className="absolute top-0 left-0 w-full h-full group-hover:h-[120%] transition-all duration-200 ease-in-out object-center object-cover rounded-xl"
        src={info.imageLinks.thumbnail}
        alt={info.title}
      />
      <div className=" font-body opacity-0 group-hover:opacity-100 transition-all duration-200 ease-in-out backdrop-blur-sm absolute h-full w-full p-5 bg-[rgba(0,0,0,.5)] rounded-xl">
        <h3 className="font-body font-bold text-xl text-white">{info.title}</h3>
        <p className="text-sm font-semibold text-gray-400">{info.authors}</p>
        {info.categories && (
          <span
            className={`bg-red-200 text-gray-600 px-4 py-2 rounded-full mt-4  text-center inline-block text-xs font-semibold`}
          >
            {info.categories}
          </span>
        )}
      </div>
    </div>
  );
};

export default BookCard;
