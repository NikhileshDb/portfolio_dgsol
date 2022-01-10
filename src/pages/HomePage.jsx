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
import SmallServicePart,{CarouselItem} from '../components/carousal/SmallServicePart';
import dataReviews from '../data/dataReviews';
import WhoWeAre from '../components/WhoWeAre';
import ElasticCarousal from '../components/carousal/ElasticCarousal';
function HomePage() {

    return (
        <>

            <HeroSection/>
            {/* <SmallServicePart>
                <CarouselItem>Item 1</CarouselItem>
                <CarouselItem>Item 2</CarouselItem>
                <CarouselItem>Item 3</CarouselItem>
                <CarouselItem>Item 3</CarouselItem>
                <CarouselItem>Item 3</CarouselItem>
                <CarouselItem>Item 3</CarouselItem>
            </SmallServicePart> */}
            <WhoWeAre/>
            <ServicesSection />
            
            <ElasticCarousal/>
            <Testimonials slides={dataReviews} />
            <Contact />
            <Footer />

        </>
    )
}

export default HomePage
