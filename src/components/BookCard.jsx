import React, { useEffect } from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { AiFillHeart } from 'react-icons/ai';
import { BsHeartFill } from 'react-icons/bs';
import { FaBookReader } from 'react-icons/fa';
import { FaComments } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { AiOutlineLink } from 'react-icons/ai';

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
  const navigate = useNavigate();
  const info = book?.volumeInfo;
  useEffect(() => {
    // console.log(info);
  });

  return (
    <div className="group bg-black overflow-hidden relative w-3/4 lg:w-[60%] rounded-2xl hover:shadow-md">
      <img
        className="group-hover:scale-125 w-full h-auto trans"
        src={info?.imageLinks?.thumbnail}
        alt={info?.title}
      />
      <div className="absolute bg-[rgba(0,0,0,.6)] top-0 left-0 h-full w-full  opacity-0   group-hover:opacity-100 backdrop-blur-sm p-5 trans">
        <h3 className="font-body font-bold text-xl text-white scale-0 group-hover:scale-100 trans">
          {info?.title}
        </h3>
        <p className="text-sm font-semibold text-gray-400 scale-0 group-hover:scale-100 trans">
          {info?.authors}
        </p>
        <div className="flex items-stretch gap-2 mt-4 bg-blacks h-9">
          {info?.categories && (
            <span
              className={`bg-red-200 self-center text-gray-600 px-4 py-2 rounded-full   text-center inline-block text-xs font-semibold scale-0 group-hover:scale-100 trans`}
            >
              {info?.categories[0]}
            </span>
          )}
          <BsFillArrowRightCircleFill
            className="nav-icon h-full w-auto scale-0  group-hover:scale-100 trans  text-green-400 hover:text-green-300 "
            onClick={() => navigate(`/book/${book?.id}`)}
          />
        </div>
        <div className=" w-full h-full absolute left-0 p-5">
          <p className="text-gray-300 font-normal font-main text-sm scale-0 group-hover:scale-100 trans">
            {info?.description}
          </p>
          <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-t from-black"></div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
