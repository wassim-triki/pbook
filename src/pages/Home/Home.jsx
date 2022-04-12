import React, { useContext, useEffect, useState } from 'react';
import { GoogleLogout } from 'react-google-login';
import { Navigate } from 'react-router-dom';
import MobileNav from '../../components/MobileNav';
import UserContext from '../../context/UserContext';
import axios from 'axios';
import { categories } from '../../data/data';
const BOOKS_API_SUBJECT =
  'https://www.googleapis.com/books/v1/volumes?q=subject:';

const Home = () => {
  const { user, setUser } = useContext(UserContext);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    console.log('logged out');
  };
  useEffect(() => {
    const getBooksByCategorie = async (categories) => {
      try {
        const booksData = [];
        setLoading(true);
        await Promise.all(
          categories.map(async (c) => {
            const formattedCat = c.replace(/\s/, '+');
            return axios
              .get(`${BOOKS_API_SUBJECT}${formattedCat}&maxResults=5`)
              .then((response) =>
                booksData.push({
                  category: c,
                  books: response.data.items,
                })
              );
          })
        );
        setData(booksData);
        console.log(booksData);
        setLoading(false);
      } catch (error) {
        throw error;
      }
    };
    getBooksByCategorie(categories);
    console.log(data);

    // getBooksByCategorie(categories);
  }, []);
  return (
    <div className="h-[300vh] w-full dark:bg-bg-dark dark-mode-transition">
      <div className="absolute top-52 text-center w-full">
        <GoogleLogout
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
          buttonText="Logout"
          onLogoutSuccess={handleLogout}
        ></GoogleLogout>
        {loading
          ? 'loading...'
          : data.map((cat) => (
              <div key={cat.category} className="font-body">
                <h1 className="text-2xl text-left font-bold">{cat.category}</h1>
                <ul className="w-[50%] text-left ml-auto mr-auto">
                  {cat.books.map((b) => (
                    <li key={b.id}>{b.volumeInfo.title}</li>
                  ))}
                </ul>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Home;
