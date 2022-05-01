import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BookCard from './BookCard';

const BookDetails = () => {
  const [book, setBook] = useState(null);
  const [showMore, setShowMore] = useState(false);
  const { id } = useParams();
  useEffect(() => console.log(book), [book]);
  useEffect(() => {
    const getBookById = async (id) => {
      const url = `${process.env.REACT_APP_GET_VOLUME}/${id}?key=${process.env.REACT_APP_GOOGLE_API_KEY}`;
      const response = await axios.get(url);
      setBook(response.data);
    };
    getBookById(id);
  }, []);
  const textPortion = (str, l = 100) => {
    if (str?.length > l) return str.slice(0, l) + '...';
  };
  return (
    <div className="flex h-full flex-col items-start lg:pt-24 gap-3 p-5 lg:grid lg:grid-cols-3 dark:bg-bg-dark trans ">
      <div className=" w-full min-h-[300px] lg:h-full   rounded-lg flex justify-center overflow-hidden relative">
        <img
          className=" max-h-full w-full trans "
          src={book?.volumeInfo.imageLinks?.thumbnail}
          alt={book?.volumeInfo.title}
        />
        <div className="w-full h-full backdrop-blur-md absolute flex justify-center">
          <div className="flex justify-center">
            <img
              className="w-full h-full object-cover "
              src={book?.volumeInfo.imageLinks?.thumbnail}
              alt={book?.volumeInfo.title}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-1 col-span-2 ">
        <h2 className="text-4xl text-bg-dark dark:text-white trans">
          {book?.volumeInfo.title}
        </h2>
        <p className="text-lg text-bg-dark-50 dark:text-gray-300">
          by {book?.volumeInfo.authors}
        </p>
        {book?.volumeInfo.categories && (
          <span className="self-start bg-red-200 text-gray-600 px-4 py-2 rounded-full   text-center inline-block text-sm font-semibold">
            {book?.volumeInfo.categories[0]}
          </span>
        )}
        <p className="text-lg  text-bg-dark trans dark:text-white font-medium">
          {showMore
            ? book?.volumeInfo.description
            : textPortion(book?.volumeInfo.description)}
          <button
            className="mx-1 underline text-lg font-medium"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? 'less' : 'more'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default BookDetails;
