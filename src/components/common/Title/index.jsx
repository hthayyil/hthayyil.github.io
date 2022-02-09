import './index.scss';

import React from 'react';
import myData from '../../../db.json';

const Title = () => {
  const {
    aboutMe: { name },
  } = myData;

  return (
    <div className='title'>
      <h1 className='title__h1'>{name} </h1>
    </div>
  );
};

export default Title;
