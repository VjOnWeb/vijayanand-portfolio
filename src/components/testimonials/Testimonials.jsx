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
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum leo ut purus consectetur, ac elementum odio cursus.</p>
          </div>
          <div className='testimonial-author'>
            <img src='https://via.placeholder.com/150' alt='Author' />
            <div>
              <h4>John Doe</h4>
              <p>CEO, Company Name</p>
            </div>
          </div>
        </div>
        {/* Add more testimonials as needed */}
      </div>
    </section>
  );
}

export default Testimonials;
