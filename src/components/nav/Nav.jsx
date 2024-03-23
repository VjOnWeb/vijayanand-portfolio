import React, { useEffect, useState } from 'react';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi';
import { GrWorkshop } from "react-icons/gr";
import './nav.css';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let timeoutId;

    const handleMouseMove = () => {
      setVisible(true);
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setVisible(false), 3000); // Hide after 5 seconds of mouse inactivity
    };

    const handleMouseLeave = () => {
      clearTimeout(timeoutId);
      setVisible(false); // Hide immediately on mouse leave
    };

    handleMouseMove(); // Show nav initially
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave); // Listen for mouse leave event

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave); // Remove event listeners on component unmount
    };
  }, []);

  return (
    <nav style={{ opacity: visible ? 1 : 0.4 }}> {/* Toggle opacity based on visibility */}
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''} title="Home"><AiOutlineHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''} title="About Me"><AiOutlineUser /></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''} title="Experience"><BiBook /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''} title="Contact"><BiMessageSquareDetail /></a>
      {/* <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''} title="Services"><RiServiceLine /></a> */}
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''} title="Portfolio of Projects"><GrWorkshop /></a>
    </nav>
  );
};

export default Nav;
