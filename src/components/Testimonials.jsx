import React, {useEffect, useRef} from 'react'
import classes from '../css/custom.module.css';
import {BsFacebook, BsInstagram, BsLinkedin} from 'react-icons/bs';
import { gsap } from "gsap";
function Testimonials() {
    const wavesRef = useRef();
    const animation = gsap.timeline();
    useEffect(()=>{
       animation.fromTo("#one", {x: -900}, {x:0, duration:.5})
       .fromTo("#two", {x: -900}, {x:0, duration:.5})
       .fromTo("#three", {x: -900}, {x:0, duration:.5});
       gsap.to("#waves_static",{y:50,duration:5})
       gsap.fromTo(wavesRef.current, {autoAlpha:1, y:30, x:-100},{x:0, duration:3, autoAlpha:3, repeat:-1, yoyo: true, repeatDelay:0});
       gsap.fromTo("#text_effect",{x:10, alpha:0},{x:0, alpha:1, duration:2})
    });

    return (
        <div className="relative sm:h-screen w-[100%] bg-gradient-to-r from-[#DCF7F2] via-[#F6E3D9] to-[#DCF7F2] overflow-hidden">
            
            <div id="text_effect" className={`${classes.testimonials_heading} sm:text-[54px] text-[34px] pt-10 z-10 mt-40 text-center text-[#003049] font-semibold`}>Clients Reviews</div>
            
            <div id="text_effect" className="text-[18px] text-[#003049] z-10 text-center font-semibold">What our clients are saying</div>
          
            
            <div className="sm:flex sm:flex-row justify-evenly p-10 items-center">
            
                <div id="three" className="h-[400px] sm:w-[300px]  bg-[white] relative shadow-2xl">
                    <div className="text-[64px] absolute text-[#8A5FBB] top-1 left-2">“</div>
                    <div className='p-10'>
                        <p>One of the best services, the team is very helpful in terms of making decision and in various apects of websites.</p>
                    </div>
                    <div className="text-[64px] text-[#8A5FBB] absolute right-2 top-[100px]">”</div>
                    <img className={`${classes.avatar} bg-gray-300`} src="https://i0.wp.com/www.hindishayaricollections.com/wp-content/uploads/2019/10/girls-dp-profile-pics-40.jpg" />
                   
                    <div className={`${classes.wave} bg-[#8A5FBB]`}></div>
                    
                    <div className="left-[33.5%] z-20 absolute bottom-[50px] text-[20px] text-white">
                        <p className="text-center p-4 font-bold">Adam</p>
                        <div className="flex gap-5">
                            <BsFacebook/>
                            <BsInstagram/>
                            <BsLinkedin/>
                            
                        </div>
                     
                    </div>
                </div>



                <div id="two" className="h-[400px] sm:w-[300px] sm:block hidden bg-[white] sm:pt-0 relative shadow-2xl">
                    <div className="text-[64px] absolute text-[#58A3F2] top-1 left-2">“</div>
                    <div className='p-10'>
                        <p>One of the best services, the team is very helpful in terms of making decision and in various apects of websites.</p>
                    </div>
                    <div className="text-[64px] text-[#58A3F2] absolute right-2 top-[100px]">”</div>
                    <img className={`${classes.avatar} bg-gray-300`} src="https://i0.wp.com/www.hindishayaricollections.com/wp-content/uploads/2019/10/girls-dp-profile-pics-40.jpg" />
                   
                    <div className={`${classes.wave} bg-[#58A3F2]`}></div>
                    
                    <div className="left-[33.5%] z-20 absolute bottom-[50px] text-[20px] text-white">
                        <p className="text-center p-4 font-bold">Julia</p>
                        <div className="flex gap-5">
                            <BsFacebook/>
                            <BsInstagram/>
                            <BsLinkedin/>
                            
                        </div>
                     
                    </div>
                </div>
                <div id="one" className="h-[400px] sm:block hidden sm:w-[300px] bg-[white] relative shadow-2xl">
                    <div className="text-[64px] absolute text-[#E2A62F] top-1 left-2">“</div>
                    <div className='p-10'>
                        <p>One of the best services, the team is very helpful in terms of making decision and in various apects of websites.</p>
                    </div>
                    <div className="text-[64px] text-[#E2A62F] absolute right-2 top-[100px]">”</div>
                    <img className={`${classes.avatar} bg-gray-300`} src="https://i0.wp.com/www.hindishayaricollections.com/wp-content/uploads/2019/10/girls-dp-profile-pics-40.jpg" />
                   
                    <div className={`${classes.wave} bg-[#E2A62F]`}></div>
                    
                    <div className="left-[33.5%] z-20 absolute bottom-[50px] text-[20px] text-white">
                        <p className="text-center p-4 font-bold">Nikhilesh</p>
                        <div className="flex gap-5">
                            <BsFacebook/>
                            <BsInstagram/>
                            <BsLinkedin/>
                            
                        </div>
                     
                    </div>
                </div>
            </div>
            {/* <div id="waves_static" className={`${classes.large_wave} bg-[#40bef8a1] z-[0] shadow-lg`}></div>
            <div ref={wavesRef} className={`${classes.large_wave} bg-[#40bef8a1] z-[0] shadow-lg`}></div> */}
        </div>
    )
}

export default Testimonials
