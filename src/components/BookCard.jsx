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
    <div>
      <div></div>
      <img src={info.imageLinks.thumbnail} alt={info.title} />
    </div>
  );
};

export default BookCard;
