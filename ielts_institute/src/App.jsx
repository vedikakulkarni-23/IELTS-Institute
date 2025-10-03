import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Features from './components/Features/Features'
import Testimonials from './components/Testimonials/Testimonials'
import About from './components/About/About'
import Contact from './components/Contact/Contact'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Features/>
      <Testimonials/>
      <About/>
      <Contact/>
    </div>
  )
}

export default App