import React from 'react';
import { motion } from 'framer-motion';
import Links from './Links';
import './sidebar.scss';
import ToggleButton from './ToggleButton';

const Sidebar = () => {
  const [open, setOpen] = React.useState(false);
  const variants = {
    open: {
      clipPath: 'circle(1200px at 50px 50px)',
      transition: {
        type: 'spring',
        stiffness: 20,
      },
    },
    closed: {
      clipPath: 'circle(30px at 50px 50px)',
      transition: {
        delay: 0.5,
        type: 'srping',
        stiffness: 400,
        damping: 40,
      },
    },
  };

  return (
    <motion.div className='sidebar' animate={open ? 'open' : 'closed'}>
      <motion.div className='bg' variants={variants}>
        <Links />
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
};

export default Sidebar;
