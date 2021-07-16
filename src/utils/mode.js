import { useEffect, useState } from 'react';

export const useDarkMode = () => {
  const [theme, setTheme] = useState('light');
  const [componentMounted, setComponentMounted] = useState(false);
  const setMode = (mode) => {
    window.localStorage.setItem('theme', mode);
    setTheme(mode);
  };

  const toggleTheme = () => {
    console.log('toggleTheme');
    if (theme === 'light') {
      document.body.style = 'background: #3e4434;';
      setMode('dark');
    } else {
      document.body.style = 'background: #fcf7ed';
      setMode('light');
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches &&
    !localTheme
      ? setMode('dark')
      : localTheme
      ? setTheme(localTheme)
      : setMode('light');
    setComponentMounted(true);
  }, []);

  return [theme, toggleTheme, componentMounted];
};
