import React from 'react'
import "./Navbar.css"
import logo from "../assets/images/ieeelogo.png"
function Navbar() {
  return (
    <div className='navbar'>
      <div className='wrap_logo'>
        
        <img src={logo} className="logo"/>
        <div className='txt_logo'>IEEE NSUT</div>
      </div>
        <div className='nav_right'>
            <div className='nav_ele'><a href="#about" style={{textDecoration:"none",color:"black"}}>About</a></div>
            <div className='nav_ele'><a href="#event" style={{textDecoration:"none",color:"black"}}>Events</a></div>
            <div className='nav_ele'><a href="#team" style={{textDecoration:"none",color:"black"}}>Team</a></div>
            <div className='nav_ele'><a href="#gallery" style={{textDecoration:"none",color:"black"}}>Galleria</a></div>
        </div>
    </div>
  )
}

export default Navbar