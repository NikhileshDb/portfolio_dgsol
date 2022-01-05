import React from 'react'
import classes from '../css/custom.module.css';
import {BsFacebook, BsInstagram, BsLinkedin} from 'react-icons/bs';
function Testimonials() {
    return (
        <div className="relative h-screen w-[100%] bg-gradient-to-r from-[#D5EFFB] to-[#3CB6ED]">
            <div className={`${classes.testimonials_heading} text-[54px] pt-10 z-10 text-center text-white font-semibold`}>Clients Reviews</div>
            <div className="text-[18px]  z-10 text-center text-white font-semibold">What our clients are saying</div>
           
            
            <div className="flex flex-row justify-evenly p-10 items-center">
            
                <div className="h-[400px] w-[300px] bg-[white] relative shadow-2xl">
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



                <div className="h-[400px] w-[300px] bg-[white] relative shadow-2xl">
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
                <div className="h-[400px] w-[300px] bg-[white] relative shadow-2xl">
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
            <div className={`${classes.large_wave} bg-[#40bef8a1] z-0 shadow-lg`}></div>
        </div>
    )
}

export default Testimonials
