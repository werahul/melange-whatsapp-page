import React from 'react'
import {Navbar,HeroSection, Testimonials,ShowCase, Inegerate, WhatsappMarketing,OurJourney , WorkWithUs, OurClients, Form, Footer, } from './components/layout/index'

const App = () => {
  return (
    <div> 
  
    <HeroSection/>
    <Testimonials/>
    <ShowCase/>
    <Inegerate/>
    <WhatsappMarketing/>
    <OurJourney/>
    <WorkWithUs/>
    <OurClients dotColor="#0070f3"/>
    <Form/>
    <Footer/>
    </div>
  )
}

export default App