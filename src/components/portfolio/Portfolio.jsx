import React from 'react';
import './portfolio.scss';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

const Single = ({ item }) => {
  const ref = React.useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ['start start', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  return (
    <section>
      <div className='container'>
        <div className='wrapper'>
          <div className='imageContainer' ref={ref}>
            <img src={item.img} alt='project' />
          </div>
          <motion.div className='textContainer' style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = React.useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['end end', 'start start'],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  return (
    <div className='portfolio' ref={ref}>
      <div className='progress'>
        <h1>Featured Projects</h1>
        <motion.div style={{ scaleX }} className='progressBar'></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;

const items = [
  {
    id: 1,
    title: 'React e-commerce',
    img: 'https://images.pexels.com/photos/6153689/pexels-photo-6153689.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non, ut?',
  },
  {
    id: 2,
    title: 'Next Js',
    img: 'https://images.pexels.com/photos/12059444/pexels-photo-12059444.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non, ut?',
  },
  {
    id: 3,
    title: 'Node',
    img: 'https://images.pexels.com/photos/8427409/pexels-photo-8427409.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non, ut?',
  },
  {
    id: 4,
    title: 'Vue JS',
    img: 'https://images.pexels.com/photos/18713194/pexels-photo-18713194/free-photo-of-sea-city-water-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non, ut?',
  },
];
