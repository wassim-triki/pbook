import React, { useContext } from 'react';
import UserContext from '../context/UserContext';

const Footer = () => {
  const { user } = useContext(UserContext);
  return (
    <footer
      className={`h-[50px] w-full border-t-2 bg-white border-gray-200 dark:border-bg-dark-50 p-10 text-bg-dark dark:bg-bg-dark dark:text-white dark-mode-transition flex items-center justify-center font-main mt-auto ${
        user ? 'flex' : 'hidden'
      }`}
    >
      <p>&copy; Wassim Triki 2022</p>
    </footer>
  );
};

export default Footer;
