import React, { useRef } from 'react'
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import Projects from '../components/Projects';
import SmoothScroll from "./SmoothScroll";
function HomePage() {

    return (
        <>

            <HeroSection/>
            <Projects />
            <ServicesSection />
          
            <Testimonials />
            <Contact />
         


        </>
    )
}

export default HomePage
