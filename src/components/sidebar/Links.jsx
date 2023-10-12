import React from 'react';

const Links = () => {
  return (
    <div className='links'>
      {items.map((item, index) => (
        <a href={`#${item}`} key={index}>
          {item}
        </a>
      ))}
    </div>
  );
};

export default Links;

const items = ['homepage', 'services', 'portfolio', 'contact'];
