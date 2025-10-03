import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'

const Navbar = () => {
return (
<nav className='container'>
    <img src={logo} alt="" className='logo'/>
    <ul>
        <li>Home</li>
        <li>Course</li>
        <li>About</li>
        <li>Contact</li>
        <li><button className='btn'>Get Started</button></li>
    </ul>
</nav>
)
}

export default Navbar