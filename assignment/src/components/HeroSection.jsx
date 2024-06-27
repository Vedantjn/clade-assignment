import React from 'react'
import Heading from './Heading'
import About from './About'
import Border from './Border'
import ShortInfo from './ShortInfo'
import CompanyInfo from './CompanyInfo'

const HeroSection = () => {
  return (
    <div>
      <Heading />
      <Border />
      <ShortInfo />
      <Border />
      <About />
      <Border />
      <CompanyInfo />
    </div>
  )
}

export default HeroSection
