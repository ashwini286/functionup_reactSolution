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
          <Link to='/Login' >Login</Link>
          <Link to='/Register'>Register</Link>
          <Link to='/Home' >Home</Link>
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
      <section>
        <div className='Container'>
        <div className='left-side'>
        <h1>Welcome to pizza hut</h1>
       <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
       Expedita cupiditate est repellat ipsum magni?<br></br>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
       Expedita cupiditate est repellat ipsum magni? <br></br>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
       Expedita cupiditate est repellat ipsum magni?<br></br>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
       Expedita cupiditate est repellat ipsum magni?</p>
        <button className='btn'>Know More</button>
         </div>  
          
        {/* right side */}
        <div className='right-side'>
        <img src="https://media-cdn.tripadvisor.com/media/photo-s/17/a5/df/42/photo3jpg.jpg" />
        </div>

        </div>
      </section>
    </>
  )
}

export default NavBar