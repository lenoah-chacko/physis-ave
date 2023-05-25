import React from 'react'
import {useState} from 'react'
import { NavLink } from "react-router-dom";

import './Navbar.css'
import  logo from './logo512.png'
export default function Navbar() {
  const [toggled, setToggled] = useState(false)
  
  return (
    <>
    <nav className="navbar">
      <NavLink className="nav-link brand d-none d-md-block" to="/">
        <img src={logo} alt="logo" className="logo-img"></img>
        Physis
      </NavLink>
      <div className={"nav-links"+(toggled?" mobile-menu":"")}>
        <ul className="nav-menu">
          <li>
            <NavLink className={({isActive})=>{return "nav-link"+(isActive?" active":"")}} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={({isActive})=>{return "nav-link"+(isActive?" active":"")}} to="/solutions">
              Solutions
            </NavLink>
          </li>
          <li>
            <NavLink className={({isActive})=>{return "nav-link"+(isActive?" active":"")}} to="/about">About Us</NavLink>
          </li>
          
        </ul>
      </div>
        <div className="menuIcon" onClick={()=>{setToggled(!toggled)}}>
          <span className="icon icon-bars"></span>
          <span className="icon icon-bars overlay"></span>
        </div>

    </nav>
    </>
  )
}
