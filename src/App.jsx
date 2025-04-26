import React from 'react'
import Hero from './sections/Hero'
import ProjectSection from './sections/ProjectSection'
import NavBar from './components/NavBar'
import Brands from './sections/Brands'

const App = () => {
  return (
    <>
      < NavBar />
      < Hero />
      < ProjectSection />
      < Brands />
    </>
  )
}

export default App