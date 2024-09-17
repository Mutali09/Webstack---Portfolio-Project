import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'
import { Title } from './components/Title/Title'
import Trainers from './components/Trainers/Trainers'
import Endorsements from './components/Endorsements/Endorsements'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle='Our Services' title='Discover the wide range of services we offer to help you achieve your goals.'/>
        <Services/>
        <Title subTitle='Meet Our Trainers' title='Our expert trainers are here to help you reach your fitness goals.'/>
        <Trainers/>
        <Title subTitle='Endorsements' title='Success Stories.'/>
        <Endorsements/>
        <Title subTitle='Get in Touch' title='Talk to Us.'/>
        <Contact/>
        <Footer/>
      </div>
     
    </div>
  )
}

export default App
