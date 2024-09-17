import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-scroll'

const Navbar = () => {
  return (
   <nav className='container'>
    <img src={logo} alt="" className='logo' />
    <ul>
        <li><Link to='hero' smooth={true} offset={-50} duration={500}>Home</Link></li>
        <li><Link to='services' smooth={true} offset={-250} duration={500}>Services</Link></li>
        <li><Link to='trainers' smooth={true} offset={-250} duration={500}>Trainers</Link></li>
        <li><Link to='endorsements' smooth={true} offset={-240} duration={500}>Endorsements</Link></li>
        <li><Link to='cont' smooth={true} offset={-240} duration={500} className='btn'>Contact</Link></li>
    </ul>
   </nav>
  )
}

export default Navbar