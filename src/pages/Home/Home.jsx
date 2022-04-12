import React, { useContext } from 'react';
import { GoogleLogout } from 'react-google-login';
import { Navigate } from 'react-router-dom';
import MobileNav from '../../components/MobileNav';
import UserContext from '../../context/UserContext';

const Home = () => {
  const { user, setUser } = useContext(UserContext);
  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    console.log('logged out');
  };
  return (
    <div className="h-[300vh] w-screen dark:bg-bg-dark transition-all duration-200 ease-in-out">
      <div className="absolute top-52 text-center w-screen">
        <GoogleLogout
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
          buttonText="Logout"
          onLogoutSuccess={handleLogout}
        ></GoogleLogout>
      </div>
    </div>
  );
};

export default Home;
