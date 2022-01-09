import React, { useRef } from 'react'
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import Testimonials from '../components/Testimonials';
// import Footer from '../components/Footer';
import Contact from '../components/Contact';
import Projects from '../components/Projects';
// import SmoothScroll from "./SmoothScroll";
// import ImageSlider from '../LearnAlongTheWay/ImageSlider';
// import {SliderData} from '../LearnAlongTheWay/SliderData'; 

import dataReviews from '../data/dataReviews';
function HomePage() {

    return (
        <>

            <HeroSection/>
            <Projects />
            <ServicesSection />
          
            <Testimonials slides={dataReviews} />
            <Contact />


        </>
    )
}

export default HomePage
