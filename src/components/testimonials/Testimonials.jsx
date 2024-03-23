// Testimonials.jsx
import React from 'react';
import './testimonials.css';

const Testimonials = () => {
  return (
    <section id='testimonials' className='testimonials-section'>
      <div className='container'>
        <h2>Testimonials</h2>
        <div className='testimonial'>
          <div className='testimonial-content'>
            <p>Name: Vijay Anand</p>
            <p>Web Application Developer</p>
            <p>Since 2021</p>
            <p>Overall Experience: 4+ years</p>
          </div>
          <div className='testimonial-author'>
            <img src='https://via.placeholder.com/150' alt='Author' />
            <div>
              <h4>Vijay Anand R</h4>
              <p>Vj Works</p>
            </div>
          </div>
        </div>
        {/* Add more testimonials as needed */}
      </div>
    </section>
  );
}

export default Testimonials;
