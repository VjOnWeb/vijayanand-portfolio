import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Hotel Booking Management System',
    github: 'https://github.com/vinothaselvam'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Flower Shop',
    github: 'https://github.com/vinothaselvam'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Personal Portfolio',
    github: 'https://github.com/vinothaselvam'
  }
]



const Portfolio = () => {
  return (
    <section  id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github}) => {
            return(
              <article key={id} className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <div className="porfolio__item-cta">
          <a href={github} className='btn' target='_blank'>Github</a>
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