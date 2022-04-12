import React from 'react';
import { useDarkMode } from '../context/DarkModeContext';

const DarkModeContainer = ({ children }) => {
  const { isDark } = useDarkMode();
  return <div className={isDark ? 'dark' : ''}>{children}</div>;
};

export default DarkModeContainer;
