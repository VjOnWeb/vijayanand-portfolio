import React from 'react';
import { BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs";
const HeaderSocilas = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/vijay-anand-494378186" target='_blank'><BsLinkedin/></a>
        <a href="https://github.com/VjOnWeb" target='_blank'><BsGithub/> </a>
        <a href="https://wa.me/918838301883" target="_blank"><BsWhatsapp/> </a>
    </div>
  )
}

export default HeaderSocilas