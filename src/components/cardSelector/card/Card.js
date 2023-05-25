import React from 'react'
import { NavLink } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link';
import './Card.css'

export default function Card({backgroundColor, shortTitle, longTitle, description, image, link}) {
  return (
    //set background image of div to image prop
      <div className={'cardFrame w-100 '+backgroundColor}>
          <div className='image slider__image'>
              <img src={image} alt=''></img>
          </div>
          <h1 className='title'>
              {longTitle}
          </h1>
          <p className='description'>
              {description}
          </p>

          <Link className='learn-more btn btn-pink' smooth to={link}>Learn More</Link>

          <div className='handle'>
              {shortTitle}
          </div>
      </div>
  )
}
