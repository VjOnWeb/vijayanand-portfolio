import React from 'react'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import './portfolio.css'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'NodeJs Image Contact App using Node JS, Nodemailer, Postgres SQL',
    github: 'https://github.com/VjOnWeb/image-contact-app',
    demo:'https://image-contact-app.onrender.com/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'User Management App using React, SpringBoot and MySQL',
    desc:'This project has a collection of features including Image Upload and Download, User Detaile CRUD Table and a Note Taking App with Search functionality included for each App',
    github: 'https://github.com/VjOnWeb/',
    demo:'https://vjonweb.github.io/spring_boot_react_crud/'  // add bitly and Covert into JSON
  },
  {
    id: 3,
    image: IMG3,
    title: 'Business WebSite with Multiple Sections and Contact Feature using PHP Mailer which is hosted in Infinityfree.com',
    github: 'https://github.com/VjOnWeb/',
    demo:'https://businesspage.rf.gd/'
  },
  {
    id: 4,
    image: IMG3,
    title: 'Personal Portfolio',
    github: 'https://github.com/VjOnWeb/'
  }
]

const Portfolio = () => {
  return (
    <section  id='portfolio'>
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo, desc}) => {
            return(
              <article key={id} className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <h5 className='desc'>{desc}</h5>
          <div className="porfolio__item-cta">
          <a href={github} className='btn' target='_blank'>Github</a>
          <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>

          </div>
        </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio