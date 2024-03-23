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
              <small>2 Years Experienced</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Projects</h5>
              <small>2 Projects at Infonovum, 5 Personal Projects</small>
            </article>
          </div>
          <p>
            2 years experienced in developing and deploying web-based applications using Java, SpringBoot, jQuery, ReactJS, PHP, and MySQL, PostgreSQL. Worked on 2 projects at Infonovum and 5 personal projects to implement my learnings into action.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About;
