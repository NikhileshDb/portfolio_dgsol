import React, { useRef, useEffect } from 'react'
import classes from '../css/custom.module.css';
import { gsap } from 'gsap';
import { MdPlayArrow } from 'react-icons/md';
import { GrFacebook, GrInstagram, GrLinkedin } from 'react-icons/gr';
import { FiPhoneCall } from 'react-icons/fi';
import { MdMarkEmailRead, MdMyLocation } from 'react-icons/md';
const serviceData = [
    {
        service: "Web designing",
    },
    {
        service: "Android applications",
    },
    {
        service: "UI/UX Designing",
    },
    {
        service: "Software solutions",
    },
    {
        service: "SEO Services",
    },
    {
        service: "School Management",
    },
    {
        service: "Car Rental",
    },
    {
        service: "Payment Gateway",
    },
    {
        service: "Logo Designing",
    },
    {
        service: "CMS",
    },

]


function Footer() {


    return (
        <>

            <div className="h-[100%] w-[100%] py-10 px-[5%] bg-[#12465B] relative">
                <div className="sm:flex ">
                    <div className=" text-white h-[100%] w-[100%] p-5">
                        <h2 className="sm:text-[34px] text-[28px]">Digitized Solution</h2>
                        <div className="h-[2.5px] bg-white w-[50%] my-5"></div>
                        <p>Today's business face more complex challenges then ever due to their rapidly changing market. Thus it is neccessary to equip your business with emerging technologies that can grab an advantage for your business. We modernize and digitize businesses like yours and help kick starts the business and future-proof businesses for the coming future that will help you grow with all the advantages and profits.</p>
                        <div className="flex gap-4 text-[34px] py-[15px] pointer ">
                            <GrFacebook className="transition ease-in-out delay-150 hover:-translate-y-2" />
                            <GrLinkedin className="transition ease-in-out delay-150 hover:-translate-y-2" />
                            <GrInstagram className="transition ease-in-out delay-150 hover:-translate-y-2" />
                        </div>
                    </div>

                    <div className=" text-white h-[100%] sm:w-[50%] w-[100%] p-5">
                        <h2 className="sm:text-[34px] text-[28px]">Services Provided</h2>
                        <div className="h-[2.5px] bg-white w-[75%] my-5 "></div>
                        <div className="sm:flex flex-row justify-between">
                            <ul>


                                {serviceData.slice(0, 5).map((obj, index) => (
                                    <li className="flex items-center pointer gap-4 transition ease-in-out delay-150 hover:translate-x-2" key={index}> <MdPlayArrow />{obj.service}</li>
                                ))}
                            </ul>
                            <ul>
                                {serviceData.slice(5, 10).map((obj, index) => (
                                    <li className="flex items-center pointer gap-4 transition ease-in-out delay-150 hover:translate-x-2" key={index}> <MdPlayArrow />{obj.service}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="sm:flex py-[10px] px-[5%] pointer flex-row justify-between text-white text-[40px]">
                    <div className="flex flex-row gap-6 items-center">
                        <FiPhoneCall />
                        <div>
                            <p className="text-[20px]">91 878-776-2697</p>
                            <p className="text-[14px]">Mon-Fri 9am-6pm</p>
                        </div>
                    </div>
                    <div className="flex flex-row gap-6 items-center">
                        <MdMarkEmailRead />
                        <div>
                            <p className="text-[20px]">info@digitizedsol.com</p>
                            <p className="text-[14px]">online support</p>
                        </div>
                    </div>
                    <div className="flex flex-row gap-6 items-center">
                        <MdMyLocation />
                        <div>
                            <p className="text-[20px]">Agartala, Tripura</p>
                            <p className="text-[14px]">799001, Krishna nagar</p>
                        </div>
                    </div>
                </div>
            </div>

                <div className="w-full pt-[10px] h-[40px] bg-[#0a2733] text-[#fff] text-center">2022 <span>&copy;</span> DigitizedSol</div>
        </>
    )
}

export default Footer
