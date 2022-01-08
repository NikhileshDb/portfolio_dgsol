import gsap from 'gsap/gsap-core';
import React, { useState, useRef, useEffect } from 'react';
import classes from '../css/custom.module.css';
import dataSlider from '../data/dataSlider';
import BtnSlider from './BtnSlider';


function Slider() {
    const [slideIndex, setSlideIndex] = useState(1);
 
   
    
    const nextSlide = () => {
        
        if (slideIndex !== dataSlider.length) {
            setSlideIndex(slideIndex + 1);
            gsap.fromTo("#image", {scale:1}, { duration:1, scale:1.2 })
            gsap.fromTo(".text_effect",{x:20, alpha:0},{x:0, alpha:1, duration:1})
         

        } else if (slideIndex === dataSlider.length) {
            setSlideIndex(1);
            gsap.fromTo("#image", {scale:1}, { duration:1, scale:1.2 })
            gsap.fromTo(".text_effect",{x:20, alpha:0},{x:0, alpha:1, duration:1})
            
        }
    }
    const prevSlide = () => {
        if (slideIndex !== 1) {
            setSlideIndex(slideIndex - 1)
            gsap.fromTo("#image", {scale:1}, { duration:1, scale:1.2 })
            gsap.fromTo(".text_effect",{x:20, alpha:0},{x:0, alpha:1, duration:1})

        } else if (slideIndex === 1) {
            setSlideIndex(dataSlider.length)
            gsap.fromTo("#image", {scale:1}, { duration:1, scale:1.2 })
            gsap.fromTo(".text_effect",{x:20, alpha:0},{x:0, alpha:1, duration:1})
        }
    }
    return (

        <div className={`${classes.container_slider}`}>
            {dataSlider.map((obj, index) => {
                return (
                    <div
                        key={obj.id}
                        className={slideIndex === index + 1 ? `${classes.slide} ${classes.active_anim}` : `${classes.slide}`}>
                        <img id="image" src={process.env.PUBLIC_URL + `/images/img${index + 1}.jpg`} />
                      <div className=" text_effect sm:top-[25%] absolute sm:w-[50%] w-[75%] top-[20%]  left-[10%] backdrop-blur-lg py-[20px] px-[20px]">
                      <p className=" sm:text-[50px] sm:font-bold  text-[#003049] text-[34px]  bg-clip-text text-transparent  bg-gradient-to-r from-[#12465b] via-[#FFAB90] to-[#ffffff] font-semibold">{obj.title}</p>
                        <p className={`${classes.testimonials_heading}   sm:text-[24px]  text-[#FFFF] text-[18px]`}>{obj.subTitle}</p>
                      </div>
                    </div>
                )
            })}
            <BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"} />

            <div className={`${classes.container_dots}`}>
                {Array.from({length:5}).map((item, index) => (
                    <div className={ slideIndex === index + 1 ? `${classes.dot} ${classes.active}` : `${classes.dot}`}></div>
                ))}
            </div>
        </div>

    )
}

export default Slider
