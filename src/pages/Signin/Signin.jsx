import React, { useContext, useEffect, useState } from 'react';
import { GoogleLogout } from 'react-google-login';
import axios from 'axios';
import GoogleLoginButton from '../../components/GoogleLoginButton';
import UserContext from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';
import data from '../../data';

const URL_LOCAL = 'http://localhost:3001';
const URL_HEROKU = 'https://pbook-app.herokuapp.com';

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    user && navigate('/');
  });

  const handleSuccess = async (response) => {
    try {
      setLoading(true);
      setError(null);
      const googleData = response.profileObj;
      const currentUser = {
        userId: googleData.googleId,
        imageUrl: googleData.imageUrl,
        email: googleData.email,
        fullName: googleData.name,
        firstName: googleData.givenName,
        lastName: googleData.familyName,
      };
      const resp = await axios.post(`${URL_LOCAL}/api/signin`, currentUser);
      const userData = resp.data;
      localStorage.setItem('user', JSON.stringify(userData));
      setUser(userData);
      navigate('/');
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  const handleFailure = (res) => {
    console.log('login failed: ', res);
  };

  return (
    <div className="h-screen overflow-hidden  w-screen relative">
      <video
        className="w-screen absolute object-cover  h-screen"
        autoPlay
        loop
        muted
      >
        <source
          src="https://firebasestorage.googleapis.com/v0/b/pbook-346616.appspot.com/o/cover.mp4?alt=media&token=c76b7e6e-a461-4344-8bb4-add106e2a2bd"
          type="video/mp4"
        />
      </video>

      <div className="bg-blend-color-burn h-screen w-screen absolute bg-black opacity-80 z-10"></div>
      <div className="w-full h-full flex z-20 flex-col justify-around items-center gap-10 absolute ">
        <div className="flex flex-col items-center justify-between gap-4  md:mt-10">
          <h1 className="text-7xl font-brand text-red-500 md:text-9xl">
            {data.title}
          </h1>
          <p className="text-gray-400 font-main font-semibold ">
            read & review <span className="text-gray-300"> books</span> with
            friends.
          </p>
        </div>
        <GoogleLoginButton
          handleSuccess={handleSuccess}
          handleFailure={handleFailure}
        />
      </div>
    </div>
  );
};

export default Home;
