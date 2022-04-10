import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BiSearch } from 'react-icons/bi';
import { AiFillBell } from 'react-icons/ai';
import UserContext from '../context/UserContext';
import { HiUserCircle } from 'react-icons/hi';
const Navbar = () => {
  const { user } = useContext(UserContext);
  console.log(user);
  return (
    <nav className="hidden lg:visible px-10 w-screen gap-4 h-20 lg:flex items-center text-lg fixed">
      <Link
        to={'/'}
        className="h-full w-auto  flex items-center justify-center"
      >
        <img
          src="https://firebasestorage.googleapis.com/v0/b/pbook-346616.appspot.com/o/logo-192x192.png?alt=media&token=6a05f4b1-bfa4-43ed-8ca6-34454a725c41"
          alt="logo"
          className="h-1/2"
        />
      </Link>
      <Link to="/" className=" px-4 py-2  nav-icon-large  ">
        Home
      </Link>
      <form className="bg-gray-200 rounded-full flex items-center relative flex-1">
        <BiSearch className="absolute p-2 text-gray-400    rounded-full w-auto h-full cursor-pointer" />
        <input
          type="text"
          placeholder="Search"
          className="bg-gray-200 rounded-full py-2 px-4 pl-10 focus:ring-2 outline-none active:ring-2 ring-offset-1 w-full"
        />
      </form>
      <AiFillBell className="nav-icon text-5xl p-2  nav-icon-large" />
      <Link to={'/profile'}>
        {user?.imageUrl ? (
          <div className="w-12 h-12 p-2 rounded-full  overflow-hidden hover:bg-gray-200 nav-icon-large">
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
