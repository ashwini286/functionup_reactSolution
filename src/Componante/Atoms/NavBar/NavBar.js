import React, { useState } from 'react'
import './NavBar.css'
import { FaFacebookSquare, FaInstagramSquare, FaLinkedinIn } from 'react-icons/fa';
import {GiHamburgerMenu} from "react-icons/gi";
import { Link } from "react-router-dom";


function NavBar(){
  const[shoMediaIcons, setShowMediaIcons] = useState(false)
  return (
    <>
     
      <nav className="main-nav">
      <div className="logo">
          <img src="https://media.istockphoto.com/vectors/pizza-chef-vector-id1182416349" alt="" class="src" />  
        </div>
      


        {/* 2nd menu bar */}
        <div className={shoMediaIcons ? "menu-link mobile-menu-link" : 'menu-link' }> 
        <ul>
        <Link to='/'  >Home</Link>
          <Link to='/Login' >Login</Link>
          <Link to='/Register'>Register</Link>
          <Link to='.AboutUs' >About Us</Link>
        </ul>
        </div>
        {/* logo */}
        <div className='social-media'> 
        <ul className='social-media-desktop'>
          <li><a className='Facebook'><FaFacebookSquare /></a></li>
          <li><a className='Instragram'><FaInstagramSquare /></a></li>
          <li><a className='Linkedin'><FaLinkedinIn /></a></li>
        </ul>

        <div className='hamburger-menu'>
        <a href='#' onClick={() => setShowMediaIcons(!shoMediaIcons)}> <GiHamburgerMenu /></a>
</div>

        </div>
      </nav>
      {/* hero section */}
     
    </>
  )
}

export default NavBar