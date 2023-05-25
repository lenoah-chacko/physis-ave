import React from 'react'
import {useState} from 'react'

import Card from './card/Card'

import farmImage from './farmer.png'
import algaeImage from './algae.png'
import droneImage from './drone.png'
import plasticImage from './plastic.png'
import eBikeImage from './e-bike.png'

import './CardSelector.css'


const data=[{
  id:0,
  backgroundColor:"orange",
  shortTitle:"Floating Farm",
  longTitle:"Floating Farm",
  description:"The world population has grown rapidly and is likely to exceed 8.5 billion people by 2030.  Food demand measured by population growth nearly doubled from 1966 to the present. Our solution to this problem is a floating farm.",
  image:farmImage,
  link:"/solutions#"+"Floating Farm".replace(" ","-")
},
{
  id:1,
  backgroundColor:"green",
  shortTitle:"Algae Bio-Panels",
  longTitle:"Algae Bio-Panels",
  description:"Carbon dioxide (CO2) is the primary greenhouse gas emitted through human activities. In 2021, CO2 accounted for 79% of all U.S. greenhouse gas emissions from human activities. That is why we have designed the algae bio-panels, which captures CO2, produces oxygen and generates electricity!",
  image:algaeImage,
  link:"/solutions#"+"Algae Bio-Panels".replace(" ","-")
},
{
  id:2,
  backgroundColor:"blue",
  shortTitle:"Carbon Capture Drones",
  longTitle:"Carbon Capture Drones",
  description:"The long-term goals of the Paris Agreement are to hold the increase in the global average temperature to well below 2°C and to pursue efforts to limit the temperature increase to 1.5°C.  We, Team Physis, present carbon capture drones and storage systems to get rid of up to 90% of the most common greenhouse gases produced in industrial and energy plants before they reach the atmosphere.",
  image:droneImage,
  link:"/solutions#"+"Carbon Capture Drones".replace(" ","-")
},
{
  id:3,
  backgroundColor:"yellow",
  shortTitle:"Microplastic removal",
  longTitle:"Microplastic removal using Silica Gel",
  description:"An environmental issue that is intensifying day by day is microplastics contaminating the water. Scientists estimate that there are at least 14 million metric tons of microplastics on the ocean floor, which are tough to detect and remove because of their minuscule size. We have come upon a solution to detect and remove these microplastics from the water.",
  image:plasticImage,
  link:"/solutions#"+"Microplastic removal using Silica Gel".replace(" ","-")
},
{
  id:4,
  backgroundColor:"purple",
  shortTitle:"Electric Bikes",
  longTitle:"Electric Bikes",
  description:"Ever wondered if exercising could do more than strengthen our bodies? With our project, electric exercise bikes, your thought is transformed into reality. When in use, the pedals turn the handle which causes the alternator to spin, generating electricity, which is used to run lights and is also stored in the cell for when not in use.",
  image:eBikeImage,
  link:"/solutions#"+"Electric Bikes".replace(" ","-")
},
{
  id:5,
  backgroundColor:"red",
  shortTitle:"Peizo-electric sensors",
  longTitle:"Peizo-electric sensors",
  description:"Currently, ⅛ of the global population lives without electricity, with most villages being completely in the dark. To combat this, we have devised a new way of generating electricity by using a piezo-electric generator, which converts mechanical energy, like footsteps, into electrical energy, which can be stored in a power station for further use.",
  image:eBikeImage,
  link:"/solutions#"+"Peizo-electric sensors".replace(" ","-")
}]

//PEIZO-ELECTRIC SENSORS
//backgroundColor, shortTitle, longTitle, description, image, link
export default function CardSelector() {

  const [selectedIndex, setSelectedIndex] = useState(0)
  return (
    <div className='card-selector'>

    <ul className="slider">
    {data.length>0&&data.map((card) =>  (
      <li className={"slider__slide"+(selectedIndex===card.id?" slider__slide--active":"")} onClick={()=>{setSelectedIndex(card.id)}}>
      <div className="slider__motive">

      <Card 
              backgroundColor={card.backgroundColor} 
              shortTitle={card.shortTitle} 
              longTitle={card.longTitle} 
              description={card.description} 
              image={card.image} 
              link={card.link}/>
      </div>
    </li>
        )
        )}
    </ul>
    </div>
  )
}
