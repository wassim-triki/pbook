import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BiSearch } from 'react-icons/bi';
import { AiFillBell } from 'react-icons/ai';
import UserContext from '../context/UserContext';

const Navbar = () => {
  const { user } = useContext(UserContext);
  console.log(user);
  return (
    <nav className="px-10 w-screen h-20 flex items-center">
      <img
        src="https://firebasestorage.googleapis.com/v0/b/pbook-346616.appspot.com/o/logo-192x192.png?alt=media&token=6a05f4b1-bfa4-43ed-8ca6-34454a725c41"
        alt="logo"
        className="h-2/4 w-auto"
      />
      <Link to="/">Home</Link>
      <form>
        <input type="text" placeholder="Search" />
      </form>
      <AiFillBell className="nav-icon" />
      <Link to={'/profile'}>
        <div className="w-7 h-7 rounded-full overflow-hidden ">
          <img
            src={user?.imageUrl}
            alt="prfile picture"
            className="object-cover"
          />
        </div>
      </Link>
    </nav>
  );
};

export default Navbar;
