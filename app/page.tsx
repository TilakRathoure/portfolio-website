import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Contactform from './components/Contactform'
import Skills from './components/Skills'
import Education from './components/Education'
import Projects from './components/Projects'

const page = () => {
  return (
    <div  className='px-12'>
    <Navbar/>
    <Header/>
    <Contactform/>
    <Skills/>
    <Education/>
    <Projects/>
    </div>
  )
}

export default page