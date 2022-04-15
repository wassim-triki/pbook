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
    <div className="flex bg-gray-200 p-4 rounded-2xl justify-between items-stretch font-main ">
      <div className=" flex-grow">
        <h3 className="font-body font-bold text-bg-dark">{info.title}</h3>
        <p className="text-sm text-gray-500">{info.authors}</p>
        <span className="text-sm bg-red-300 p-2 rounded-full flex items-center justify-center">
          {info.categories}
        </span>
      </div>
      <img
        className="rounded-2xl"
        src={info.imageLinks.thumbnail}
        alt={info.title}
      />
    </div>
  );
};

export default BookCard;
