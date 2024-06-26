import React from 'react'
import Heading from './Heading'
import About from './About'
import Border from './Border'
import ShortInfo from './ShortInfo'

const HeroSection = () => {
  return (
    <div>
      <Heading />
      <Border />
      <ShortInfo />
      <Border />
      <About />
    </div>
  )
}

export default HeroSection
