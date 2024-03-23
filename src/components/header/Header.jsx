import React from 'react'
import VJ from '../../assets/vj.png'
import CTA from './CTA'
import HeaderSocial from './HeaderSocilas'
import './header.css'

const Header = () => {

  function getGreeting() {
    var now = new Date();
    var hour = now.getHours();
    console.log(hour);
    console.log(now);
    if (hour >= 5 && hour < 12) {
        return "Good morning 🌞!";
    } else if (hour >= 12 && hour < 17) {
        return "Good afternoon ☀️🕶️!";
    } else {
        return "Good evening 🌇!";
    }
}
  return (
    <header>
      <div className="container header_container">
        <h5 id='greetings'> {getGreeting()}, I'm</h5>
        <h1> Vijay Anand</h1>
        <h5 className="text-light"> FullStack Developer</h5>
        <CTA/>
        <HeaderSocial/>

        <div className="me">
          <img src={VJ} alt="me" />
        </div>
      <a href="#contact" className="scroll_down" > 
        Scroll Down</a>

      </div>
    </header>
  )
}

export default Header