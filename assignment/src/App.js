import React from 'react'
import Navbar from './components/Navbar'
import SecondNav from './components/SecondNav'
import Border from './components/Border'
import HeroSection from './components/HeroSection'
import ShortInfo from './components/ShortInfo'
import About from './components/About'

const App = () => {
  return (
    <div>
      <Navbar />
      <Border />
      <SecondNav />
      <Border />
      <HeroSection />
      <Border />
    </div>
  )
}

export default App