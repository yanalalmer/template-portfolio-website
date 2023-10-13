import React from 'react';
import './services.scss';
import { motion, useInView } from 'framer-motion';

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = React.useRef();
  const isInView = useInView(ref, { margin: '-100px' });
  return (
    <motion.div
      className='services'
      variants={variants}
      initial='initial'
      ref={ref}
      animate={isInView && 'animate'}
    >
      <motion.div className='textContainer' variants={variants}>
        <p>
          I focus on helping your brand grow <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className='titleContainer' variants={variants}>
        <div className='title'>
          <img src='/people.webp' alt='people' />
          <h1>
            <b>Unique</b> Ideas
          </h1>
        </div>
        <div className='title'>
          <h1>
            <b>For your</b> business
          </h1>
          <button>what we do?</button>
        </div>
      </motion.div>
      <motion.div className='listContainer' variants={variants}>
        {boxes.map((box, index) => (
          <motion.div className='box' key={index}>
            <h2>{box.title}</h2>
            <p>{box.para}</p>
            <button>{box.buttonText}</button>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;

const boxes = [
  {
    title: 'Branding',
    para: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit,Lorem ipsum, dolor sit amet',
    buttonText: 'Go',
  },
  {
    title: 'Branding',
    para: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit,Lorem ipsum, dolor sit amet',
    buttonText: 'Go',
  },
  {
    title: 'Branding',
    para: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit,Lorem ipsum, dolor sit amet',
    buttonText: 'Go',
  },
  {
    title: 'Branding',
    para: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit,Lorem ipsum, dolor sit amet',
    buttonText: 'Go',
  },
];
