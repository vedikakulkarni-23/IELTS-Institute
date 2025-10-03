import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark_arrow.png'
const Hero = () => {
    return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>Achieve Your Dream</h1>
            <h2>IELTS Score</h2>
            <p>Join thousands of successful students who reached Band 7+ with our AI-powered practice, expert tutors and proven methods</p>
            <button className='btn1'>View Course <img src={dark_arrow} alt="" /></button>
        </div>

    </div>
)
}

export default Hero