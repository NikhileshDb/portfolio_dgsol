import React, { useRef } from 'react'
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import Projects from '../components/Projects';
// import SmoothScroll from "./SmoothScroll";
// import ImageSlider from '../LearnAlongTheWay/ImageSlider';
// import {SliderData} from '../LearnAlongTheWay/SliderData'; 
import SmallServicePart from '../components/SmallServicePart';
import dataReviews from '../data/dataReviews';
function HomePage() {

    return (
        <>

            <HeroSection/>
            <SmallServicePart/>
            <ServicesSection />
          
            <Testimonials slides={dataReviews} />
            <Contact />
            <Footer />

        </>
    )
}

export default HomePage
