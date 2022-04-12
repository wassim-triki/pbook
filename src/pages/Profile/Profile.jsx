import React, { useContext } from 'react';
import { GoogleLogout } from 'react-google-login';
import UserContext from '../../context/UserContext';

const Profile = () => {
  const { user, setUser } = useContext(UserContext);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    console.log('logged out');
  };
  return (
    <div className="dark:bg-bg-dark h-screen dark-mode-transition">
      <GoogleLogout
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        buttonText="Logout"
        onLogoutSuccess={handleLogout}
      ></GoogleLogout>
    </div>
  );
};

export default Profile;
