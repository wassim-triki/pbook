import { createContext, useContext, useEffect, useState } from 'react';

const DarkModeContext = createContext(false);
export default DarkModeContext;
export const DarkModeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(
    JSON.parse(localStorage.getItem('isDark'))
  );
  useEffect(() =>
    localStorage.setItem('isDark', JSON.stringify(isDark), [isDark])
  );
  // useEffect(() => console.log(isDark));
  return (
    <DarkModeContext.Provider value={{ isDark, setIsDark }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkMode = () => {
  const { isDark, setIsDark } = useContext(DarkModeContext);
  return { isDark, setIsDark };
};
