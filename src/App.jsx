import { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Projects from './Components/Projects/Projects'
import data from "./Components/Projects/ProjectData"
import Social from './Components/SocialIcons/SocialIcons'
import About from "./Components/About/About"
import Footer from './Components/Footer/Footer'


function App() {
  const cards = data.map(item => {
    return (
      <Projects 
        key={item.id}
        item={item}
      />
    )
  })

  return (
    <main>
      <Navbar />
      <Hero />
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='hero-svg'>
        <path fill="#151418" fill-opacity="1" d="M0,160L24,133.3C48,107,96,53,144,80C192,107,240,213,288,240C336,267,384,213,432,202.7C480,192,528,224,576,234.7C624,245,672,235,720,192C768,149,816,75,864,80C912,85,960,171,1008,176C1056,181,1104,107,1152,112C1200,117,1248,203,1296,218.7C1344,235,1392,181,1416,154.7L1440,128L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"></path>
      </svg>
      {cards}
      <About />
      <Social/>
      <Footer />
    </main>
  )
}

export default App
