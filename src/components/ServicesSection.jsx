import React, { useEffect} from 'react';
import classes from '../css/custom.module.css';
import {BiRightArrow} from 'react-icons/bi';
import gsap from 'gsap/all';

// import {gsap} from "gsap";
function ServicesSection() {
    
    useEffect(()=>{
            gsap.fromTo("#text_effect",{x:20, alpha:0},{x:0, alpha:1, duration:2})
        });
    return (

        <>
        <div className={`${classes.services_wrapper} sm:bg-gradient-to-r bg-white from-[#DCF7F2] via-[#F6E3D9] to-[#ffffff] sm:h-screen z-[30] w-full `}>
                <div className={`${classes} sm:flex sm:flex-row flex-cols sm:justify-between`}>
                    <div className="sm:h-screen sm:w-[40%]   sm:flex sm:flex-col ">
                            <div id="text_effect" className={`${classes} bg-clip-text text-transparent  bg-gradient-to-r from-[#12465b] via-[#FFAB90] to-[#ff48f0] sm:text-[74px] text-[34px]  sm:p-10 pt-10 pl-10 text-white font-semibold`}> Our Services</div>

                            <div id="text_effect" className={`${classes}  bg-clip-text text-transparent  bg-gradient-to-r from-[#12465b] to-[#12465B] pb-5  sm:text-[60px] py-0 px-10`}>We help brands to do good and looks good</div>
                             <div className="sm:block hidden relative top-20 left-[8%] h-[10vh] w-[100%]"> 
                                <button className={`${classes.big_button}`}>Contact Now
                                <div className={`${classes.big_button_clip}`}></div>
                                </button>
                                
                                
                             </div>   
                           
                    </div>
                    <div className=" h-screen sm:w-[60%] w-[100%]  grid sm:grid-rows-2 gap-1">

                            <div className=" w-[100%] h-[100%]  text-white grid sm:grid-cols-2  gap-1">
                                    <div className={`${classes.services} w-[100%] pointer   p-10 h-[100%]`}>
                                        <h3 id="text_effect" className="sm:text-[34px] text-[24px] z-10">Web Design</h3>
                                        <p id="text_effect" className="text-[18px] z-10 sm:block hidden ">A business must have a website, we can help you designing your website from scratch and production ready.</p>
                                        <div className={`${classes.service_icons}`}>
                                                <BiRightArrow />
                                            </div>
                                        <div className={`${classes.inner_service}`}>
                                        <div className={`${classes.view_more}`}>
                                            View More
                                        <div className={`${classes.button_clip} z-[-10]`}></div>
                                        </div>
                                        
                                        </div>
                                    </div>
                                    <div className={`${classes.services} w-[100%] pointer   p-10 h-[100%]`}>
                                        <h3 id="text_effect" className="sm:text-[34px] text-[24px]">Android Applications</h3>
                                        <p id="text_effect" className="text-[18px] sm:block hidden ">Our team is specialized in Android development, we can build wide range of android applications for your buisiness with latest Android development tool kits in the market.</p>
                                        <div className={`${classes.service_icons}`}>
                                                <BiRightArrow />
                                            </div>
                                        <div className={`${classes.inner_service}`}>
                                        <div className={`${classes.view_more}`}>
                                            View More
                                            <div className={`${classes.button_clip} z-[-10]`}></div>
                                        </div>
                                        </div>
                                    </div>
                          
                            </div>
                            <div className=" w-[100%] text-white h-[100%] grid sm:grid-cols-2  gap-1">
                        
                                    <div className={`${classes.services} w-[100%] pointer   p-10 h-[100%]`}>
                                        <h3 id="text_effect" className="sm:text-[34px] text-[24px]">Software Solution</h3>
                                        <p  id="text_effect" className="text-[18px] sm:block hidden">Softwares can reduce your cost of production and save a lot of time. Be it a CRM or ERP or HR management etc. We can build cutomized softwares as per your needs at a very affordable price.</p>
                                        <div className={`${classes.service_icons}`}>
                                                <BiRightArrow />
                                            </div>
                                        <div className={`${classes.inner_service}`}>
                                        <div className={`${classes.view_more}`}>
                                            View More
                                            <div className={`${classes.button_clip} z-[-10]`}></div>
                                        </div>
                                        </div>
                                    </div>
                                    <div className={`${classes.services} w-[100%] pointer   p-10 h-[100%]`}>
                                        <h3 id="text_effect" className="sm:text-[34px] text-[24px]">UI/UX Designing</h3>
                                        <p id="text_effect" className="text-[18px] sm:block hidden">UI/UX plays a major role in retaining user in your Application and Websites. Our team can design modern UI with seamless UX for you.</p>
                                        <div className={`${classes.service_icons}`}>
                                                <BiRightArrow />
                                        </div>
                                        
                                        <div className={`${classes.inner_service}`}>
                                        <div className={`${classes.view_more}`}>
                                            View More
                                            <div className={`${classes.button_clip} z-[-10]`}></div>
                                        </div>
                                        </div>
                                    </div>
                            </div>
                    </div>
                </div>
        </div>
        </>
    )
}

export default ServicesSection
