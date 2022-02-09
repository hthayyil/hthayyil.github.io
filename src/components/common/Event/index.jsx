import './index.scss';

import React from 'react';

const Event = ({ event }) => {
  const {  experienceUrl, title, term, description, attribution, tags } =
    event;
  


  return (
    <a href={experienceUrl} target='_blank' rel='noopener noreferrer'>
      <div className='experience'>

        <div className='item__details'>
          <div className='title'>
            {title} <span className='term'>({term})</span>
          </div>
          <div className='description'>{description}</div>
          {attribution && <div className='attribution'>{attribution}</div>}

          {tags && (
            <div className='tags'>
              {tags.map((tag) => (
                <div className='tag'>{tag}</div>
              ))}
            </div>
          )}
        </div>
      </div>
    </a>
  );
};

export default Event;
