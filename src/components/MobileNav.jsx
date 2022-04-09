import React, { useContext, useEffect, useState } from 'react';
import UserContext from '../context/UserContext';
import { Link, useLocation } from 'react-router-dom';
import { HiHome } from 'react-icons/hi';
import { HiOutlineHome } from 'react-icons/hi';
import { BiSearch } from 'react-icons/bi';
import { AiOutlineBell } from 'react-icons/ai';
import { AiFillBell } from 'react-icons/ai';
import { HiOutlineUserCircle } from 'react-icons/hi';
import { HiUserCircle } from 'react-icons/hi';
const navLinks = [
  { pathname: '/', iconOutline: HiOutlineHome, iconFill: HiHome },
  { pathname: '/search', iconOutline: BiSearch, iconFill: BiSearch },
  {
    pathname: '/notifications',
    iconOutline: AiOutlineBell,
    iconFill: AiFillBell,
  },
];
const MobileNav = () => {
  const { user } = useContext(UserContext);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { pathname } = useLocation();
  // useEffect(() => {}, [pathname]);

  const controlNav = () => {
    if (window.scrollY > lastScrollY) {
      setShowNav(false);
    } else {
      setShowNav(true);
    }
    setLastScrollY(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener('scroll', controlNav);
  }, [lastScrollY]);

  return (
    <nav
      className={`flex items-center justify-around shadow-[0_0_20px_5px_rgba(0,0,0,.05)]  fixed ${
        showNav ? ' bottom-5 opacity-100 ' : ' -bottom-12 opacity-0 '
      } left-[18%]   w-[65%] rounded-full p-3 transition-all duration-200 ease-in-out`}
    >
      {navLinks.map((obj) => {
        const iconType = obj.pathname === pathname ? 'iconFill' : 'iconOutline';
        const Icon = obj[iconType];
        return (
          <Link to={obj.pathname} key={obj.pathname}>
            <Icon
              className={`nav-icon ${
                pathname === obj.pathname && 'text-gray-700'
              }`}
            />
          </Link>
        );
      })}
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

export default MobileNav;
