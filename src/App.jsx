import React from 'react'
import About from './Components/about/about'
import Contact from './Components/contact/contact'
import Footer from './Components/footer/footer'
import Hero from './Components/hero/hero'
import MyWork from './components/mywork/mywork'
import Navbar from './components/navbar/navbar'
import Services from './components/services/services'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <MyWork/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
