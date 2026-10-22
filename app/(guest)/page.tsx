import React from 'react'
import NavBar from './components/NavBar'
import HeroSection from './components/HeroSection'
import WorkExperience from './components/WorkExperience'
import colors from "@/lib/constants/colors"
import Languages from './components/Languages'

const Index = () => {
  return (
    <div >
        <NavBar />
        <div style={{ backgroundColor: colors.secondary }}>

        <HeroSection />
        <WorkExperience />
        <Languages />
        </div>
    </div>
  )
}

export default Index