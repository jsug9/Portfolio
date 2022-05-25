import { useState, useEffect } from 'react';

const isDarkModeEnabled = () => {
  const [mode, setMode] = useState(false);
  const onSelectMode = (mode) => setMode(mode);

  useEffect(() => {
    window.matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', (e) => onSelectMode(e.matches));
    onSelectMode(window.matchMedia('(prefers-color-scheme: dark)').matches);

    return () => window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', () => {});
  }, []);

  return mode;
};

export default isDarkModeEnabled;
