import React from 'react';
import { motion } from 'framer-motion';
import backgroundImage from '../assets/background.JPG'; 

const Home = () => {
  return (
    <section 
      id="home"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: 'white',
        padding: '0 1rem',
      }}
    >
      <motion.div 
        className="home-text"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>Hi, I'm Aivy Nguyen.</h1>
        <p>I am passionate about merging the digital experience with thoughtful design. </p>
      </motion.div>
    </section>
  );
};

export default Home;
