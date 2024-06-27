import React from 'react'
import Heading from './Heading'
import About from './About'
import Border from './Border'
import ShortInfo from './ShortInfo'
import CompanyInfo from './CompanyInfo'
import RightSidebar from './RightSidebar'
import '../styles/HeroSection.css'

const HeroSection = () => {
  return (
    <div className="hero-section-container">
      <div className="main-content">
        <Heading />
        <Border />
        <ShortInfo />
        <Border />
        <About />
        <Border />
        <CompanyInfo />
      </div>
      <RightSidebar />
    </div>
  )
}

export default HeroSection
