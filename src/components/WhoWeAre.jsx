import React from 'react'
import { GiCircleClaws } from 'react-icons/gi';
function WhoWeAre() {
    return (
        <>
            <div className="sm:flex flex-row px-[5%]  py-[10%]">
                <div className="relative sm:w-[50%] w-[100%]">
                    <div className="h-[80%] sm:w-[80%] w-[100%]">
                        <img src="https://www.northeastern.edu/graduate/blog/wp-content/uploads/2020/07/Improve-Your-Coding-Skills.jpg" alt="" />
                    </div>
                    <div className="absolute top-[30%] sm:block hidden left-[30%] h-[60%] w-[60%] ">
                        <img src="https://images.ctfassets.net/yr4qj72ki4ky/1kHYUle8vVIrqCeRuFA7H2/a88d7f1e1774f3a63d5c33c8497a5563/iStock-1212597557.jpg" alt="" />
                    </div>

                </div>

                <div className="sm:flex flex-col sm:w-[50%] w-[100%]">
                    <p className="text-gray-400 font-semibold sm:pt-[0] pt-[20px]">WHO WE ARE</p>
                    <h2 className="leading-[100%] text-[#12465B] uppercase font-bold sm:text-[44px] text-[24px] sm:w-[80%] w-[100%]">We're a team of Talented developers & designers</h2>
                    <div className="h-[2.5px] w-[10%] bg-[#3255f3] my-[5%]"></div>
                    <div className="sm:flex flex-row gap-4">
                        <div className="sm:block hidden">
                            <GiCircleClaws className="text-[#EF4444] text-[40px] mb-[5%]" />
                        </div>
                        <div>
                            <p className="font-bold text-[#12465B]">THE BEST DIGITAL AGENCY</p>
                            <p className="text-[#12465B]">Welcome to our studio! We employ people who have passion for design and marketing. It's a perfect combination of professionalism and creative individual approach to every client or project.</p>
                            <div className="pt-[10%]">
                                <button className="text-[18px] relative border h-[50px] font-bold text-[#12465B] w-[200px] rounded-lg hover:bg-[#12465B] hover:text-white">
                                <span class="animate-ping absolute inline-flex h-[50%] w-[50%] rounded-lg  bg-sky-400 opacity-20"></span>
                                    Get in touch

                                </button>
                            </div>
                        </div>

                    </div>


                </div>

            </div>
        </>
    )
}

export default WhoWeAre
