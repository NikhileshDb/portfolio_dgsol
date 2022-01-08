import React from 'react'

function Contact() {
    return (
        <div className="h-[500px] w-full bg-gradient-to-r from-[#DCF7F2] via-[#F6E3D9] to-[#DCF7F2]">
            <div className='flex flex-row justify-evenly'>
                     <div className="h-[100%] w-[50%]">
                         <h2 className="text-center uppercase sm:text-[54px] text-[30px] text-[#003049] font-bold">Contact Us</h2>
                        <div className="p-10">
                            <form action="#" className="flex flex-col items-center gap-2">
                                <div className="">
                                    <input className="sm:w-[500px] w-[350px] h-[40px] rounded-lg px-5 outline-none shadow-md" placeholder="Full Name" id='full_name' name="full_name" type="text" />
                                </div>
                                <div>
                                    <input className="sm:w-[500px] w-[350px] h-[40px] rounded-lg px-5 outline-none shadow-md" placeholder="Email address" id='email_address' name="email" type="text" />
                                </div>
                                <div className="">
                                    <textarea rows="4" cols="100" className="sm:w-[500px] w-[350px] h-[100%] rounded-lg px-5 outline-none shadow-md" placeholder="Message" type="text" id="message" name="message" />
                                </div>
                                <button className="border h-[50px] sm:w-[35%] w-[100px] sm:text-[24px] text-[18px] text-[#003049] action:scale-[95%] font-semibold shadow-lg rounded-lg" type="submit">Submit</button>
                            </form>
                        </div>

                     </div> 



             </div>
        </div>
    )
}

export default Contact
