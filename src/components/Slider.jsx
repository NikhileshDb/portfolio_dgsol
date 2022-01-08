import React, { useState, useRef, useEffect } from 'react';
import classes from '../css/custom.module.css';
import dataSlider from '../data/dataSlider';
import BtnSlider from './BtnSlider';


function Slider() {
    const [slideIndex, setSlideIndex] = useState(1);
    const nextSlide = () => {
        if(slideIndex !== dataSlider.length){
            setSlideIndex(slideIndex + 1)
            
        } else if (slideIndex === dataSlider.length){
            setSlideIndex(1)
        }
    }
    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
            
        } else if (slideIndex === 1){
            setSlideIndex(dataSlider.length)
        }
    }
    return (

        <div className={`${classes.container_slider}`}>
            {dataSlider.map((obj, index)=>{
                return (
                    <div 
                    key={obj.id}
                    className={slideIndex === index + 1 ? `${classes.slide} ${classes.active_anim}` : `${classes.slide}`}>
                        <img src={process.env.PUBLIC_URL + `/images/img${index + 1}.jpg`} />
                        <p className={`${classes} absolute p-10  top-[25%] left-[10%] text-[#003049] text-[50px]  bg-clip-text text-transparent  bg-gradient-to-r from-[#12465b] via-[#FFAB90] to-[#ffffff] font-bold`}>{obj.title}</p>
                        <p className={`${classes.testimonials_heading} absolute p-10 top-[37%] left-[10%] text-[#FFFF] text-[24px]`}>{obj.subTitle}</p>
                    </div>
                )
            })}
            <BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"}/>
            
            
      </div>  

    )
}

export default Slider
