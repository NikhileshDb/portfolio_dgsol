import React from 'react'
import classes from '../css/custom.module.css';

function ServicesSection() {
    return (
        <>
        <div className={`${classes.services} h-[100%] z-[30] w-full `}>
                <div className="flex flex-row justify-between">
                    <div className="h-screen w-[40%]  flex flex-col">
                            <div className="text-[74px] p-10"> Our Services</div>
                            <div className="text-[60px] p-10">We help brands to do good and look good</div>
                    </div>
                    <div className=" h-screen w-[60%] grid grid-rows-2 gap-1">

                            <div className=" w-[100%] h-[100%] grid grid-cols-2 gap-1">
                                    <div className="w-[100%]  p-10 h-[100%] ">
                                        <h3 className="text-[34px]">Web Design</h3>
                                        <p className="text-[18px]">A business must have a website, we can help you designing your website from scratch and production ready.
                                        </p>
                                    </div>
                                    <div className="w-[100%] p-10 h-[100%]">
                                    <h3 className="text-[34px]">Android Applications</h3>
                                        <p className="text-[18px]">A business must have a website, we can help you designing your website from scratch and production ready.
                                        </p>

                                    </div>
                                    
                            </div>
                            <div className=" w-[100%] h-[100%] grid grid-cols-2 gap-1">
                        
                                    <div className="w-[100%] p-10 h-[100%]">
                                    <h3 className="text-[34px]">Software Solution</h3>
                                        <p className="text-[18px]">A business must have a website, we can help you designing your website from scratch and production ready.
                                        </p>
                                    </div>
                                    <div className="w-[100%] p-10 h-[100%]">
                                    <h3 className="text-[34px]">UI/UX Designing</h3>
                                        <p className="text-[18px]">A business must have a website, we can help you designing your website from scratch and production ready.
                                        </p>
                                    </div>
                            </div>
                    </div>
                </div>
        </div>
    
        </>
    )
}

export default ServicesSection
