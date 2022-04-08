import React, { useEffect, useState } from 'react';
import GoogleLogin, { GoogleLogout } from 'react-google-login';
import { AiOutlineGoogle } from 'react-icons/ai';

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSuccess = (response) => {
    console.log(response.profileObj);
    setIsLoggedIn(true);
  };
  const handleFailure = () => {
    console.log('login failed');
  };
  useEffect(() => {});
  const handleLogout = () => {
    setIsLoggedIn(false);
    console.log('logged out');
  };
  return (
    <div className="h-screen overflow-hidden  w-screen relative">
      {/* <img
        src={require('../../images/cover3.jpg')}
        alt="cover photo"
        className="h-[110%] w-screen object-cover absolute -top-5 z-10"
      /> */}
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
          <p className="text-gray-400 font-main font-bold ">
            read & review books with friends.
          </p>
        </div>
        {!isLoggedIn ? (
          <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_ID}
            buttonText="Sign in with google"
            render={(renderProps) => (
              <button
                className="cursor-pointer bg-blue-500 text-white font-bold font-main px-3 gap-4 py-2 rounded-md flex justify-between items-center hover:bg-blue-400 focus:bg-blue-400 transition-all duration-200 ease-in-out active:bg-blue-500 active:scale-95"
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
              >
                <AiOutlineGoogle className="text-2xl" />
                Sign in with Google
              </button>
            )}
            onSuccess={handleSuccess}
            onFailure={handleFailure}
            cookiePolicy={'single_host_origin'}
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
