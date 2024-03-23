import emailjs from 'emailjs-com';
import React, { useRef, useState } from 'react';
import { BsWhatsapp } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import './contact.css';

const Contact = () => {
  const formRef = useRef();

  const [loading, setLoading] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.sendForm('service_zsvd17n', 'template_8delt13', formRef.current, 'sdsTWR38bNtf16GMh');
      setLoading(false);
      setShowSuccessPopup(true);
    } catch (error) {
      setLoading(false);
      console.log('FAILED...', error.text);
    }
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>vijayanandvj1998@gmail.com</h5>
            <a href="mailto:vijayanandvj1998@gmail.com" target="_blank" rel="noreferrer">Send a message</a>
          </article>

          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Vijay Anand</h5>
            <a href="mailto:vijayanandvj1998@gmail.com" target="_blank" rel="noreferrer">Send a message</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5><a href="tel:+918838301883">+91 8838301883</a></h5>
            <a href="https://wa.me/918838301883" target="_blank" rel="noreferrer">Send a message</a>
          </article>
        </div>

        <form ref={formRef} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name='message' rows="7" placeholder='Your Message' required/>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>

        
        {loading && <div className="loader">Loading...</div>}
        {showSuccessPopup && (
          <div className="success-popup">
            <p>Message sent successfully!</p>
            <button onClick={() => setShowSuccessPopup(false)}>Close</button>
          </div>
        )}
      </div>
    </section>
  )
}

export default Contact;
