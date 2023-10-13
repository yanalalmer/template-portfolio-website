import React from 'react';
import './contact.scss';
import { motion, useInView } from 'framer-motion';

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
  const ref = React.useRef();
  const isInView = useInView(ref, { margin: '-100px' });
  return (
    <motion.div
      ref={ref}
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
        <motion.div
          className='phoneSvg'
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 0 }}
          transition={{
            delay: 3,
            duration: 1,
          }}
        >
          <svg width='450px' height='450px' viewBox='0 0 48 48'>
            <motion.path
              fill='none'
              initial={{ pathLength: 0 }}
              animate={isInView && { pathLength: 1 }}
              transition={{ duration: 3 }}
              d='m19.308,12.467c-.4234-1.4115-.7215-2.8773-.8813-4.3843-.1571-1.4812-1.449-2.5826-2.9385-2.5826h-6.9092c-1.7767,0-3.1454,1.5345-2.989,3.3043,1.5754,17.8285,15.7771,32.0302,33.6056,33.6056,1.7698.1564,3.3043-1.2073,3.3043-2.9839v-6.1595c0-2.2488-1.1015-3.5362-2.5826-3.6932-1.507-.1598-2.9728-.4579-4.3843-.8813-1.7266-.5179-3.5957-.0304-4.8704,1.2442l-2.9566,2.9566c-5.326-2.8825-9.7164-7.2729-12.5989-12.5989l2.9566-2.9567c1.2746-1.2746,1.7621-3.1438,1.2442-4.8703Z'
            />
          </svg>
        </motion.div>

        <motion.form
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            delay: 4,
            duration: 1,
          }}
        >
          <input type='text' required placeholder='Name' />
          <input type='email' required placeholder='Email' />
          <textarea placeholder='Message' rows='8'></textarea>
          <button>Submit</button>
        </motion.form>
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
