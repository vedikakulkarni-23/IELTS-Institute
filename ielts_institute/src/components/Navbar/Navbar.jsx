import React, {useEffect, useState} from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'


const Navbar = () => {

const [sticky, setSticky] = useState(false);

useEffect(() => {
    window.addEventListener('scroll', () => {
        window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
}, []);

return (
<nav className={`container ${sticky? 'dark-nav' : ''}`}>
    <img src={logo} alt="" className='logo'/>
    <ul>
        <li>Home</li>
        <li>Features</li>
        <li>Testimonials</li>
        <li>About</li>
        <li>Contact</li>
        <li><button className='btn'>Get Started</button></li>
    </ul>
</nav>
)
}

export default Navbar