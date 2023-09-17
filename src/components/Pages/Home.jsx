import React from 'react'
import { HeroSection, Testimonials, ShowCase, Inegerate, WhatsappMarketing, OurJourney, WorkWithUs, OurClients, Form, Footer, BackToTop, } from '../layout'


const Home = () => {
    return (
        <div>
            <HeroSection />
            <Testimonials />
            <ShowCase />
            <Inegerate />
            <WhatsappMarketing />
            <OurJourney />
            <WorkWithUs />
            <OurClients dotColor="#0070f3" />
            <Form />
            <BackToTop />
            <Footer />
        </div>
    )
}

export default Home