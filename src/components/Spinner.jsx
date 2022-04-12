import React from 'react';
import { CgSpinner } from 'react-icons/cg';
const Spinner = ({ size = 'text-2xl', color = 'text-white' }) => {
  return <CgSpinner className={`${size} ${color} animate-spin`} />;
};

export default Spinner;
