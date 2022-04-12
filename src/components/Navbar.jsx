import React, { useContext, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BiSearch } from 'react-icons/bi';
import { AiFillBell } from 'react-icons/ai';
import UserContext from '../context/UserContext';
import { HiUserCircle } from 'react-icons/hi';
import { WiMoonAltWaningCrescent6 } from 'react-icons/wi';
import { WiMoonAltWaningGibbous1 } from 'react-icons/wi';
import DarkModeContext, { useDarkMode } from '../context/DarkModeContext';

const Navbar = () => {
  const { user } = useContext(UserContext);
  const { isDark, setIsDark } = useDarkMode();
  const { pathname } = useLocation();
  const toggleDarkMode = () => setIsDark(!isDark);
  return (
    <nav
      className={`hidden lg:visible px-10 w-full gap-4 h-20 ${
        user ? 'lg:flex' : 'hidden'
      } items-center text-lg fixed z-50 dark:text-white dark:bg-bg-dark dark-mode-transition bg-white font-body`}
    >
      <Link
        to={'/'}
        className="h-full w-auto  flex items-center justify-center"
      >
        <img
          src="https://firebasestorage.googleapis.com/v0/b/pbook-346616.appspot.com/o/logo-192x192.png?alt=media&token=2b14b91b-fec6-4b3e-b790-6ec3306f55c4"
          alt="logo"
          className="h-1/2"
        />
      </Link>
      <Link
        to="/"
        className={`px-4 py-2 text-xl nav-icon-large dark-mode-transition font-bold  ${
          pathname === '/' ? 'text-black' : 'text-gray-500'
        }`}
      >
        Home
      </Link>
      <form className="bg-gray-200 rounded-full flex items-center relative flex-1">
        <BiSearch className="absolute p-2 text-gray-400    rounded-full w-auto h-full cursor-pointer" />
        <input
          type="text"
          placeholder="Search"
          className="bg-gray-200 rounded-full py-2 px-4 pl-10 focus:ring-2 outline-none active:ring-2 ring-offset-1 w-full text-black hover:bg-gray-300"
        />
      </form>
      <AiFillBell className="nav-icon nav-icon-large dark-mode-transition" />
      {isDark ? (
        <WiMoonAltWaningGibbous1
          className="nav-toggle-theme transition-all dark-mode-transition"
          onClick={toggleDarkMode}
        />
      ) : (
        <WiMoonAltWaningCrescent6
          className="nav-toggle-theme transition-all dark-mode-transition"
          onClick={toggleDarkMode}
        />
      )}

      <Link to={'/profile'}>
        {user?.imageUrl ? (
          <div className="w-12 h-12 p-2 rounded-full  overflow-hidden hover:bg-gray-200 nav-icon-large dark-mode-transition">
            <img
              src={user?.imageUrl}
              alt="prfile picture"
              className="object-cover rounded-full w-12"
            />
          </div>
        ) : (
          <HiUserCircle className="nav-icon" />
        )}
      </Link>
    </nav>
  );
};

export default Navbar;
