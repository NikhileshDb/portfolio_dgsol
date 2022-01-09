import React, { useState } from 'react'
import classes from '../css/custom.module.css';
import { BsFacebook, BsInstagram, BsLinkedin } from 'react-icons/bs';
import dataReviews from '../data/dataReviews';
function ClientReview() {
   
    return (
        <>
           <div  id="three" className="h-[400px] sm:w-[300px]  bg-[white] relative shadow-2xl">

            </div>
        </>
    )
}

export default ClientReview




<div  id="three" className="h-[400px] sm:w-[300px]  bg-[white] relative shadow-2xl">
<div className="text-[64px] absolute text-[#8A5FBB] top-1 left-2">“</div>
<div className='p-10'>
    <p>{obj.message}</p>
 </div>
 <div className="text-[64px] text-[#8A5FBB] absolute right-2 top-[100px]">”</div>
<img className={`${classes.avatar} bg-gray-300`} src={obj.image} />

<div className={`${classes.wave} bg-[#8A5FBB]`}></div>

<div className="left-[33.5%] z-20 absolute bottom-[50px] text-[20px] text-white">
<p className="text-center p-4 font-bold">{obj.name}</p>
<div className="flex gap-5">
    <BsFacebook/>
    <BsInstagram/>
    <BsLinkedin/>
</div>
</div>
</div>