import React from 'react';
import './navbar.scss';

const Navbar = () => {
  return (
    <header className='navbar'>
      {/* sidebar */}
      <div className='wrapper'>
        <span>Yanal Almir</span>
        <div className='social'>
          <a href='/facebook'>
            <img src='/facebook.png' alt='facebook' />
          </a>
          <a href='/instagram'>
            <img src='/instagram.png' alt='instagram' />
          </a>
          <a href='/youtube'>
            <img src='/youtube.png' alt='youtube' />
          </a>
          <a href='/dribbble'>
            <img src='/dribbble.png' alt='dribbble' />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
