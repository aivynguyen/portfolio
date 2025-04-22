import React from 'react';
import aivypose from '../assets/aivypose.JPG';
import miffy from '../assets/miffy.JPG';
import tokyo from '../assets/tokyo.JPG';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="about-section">
      <h1>About Me</h1>
      <p>
        I am a current senior at the University of Central Florida studying Digital Media with a concentration in Web and Interactive Media and a minor in Computer Science.
      </p>

      <p>  Growing up, I used art to bring my ideas to life, driven by curiosity and a passion for design. UX design became the perfect outlet to blend my creativity with functionality, turning imagination into reality.
      </p>
      
      <p>
        The ability to create fuels my drive to seek new experiences, creating a growth-oriented mindset that strengthens my expertise and desire of impacting people through thoughtful design.
      </p>

      <h2>Skills</h2>
      <p>Prototyping, Wireframing, User research, User testing, Branding</p>

      <h2>Tools</h2>
      <p>Figma, Framer, HTML/CSS, Javascript, C</p>

      <h2>Personal</h2>
      <p>Detail-oriented, Authentic/Personable, Adaptable, Curious, Cooperative</p>

      <h2>Interests</h2>

      <div className="interests-container">
        <div className="interest-item">
          <p>Architecture and photography bring me great joy. I love traveling and discovering design styles often used in different cities.</p>
          <motion.img 
            src={tokyo} 
            alt="Tokyo Architecture" 
            className="about-img"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          />
        </div>

        <div className="interest-item">
          <p>I have always had an eye for fashion. I find it to be the best outlet to express your personality.</p>
          <motion.img 
            src={aivypose} 
            alt="Fashion Pose" 
            className="about-img"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          />
        </div>

        <div className="interest-item">
          <p>I love all things Miffy!</p>
          <motion.img 
            src={miffy} 
            alt="Miffy Collection" 
            className="about-img"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
