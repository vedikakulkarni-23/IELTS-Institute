import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img'/>
            <img src={play_icon} alt="" className='play-icon'/>
        </div>
        <div className="about-right">
            <h3>ABOUT US</h3>
            <h2>Master IELTS with Expert Guidance</h2>
            <p>Achieve your dream IELTS score with our comprehensive preparation courses, AI-powered practice tests, and personalized feedback from certified instructors.
                Get your target band score in 8 weeks
                Expert instructors with 10+ years experience
                AI-powered practice tests and feedback</p>
        </div>
    </div>
  )
}

export default About