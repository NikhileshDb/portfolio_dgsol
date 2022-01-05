import React, {useRef} from 'react'
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import Testimonials from '../components/Testimonials';
import useScrollSnap from 'react-use-scroll-snap';
function HomePage() {
    const scrollRef = useRef(null);
    useScrollSnap({ ref: scrollRef, duration: 1, delay: 0 });
    return (
            <div ref={scrollRef} className="scroll-smooth">
                <div> <HeroSection/></div>
                <div ><ServicesSection/></div>
                <div> <Testimonials/></div>
                
            </div> 
   
    )
}

export default HomePage
