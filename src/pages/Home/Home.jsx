import React, { useEffect, useState } from 'react';
import { GoogleLogout } from 'react-google-login';
import GoogleLoginButton from '../../components/GoogleLoginButton';

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSuccess = (response) => {
    console.log(response.profileObj);
    setIsLoggedIn(true);
  };
  const handleFailure = () => {
    console.log('login failed');
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
    console.log('logged out');
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
          src="http://192.168.1.3:8080/videos/cover.mp4"
          type="video/mp4"
        />
      </video>
      <div className="bg-blend-color-burn h-screen w-screen absolute bg-black opacity-80 z-10"></div>
      <div className="w-full h-full flex z-20 flex-col justify-around items-center gap-10 absolute ">
        <div className="flex flex-col items-center justify-between gap-4  md:mt-10">
          <h1 className="text-7xl font-brand text-red-500 md:text-9xl">
            pbook
          </h1>
          <p className="text-gray-400 font-main font-semibold ">
            read & review <span className="text-gray-300"> books</span> with
            friends.
          </p>
        </div>
        {!isLoggedIn ? (
          <GoogleLoginButton
            handleSuccess={handleSuccess}
            handleFailure={handleFailure}
          />
        ) : (
          <GoogleLogout
            clientId={process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_ID}
            buttonText="Logout"
            onLogoutSuccess={handleLogout}
          ></GoogleLogout>
        )}
        ,
      </div>
    </div>
  );
};

export default Home;
