import { useState, useEffect } from 'react';
import lightProfile from '../../Assets/Photos/Light.png';
import darkProfile from '../../Assets/Photos/Dark.png';
import Code from './Code';

const Introduction = () => {
  const [mode, setMode] = useState(lightProfile);
  const onSelectMode = (mode) => setMode(mode);

  useEffect(() => {
    window.matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', (e) => onSelectMode(e.matches ? darkProfile : lightProfile));
    onSelectMode(window.matchMedia('(prefers-color-scheme: dark)').matches ? darkProfile : lightProfile);

    return () => window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', () => {});
  }, []);

  return (
    <section className="introduction">
      <img
        src={mode}
        alt="Profile"
        className="profilePic"
      />
      <Code />
    </section>
  );
};

export default Introduction;
