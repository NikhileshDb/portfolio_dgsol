import React, { useEffect, useRef, useState } from 'react'
import classes from '../css/custom.module.css';
import { BsFacebook, BsInstagram, BsLinkedin } from 'react-icons/bs';
import dataReviews from '../data/dataReviews';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';

import { gsap } from "gsap";

function Testimonials({ slides }) {

    useEffect(() => {

        gsap.fromTo("#text_effect", { x: 10, alpha: 0 }, { x: 0, alpha: 1, duration: 2 })
    });

    const length = slides.length;
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
        gsap.fromTo('#three', { alpha: 0, x: -200 }, { alpha: 1, x: 0, duration: 1 });
    }
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
        gsap.fromTo('#three', { alpha: 0, x: 200 }, { alpha: 1, x: 0, duration: 1 });
    }

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }
    return (
        <div className="relative sm:h-screen w-[100%] sm:pt-0 bg-gradient-to-r from-[#DCF7F2] via-[#F6E3D9] to-[#DCF7F2] overflow-hidden">
            <div id="text_effect" className={`${classes} sm:text-[54px] text-[34px] pt-10 z-10 text-center  bg-clip-text text-transparent  bg-gradient-to-r from-[#12465b] via-[#FFAB90] to-[#ff48f0]  font-semibold`}>Clients Reviews</div>
            <div id="text_effect" className="text-[18px] text-[#003049] z-10 text-center font-semibold">What our clients are saying</div>



        <div className="sm:flex hidden justify-evenly pt-10">
        {dataReviews.slice(0,3).map((obj, index) => (
                <div id="three" className="h-[400px] sm:w-[300px]   bg-[white] relative shadow-2xl">
                    <div className="text-[64px] absolute text-[#8A5FBB] top-1 left-2">“</div>
                    <div className='p-10'>
                        <p>{obj.message}</p>
                        <p className="text-center p-4 font-bold">{obj.name}</p>
                    </div>
                    <div className="text-[64px] text-[#8A5FBB] absolute right-2 top-[100px]">”</div>
                    <img className={`${classes.avatar} bg-gray-300`} src={obj.image} />

                    <div className={`${classes.wave} bg-[#8A5FBB]`}></div>

                    <div className="left-[33.5%] z-20 absolute bottom-[50px] text-[20px] text-white">
                       
                        <div className="flex gap-5">
                            <BsFacebook />
                            <BsInstagram />
                            <BsLinkedin />
                        </div>
                    </div>
                </div>
            ))}
        </div>




            <div className="sm:hidden flex sm:flex-row relative justify-evenly p-10 items-center">

                <FaArrowAltCircleLeft className="absolute  z-10 pointer left-[1%] text-[#12465B] top-[50%] text-[2.5rem]" onClick={prevSlide} />
                <FaArrowAltCircleRight className="absolute  z-10 pointer right-[1%] text-[#12465B] top-[50%] text-[2.5rem]" onClick={nextSlide} />

                <div id="three" className="h-[400px] sm:w-[300px] sm:flex sm:justify-evenly  bg-[white] relative shadow-2xl">
                    {dataReviews.map((obj, index) => (
                        <div className={`${current === index ? "slide active" : "slide"} sm:hidden `} key={index}>
                            {index === current && (
                                <div>
                                    <div className="text-[64px] absolute text-[#8A5FBB] top-1 left-2">“</div>
                                    <div className='p-10'>
                                        <p>{obj.message}</p>
                                        <p className="text-center p-4 font-bold">{obj.name}</p>
                                    </div>

                                    <div className="text-[64px] text-[#8A5FBB] absolute right-2 top-[100px]">”</div>
                                    <img className={`${classes.avatar} bg-gray-300`} src={obj.image} />
                                    <div className={`${classes.wave} bg-[#8A5FBB]`}></div>

                                    <div className="left-[33.5%] z-20 absolute bottom-[50px] text-[20px] text-white">
                                       
                                        <div className="flex gap-5">
                                            <BsFacebook />
                                            <BsInstagram />
                                            <BsLinkedin />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Testimonials
