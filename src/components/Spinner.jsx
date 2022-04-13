import React from 'react';
import { CgSpinner } from 'react-icons/cg';
const Spinner = ({ className }) => {
  return <CgSpinner className={`${className} animate-spin`} />;
};

export default Spinner;
