import React from 'react';
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";

import AboutMe from '../../assets/about-vj-cut.png';
import './about.css';

const About = () => {
  return (
    <section id='about'>
    <h5>Get To know</h5>
    <h2>About Me</h2>
    <div className="container about__container">
      <div className="about__me">
        <div className="about__me-image">
          <img src={AboutMe} alt="About Image" />
        </div>
      </div>

      <div className="about__content">
        <div className="about__cards">
        <article className='about__card'>
          <FaAward className='about__icon'/>
            <h5>Experience</h5>
            <small>3+ Years Working</small>
          </article>
          <article className='about__card'>
          <FiUsers className='about__icon'/>
            <h5>Clients</h5>
            <small>3+ </small>
          </article>
           <article className='about__card'>
          <FiUsers className='about__icon'/>
            <h5>Projects</h5>
            <small>8+ Projects</small>
          </article>
        </div>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Tempora tempore consectetur dolorum enim culpa minima explicabo rerum consequuntur in vero at nesciunt,
          dicta quos illo doloribus ad, illum amet debitis!
        </p>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
      </div>
    </div>
    </section>
  )
}

export default About