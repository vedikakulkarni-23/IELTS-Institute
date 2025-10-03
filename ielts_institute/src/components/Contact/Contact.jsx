import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phn_icon from '../../assets/phone-icon.png'
import loc_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {
  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message <img src={msg_icon} alt="" /></h3>
            <p>Feel free to reach out through contact form or find our contact information below. Your Feedback, questions and suggestions are important to us.</p>
            <ul>
                <li><img src={mail_icon} alt="" />Contact@ieltsinstitute.edu</li>
                <li><img src={phn_icon} alt="" />0231 2653148</li>
                <li><img src={loc_icon} alt="" />Building No. 8, Mumbai<br/> India</li>
            </ul>
        </div>
            <div className="contact-col">
                <form>
                    <label>Your Name</label>
                    <input type="text" name="name" placeholder='Enter Your Name' required />
                    <label>Phone Number</label>
                    <input type="tel" name='phone' placeholder='Enter your Phone Number' required />
                    <label>Write Your Message here!</label>
                    <textarea name="message" id="" cols="30" rows="10" placeholder='Enter your Message' required></textarea>
                    <button type='submit' className='btn dark-btn'>Submit Now <img src={white_arrow} /></button>
                </form>
                <span>sending</span>
            </div>
    </div>
  )
}

export default Contact