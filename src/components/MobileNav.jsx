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
import { useDarkMode } from '../context/DarkModeContext';
import { WiMoonAltWaningCrescent6 } from 'react-icons/wi';
import { WiMoonAltWaningGibbous1 } from 'react-icons/wi';
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
  const { isDark, setIsDark } = useDarkMode();
  // useEffect(() => {}, [pathname]);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

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
      className={`lg:hidden flex items-center justify-around shadow-[0_0_20px_5px_rgba(0,0,0,.05)]  fixed z-50 bg-white  ${
        user && showNav ? ' bottom-12 opacity-100 ' : ' -bottom-12 opacity-0 '
      } left-[11.5%]   w-[75%] rounded-full p-4 transition-all duration-200 ease-in-out`}
    >
      <Link to={'/'}>
        {pathname === '/' ? (
          <HiHome
            className="nav-icon dark-mode-transition text-gray-700"
            onClick={scrollToTop}
          />
        ) : (
          <HiOutlineHome className="nav-icon dark-mode-transition" />
        )}
      </Link>
      <Link to={'/search'}>
        <BiSearch
          className={`nav-icon dark-mode-transition ${
            pathname === '/search' && 'text-gray-700'
          }`}
        />
      </Link>
      <Link to={'/notifications'}>
        {pathname === '/notifications' ? (
          <AiFillBell className="nav-icon dark-mode-transition text-gray-700" />
        ) : (
          <AiOutlineBell className="nav-icon dark-mode-transition" />
        )}
      </Link>

      <Link to={'/profile'}>
        {user?.imageUrl ? (
          <div className="w-7 h-7 rounded-full overflow-hidden ">
            <img
              src={user?.imageUrl}
              alt="prfile picture"
              className="object-cover"
            />
          </div>
        ) : (
          <HiUserCircle className="nav-icon dark-mode-transition" />
        )}
      </Link>
      {isDark ? (
        <WiMoonAltWaningGibbous1
          className="nav-icon dark-mode-transition"
          onClick={() => setIsDark(!isDark)}
        />
      ) : (
        <WiMoonAltWaningCrescent6
          className="nav-icon dark-mode-transition"
          onClick={() => setIsDark(!isDark)}
        />
      )}
    </nav>
  );
};

export default MobileNav;
