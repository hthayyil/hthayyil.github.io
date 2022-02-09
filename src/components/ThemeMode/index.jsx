import './index.scss';

import React from 'react';
import useTheme from '../../hooks/useTheme';

const ThemeMode = () => {
  const { toggleDarkTheme } = useTheme();

  return (
    <div className='container'>
      <div className='language'>
      </div>
      <div className='theme-container'>
        <button onClick={toggleDarkTheme}></button>
      </div>
    </div>
  );
};

export default ThemeMode;
