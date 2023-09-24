import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import contactImg from '../../assets/contact.png'
import { Link } from 'react-scroll'

export default function Navbar() {
  return (
    
    <nav className="navbar">
        {/* logo of the website */}
        <img src={logo} alt="Logo" className='logo'/>

        {/* Sections of the website */}
        <div className="desktopMenu">
            <Link className="desktopMenuListItems">Home</Link>
            <Link className="desktopMenuListItems">About</Link>
            <Link className="desktopMenuListItems">Portfolio</Link>
            <Link className="desktopMenuListItems">Clients</Link>
        </div>

        {/* Contact Me Button */}
        <button className="desktopMenuButton">
            <img src={contactImg} alt="contact img" className='desktopMenuImg' /> Contact Me
        </button>
    </nav>
  )
}