import React, {useRef} from 'react'
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import Projects from '../components/Projects';
import useScrollSnap from 'react-use-scroll-snap';
function HomePage() {
    const scrollRef = useRef(null);
    useScrollSnap({ ref: scrollRef, duration:150, delay: 0 });
    return (
            <div ref={scrollRef} className="scroll-smooth">
                <div> <HeroSection/></div>
                <div ><ServicesSection/></div>
                <div> <Testimonials/></div>
                <div><Projects/></div>
                <div><Contact/></div>
                <div><Footer/></div>
                
            </div> 
   
    )
}

export default HomePage
