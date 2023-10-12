import React from 'react';
import './navbar.scss';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <header className='navbar'>
      {/* sidebar */}
      <div className='wrapper'>
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Yanal Almir
        </motion.span>
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
