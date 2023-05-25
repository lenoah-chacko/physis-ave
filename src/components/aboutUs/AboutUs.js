import React from 'react'
import Ameyaa from './Ameyaa Bipin.png'
import Eva from './Eva Anna Joseph.png'
import Manna from './Manna Mariam Baiju.png'
import Serah from './Serah Prinoy.png'
import Shaylee from './Shaylee Fairy Lyall.png'

import DummyNavbar from '../navbar/DummyNavbar'

export default function AboutUs() {

  function getMembers(a,b){
    return members.slice(a,b).map((member,id)=>(
      <div className='card'>
          <img className="card-img-top" src={member.image} alt={member.name+" image"}/>
          <div className='card-body'>
              <h5 className='card-title text-center'>{member.name}</h5>
              <h6 className='card-subtitle mb-2 text-muted text-center'>{member.occputation}</h6>
          </div>
      </div>
    ))
  }

  const members=[
    {
      name:"Ameyaa Bipin",
      occputation:"Student",
      image:Ameyaa
    },
    {
      name:"Eva Anna Joseph",
      occputation:"Student",
      image:Eva
    },
    {
      name:"Manna Mariam Baiju",
      occputation:"Student",
      image:Manna
    },
    {
      name:"Serah Prinoy",
      occputation:"Student",
      image:Serah
    },
    {
      name:"Shaylee Fairy Lyall",
      occputation:"Student",
      image:Shaylee
    },]

  return (
    <div className='container'>
        <DummyNavbar/>
        <div className="row">
          <div className="col">
            <h1 className='mx-auto text-center mt-5 mb-4 pink'>Our Mission</h1>
            <p className='text-light text-center w-75 mx-auto'>
              To promote farming practices that mitigate climate change, reduce greenhouse gas emissions and remove existing gases from the atmosphere, put an end to microplastics contaminating our water bodies, and prioritize local supply chains and sustainable energy sources.
              \n
              Our name is derived from the ancient Greek word Physis, which translates to nature. 
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h1 className='mx-auto text-center mt-5 mb-4 pink'>Our Vision</h1>
            <p className='text-light text-center w-75 mx-auto'>
              To protect and hand over a flourishing planet to the next generation.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h1 className='mx-auto text-center mt-5 mb-4 pink'>Team Physis</h1>
            {/* cards of users */}
            <div className='card-deck mb-4'>
                {getMembers(0,members.length)}
            </div>
          </div>
        </div>
    </div>
  )
}
