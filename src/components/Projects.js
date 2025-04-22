import React from 'react';
import snapkpack from '../assets/snakpack.png';
import artbeat from '../assets/artbeat.png';
import todo from '../assets/todo.png';
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h1>Projects</h1>

      <div className='projects-container'>
      <div className="project-card">
        <motion.img 
          src={snapkpack} 
          alt="SnakPack" 
          className="project-img"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        />
        <h2>SnakPack</h2>
        <p>A snack subscription website that delivers authentic treats from around the world, bringing global flavors straight to your doorstep.</p>
        <a href="https://www.figma.com/design/ZzXUaDilvsKXpRNcQaxJxF/Snakpack?m=auto&t=d9piVvxp4nTQsNiK-1" target="_blank" rel="noopener noreferrer" className="project-link">View Project</a>
      </div>

      <div className="project-card">
        <motion.img 
          src={artbeat} 
          alt="ArtBeat" 
          className="project-img"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        />
        <h2>ArtBeat</h2>
        <p>An art-sharing social media platform that centralizes portfolio building and commissioning services.</p>
        <a href="https://docs.google.com/document/d/1ktBZp-ovnxz1t6Dr8V_e_prkR__qX0q6WMtdgcBaq4c/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="project-link">View Project</a>
      </div>

      <div className="project-card">
        <motion.img 
          src={todo} 
          alt="To-do App" 
          className="project-img"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        />
        <h2>To-do App</h2>
        <p>A task management app that streamlines productivity through organized scheduling.</p>
        <a href="https://www.figma.com/proto/3PeILJY1TM4cQjorLdyXQg/TODO-App-Design?node-id=4-3&p=f&t=dYOmyUKEQi5qA9Av-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=4%3A3&show-proto-sidebar=1" target="_blank" rel="noopener noreferrer" className="project-link">View Project</a>
      </div>
    </div>
    </section>
  );
};

export default Projects;
