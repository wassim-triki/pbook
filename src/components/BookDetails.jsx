import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BookDetails = () => {
  const [book, setBook] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    const getBookById = async (id) => {
      const response = await axios.get(
        `${process.env.REACT_APP_GET_VOLUME}/${id}?key=${process.env.REACT_APP_GOOGLE_API_KEY}`
      );
      setBook(response.data);
    };
    getBookById(id);
  });
  return (
    <div className="z-10 w-screen h-screen flex justify-center items-center">
      {book?.volumeInfo.title}
    </div>
  );
};

export default BookDetails;
