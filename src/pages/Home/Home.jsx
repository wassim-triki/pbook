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
    <>
      <div className="h-[200vh]"></div>
      {/* <GoogleLogout
        clientId={process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_ID}
        buttonText="Logout"
        onLogoutSuccess={handleLogout}
      ></GoogleLogout> */}
    </>
  );
};

export default Home;
