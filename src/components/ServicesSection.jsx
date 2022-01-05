import React from 'react';
import classes from '../css/custom.module.css';
// import {gsap} from "gsap";
function ServicesSection() {
 
    return (
        <>
        <div className={`${classes.services_wrapper} bg-gradient-to-r from-[#D5EFFB] to-[#3CB6ED]  h-[100%] z-[30] w-full `}>
                <div className="flex flex-row justify-between">
                    <div className="h-screen w-[40%]  flex flex-col">
                            <div className={`${classes.testimonials_heading} text-[74px] p-10 text-white font-semibold`}> Our Services</div>
                            <div className={`${classes.testimonials_heading} text-[#FFFF] text-[60px] p-10`}>We help brands to do good and look good</div>
                    </div>
                    <div className=" h-screen w-[60%] grid grid-rows-2 gap-1">

                            <div className=" w-[100%] h-[100%] text-white grid grid-cols-2 gap-1">
                                    <div className={`${classes.services} w-[100%] pointer  border p-10 h-[100%]`}>
                                        <h3 className="text-[34px]">Web Design</h3>
                                        <p className="text-[18px]">A business must have a website, we can help you designing your website from scratch and production ready.
                                        </p>
                                    </div>
                                    <div className={`${classes.services} w-[100%] pointer  border p-10 h-[100%]`}>
                                    <h3 className="text-[34px]">Android Applications</h3>
                                        <p className="text-[18px]">Our team is specialized in Android development, we can build wide range of android applications for your buisiness with latest Android development tool kits in the market.</p>

                                    </div>
                                    
                            </div>
                            <div className=" w-[100%] text-white h-[100%] grid grid-cols-2 gap-1">
                        
                                    <div className={`${classes.services} w-[100%] pointer  border p-10 h-[100%]`}>
                                    <h3 className="text-[34px]">Software Solution</h3>
                                        <p className="text-[18px]">Softwares can reduce your cost of production and save a lot of time. Be it a CRM or ERP or HR management etc. We can build cutomized softwares as per your needs at a very affordable price.</p>
                                    </div>
                                    <div className={`${classes.services} w-[100%] pointer  border p-10 h-[100%]`}>
                                        <h3 className="text-[34px]">UI/UX Designing</h3>
                                        <p className="text-[18px]">UI/UX plays a major role in retaining user in your Application and Websites. Our team can design modern UI with seamless UX for you.</p>
                                    </div>
                            </div>
                    </div>
                </div>
        </div>
        </>
    )
}

export default ServicesSection
