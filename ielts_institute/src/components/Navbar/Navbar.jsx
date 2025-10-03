import React, {useEffect, useState} from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { Link } from "react-scroll";
import menu_icon from '../../assets/menu-icon.png'



const Navbar = () => {z

const [sticky, setSticky] = useState(false);

useEffect(() => {
    window.addEventListener('scroll', () => {
        window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
}, []);

const [mobileMenu, setMobileMenu] = useState(false);
const ToggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
}

return (
<nav className={`container ${sticky? 'dark-nav' : ''}`}>
    <img src={logo} alt="" className='logo'/>
    <ul className={mobileMenu?'':'hide-mobile-menu'}>
        <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='features' smooth={true} offset={-260} duration={500}>Features</Link></li>
        <li><Link to='testimonials-section' smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
        <li><Link to='about' smooth={true} offset={0} duration={-150}>About</Link></li>
        <li><Link to='contact' smooth={true} offset={0} duration={-260}>Contact</Link></li>
    </ul>
    <img src={menu_icon} alt="" className='menu-icon' onClick={ToggleMenu}/>
</nav>
)
}

export default Navbar