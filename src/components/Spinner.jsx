import React from 'react';
import { CgSpinner } from 'react-icons/cg';
const Spinner = ({ size }) => {
  return <CgSpinner className={`${size} animate-spin`} />;
};

export default Spinner;
