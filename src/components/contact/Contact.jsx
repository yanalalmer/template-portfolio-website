import React from 'react';
import './contact.scss';
import { motion } from 'framer-motion';

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};
const Contact = () => {
  return (
    <motion.div
      className='contact'
      variants={variants}
      initial='initial'
      whileInView={'animate'}
    >
      <motion.div className='textContainer' variants={variants}>
        <motion.h1 variants={variants}>Lets wrok together</motion.h1>
        {items.map((item, index) => (
          <motion.div className='item' key={index} variants={variants}>
            <h2>{item.title}</h2>
            <span>{item.span}</span>
          </motion.div>
        ))}
      </motion.div>
      <div className='formContainer'>
        <form>
          <input type='text' required placeholder='Name' />
          <input type='email' required placeholder='Email' />
          <textarea placeholder='Message' rows='8'></textarea>
          <button>Submit</button>
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;

const items = [
  {
    title: 'mail',
    span: 'hello@react.dev',
  },
  {
    title: 'address',
    span: 'hellow street amsterdam',
  },
  {
    title: 'phone',
    span: '+31123446767',
  },
];
