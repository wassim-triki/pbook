import React, { useContext, useEffect, useState } from 'react';
import { GoogleLogout } from 'react-google-login';
import { Navigate } from 'react-router-dom';
import MobileNav from '../../components/MobileNav';
import UserContext from '../../context/UserContext';
import axios from 'axios';
import CategoryList from '../../components/CategoryLists';
import CategoryLists from '../../components/CategoryLists';
import { categories } from '../../data';
const BOOKS_API_SUBJECT =
  'https://www.googleapis.com/books/v1/volumes?q=subject:';

const Home = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getBooksByCategorie = async (categories) => {
      try {
        const booksData = {};
        setLoading(true);
        await Promise.all(
          categories.map(async (c) => {
            const formattedCat = c.replace(/\s/, '+');
            return axios
              .get(`${BOOKS_API_SUBJECT}${formattedCat}&maxResults=5`)
              .then((response) => (booksData[c] = response.data.items));
          })
        );
        setData(booksData);
        setLoading(false);
      } catch (error) {
        throw error;
      }
    };
    getBooksByCategorie(categories);

    // getBooksByCategorie(categories);
  }, []);
  return (
    <div className="py-8 w-full dark:bg-bg-dark dark-mode-transition">
      {loading ? 'loading...' : <CategoryLists data={data} />}
    </div>
  );
};

export default Home;
