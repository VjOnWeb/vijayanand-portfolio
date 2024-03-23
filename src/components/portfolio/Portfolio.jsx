import React from 'react'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import './portfolio.css'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Hotel Booking Management System',
    github: 'https://github.com/VjOnWeb/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Flower Shop',
    github: 'https://github.com/VjOnWeb/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Personal Portfolio',
    github: 'https://github.com/VjOnWeb/'
  }
]



const Portfolio = () => {
  return (
    <section  id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {
          data.map(({id, image, title, github}) => {
            return(
              <article key={id} className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <div className="porfolio_item-cta">
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