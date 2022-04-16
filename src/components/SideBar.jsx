import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const SideBar = () => {
  const { pathname } = useLocation();
  return (
    <div className="hidden fixed w-full h-full lg:grid grid-cols-5 bg-transparent z-[-100] top-20">
      <div className=" z-50 bg-white border-r-2 border-gray-200 dark:border-bg-dark-50 p-5 flex gap-5 flex-col items-center dark:bg-bg-dark dark:text-white dark-mode-transition">
        <Link to={'/'} className="w-full">
          <button
            className={`bg-bg-dark dark:bg-white dark:text-bg-dark  text-white w-full rounded-full text-xl font-body font-bold px-4 py-3`}
          >
            Home
          </button>
        </Link>
        <Link to={'/'} className="w-full">
          <button
            className={` w-full rounded-full text-xl font-body font-medium px-4 py-3`}
          >
            Psychology
          </button>
        </Link>
        <Link to={'/'} className="w-full">
          <button
            className={` w-full rounded-full text-xl font-body font-medium px-4 py-3`}
          >
            Fiction
          </button>
        </Link>
        <Link to={'/'} className="w-full">
          <button
            className={` w-full rounded-full text-xl font-body font-medium px-4 py-3`}
          >
            Drama
          </button>
        </Link>
        <Link to={'/'} className="w-full">
          <button
            className={` w-full rounded-full text-xl font-body font-medium px-4 py-3`}
          >
            Crime
          </button>
        </Link>
        <Link to={'/'} className="w-full">
          <button
            className={` w-full rounded-full text-xl font-body font-medium px-4 py-3`}
          >
            Science
          </button>
        </Link>
        <Link to={'/'} className="w-full">
          <button
            className={` w-full rounded-full text-xl font-body font-medium px-4 py-3`}
          >
            Self-help
          </button>
        </Link>
        <Link to={'/'} className="w-full">
          <button
            className={` w-full rounded-full text-xl font-body font-medium px-4 py-3`}
          >
            History
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
