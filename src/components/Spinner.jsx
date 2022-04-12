import React from 'react';
import { CgSpinner } from 'react-icons/cg';
const Spinner = ({ size }) => {
  return <CgSpinner className={`text-2xl animate-spin`} />;
};

export default Spinner;
