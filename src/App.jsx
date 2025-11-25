import React, { StrictMode } from 'react'
import Hero from './sections/Hero'
import ProjectSection from './sections/ProjectSection'
import NavBar from './components/NavBar'
import Brands from './sections/Brands'
import MyQuality from './sections/MyQuality'
import Footer from './sections/Footer'

const App = () => {
  return (
    <>
      < NavBar />
      < Hero />
      < ProjectSection />
      < Brands />
      < MyQuality />
      < Footer />
    </>
  )
}

export default App