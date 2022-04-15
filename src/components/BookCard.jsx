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
    <div className=" h-[350px] bg-blacsk  w-full flex items-center justify-center  ">
      <div className="group cursor-pointer h-full w-[69%] bg-blaxck lg:w-[69%] overflow-hidden flex items-center justify-center rounded-xl relative">
        <img
          className=" group-hover:h-[120%] transition-all duration-200 ease-in-out h-full object-center object-cover rounded-xl"
          src={info.imageLinks.thumbnail}
          alt={info.title}
        />
        <div className=" font-body opacity-0 group-hover:opacity-100 transition-all duration-200 ease-in-out absolute h-full w-full p-5 bg-[rgba(0,0,0,.7)] ">
          <h3 className="font-body font-bold text-xl text-white">
            {info.title}
          </h3>
          <p className="text-sm font-semibold text-gray-400">{info.authors}</p>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
