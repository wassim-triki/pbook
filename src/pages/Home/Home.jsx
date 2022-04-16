import React, { useContext, useEffect, useState } from 'react';
import { GoogleLogout } from 'react-google-login';
import { Navigate } from 'react-router-dom';
import MobileNav from '../../components/MobileNav';
import UserContext from '../../context/UserContext';
import axios from 'axios';
import CategoryList from '../../components/CategoryLists';
import CategoryLists from '../../components/CategoryLists';
import { categories } from '../../data';
import Spinner from '../../components/Spinner';
import SideBar from '../../components/SideBar';
const BOOKS_API = 'https://www.googleapis.com/books/v1/volumes?q=';

const Home = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getBooksByCategorie = async (categories) => {
      try {
        const booksData = {};
        setLoading(true);
        await Promise.all(
          categories.map(async (c) => {
            const formattedCat = c.replace(/\s/, '+');
            return axios
              .get(
                `${BOOKS_API}subject:${formattedCat}&maxResults=6&startIndex=5`
              )
              .then((response) => (booksData[c] = response.data.items));
          })
        );
        setData(booksData);
        setLoading(false);
      } catch (error) {
        throw error;
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getBooksByCategorie(categories);
  }, []);

  return (
    <div
      className={`py-1 w-full dark:bg-bg-dark dark-mode-transition dark:text-white min-h-screen ${
        loading && 'grid place-content-center place-items-center'
      } `}
    >
      {loading ? (
        <Spinner className={`text-4xl text-red-main ${!loading && 'hidden'}`} />
      ) : (
        <div className="lg:grid lg:grid-cols-5 lg:mt-14 lg:py-8 relative ">
          {/* <SideBar /> */}
          <SideBar />
          <div></div>
          <CategoryLists data={data} />
        </div>
      )}
    </div>
  );
};

export default Home;
