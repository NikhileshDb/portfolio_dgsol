import React,{useState, useRef} from 'react'
import emailjs from '@emailjs/browser';

function Contact() {
    const form = useRef();
    const [result, showResult] = useState(false);
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_jy54ziz', 'template_t9seg0e', form.current, 'user_r7XghRgT3ZwwKiX0zcrWT')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
          showResult(true);
      };

    return (
        <div  className="h-[500px] w-full bg-gradient-to-r from-[#DCF7F2] sm:pt-0 pt-10 via-[#F6E3D9] to-[#DCF7F2]">
            <div className='flex flex-row justify-evenly'>
                     <div className="h-[100%] w-[50%]">
                         <h2 className="text-center  sm:text-[54px] text-[30px] bg-clip-text text-transparent  bg-gradient-to-r from-[#12465b] via-[#FFAB90] to-[#ff48f0]  font-bold">Contact Us</h2>
                        <div className="p-10">
                            <form ref={form} className="flex flex-col items-center gap-2" onSubmit={sendEmail}>
                                <div className="">
                                    <input className="sm:w-[500px] w-[350px] h-[40px] rounded-lg px-5 outline-none shadow-md" placeholder="Full Name" id='full_name' name="full_name" type="text" />
                                </div>
                                <div>
                                    <input className="sm:w-[500px] w-[350px] h-[40px] rounded-lg px-5 outline-none shadow-md" placeholder="Email address" id='email_address' name="email" type="text" />
                                </div>
                                <div className="">
                                    <textarea rows="4" cols="100" className="sm:w-[500px] w-[350px] h-[100%] rounded-lg px-5 outline-none shadow-md" placeholder="Message" type="text" id="message" name="message" />
                                </div>
                                <button className="border h-[50px] sm:w-[35%] w-[100px] sm:text-[24px] text-[18px] text-[#003049] action:scale-[95%] font-semibold shadow-lg rounded-lg" onClick={()=> console.log("clicked")} type="submit" >Submit</button>
                                <div>{result ? 'Success' : null}</div>
                            </form>
                        </div>

                     </div> 

             </div>
        </div>
    )
}

export default Contact
