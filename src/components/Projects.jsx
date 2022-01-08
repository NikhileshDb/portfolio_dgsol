import React, { useState, useRef, useEffect } from 'react';
import classes from '../css/custom.module.css';
import HeroCard from './HeroCard';
import { gsap } from "gsap";
function Projects() {
    let [rotateValue, setrotateValue] = useState(0);
    const playButton = useRef();
    const overlayRef = useRef();
    useEffect(()=>{
                
                gsap.fromTo(overlayRef.current,{x:-600}, {x: 0 , duration: 1 });
                gsap.fromTo("#text_effect",{x:20, alpha:0},{x:0, alpha:1, duration:2});


    });

    const nextItem = () => {
        setrotateValue(rotateValue + 60);
    };
    return (
 
        <div className="sm:flex overflow-hidden relative hidden flex-row justify-between items-center pr-[5vw] h-screen w-full bg-gradient-to-r from-[#DCF7F2] via-[#F6E3D9] to-[#DCF7F2]">

        {/* Circle controller navigation start */}
        <div className="flex flex-col h-[30vh] pb-[9vh]  w-[55vw] justify-evenly items-center">
      
            <div className={`${classes.small_circle} font-bold`} style={{ transform: `rotate(${rotateValue}deg)` }}>
              
            </div>
         



            <div ref={playButton} className="active:scale-90 z-40" onClick={nextItem}>
                <img className={`${classes.next__button} sm:h-40 sm:w-40 h-[30px] w-[30px] `} src={process.env.PUBLIC_URL + 'images/arrow.svg'} alt-text="next" />
            </div>
        </div>
        {/* Circle controller Navigation End */}

        {/* Overlay */}
        <div ref={overlayRef} className={`${classes.overlay} sm:block hidden text-black]`}></div>
        <div id="text_effect" className="sm:text-[54px] text-[26px] sm:top-[400px] sm:left-[-160px] top-[0] uppercase  left-[23%] pt-[10px] sm:rotate-[270deg] rotate-[0deg] text-[#003049] font-semibold z-[80] absolute">Recent Projects</div>
        <div id="text_effect" className="text-[20px]  sm:left-[0px] sm:top-[530px] left-[23%] top-[40px] sm:rotate-[270deg] text-[#003049] font-semibold z-[80] absolute">Projects we are working on</div>
    

        <div className={`${classes.container} `} >
            <div className={`${classes.card_stack}`} style={{ transform: `rotateY(${rotateValue}deg)` }}>
                <div className={`${classes.single_stack} ${classes.stack_one} `}>
                    <HeroCard  images="https://cdn.dribbble.com/users/1997192/screenshots/17185902/media/779591740264275c2deab5e347897a26.png"/>
                </div>
                <div className={`${classes.single_stack} ${classes.stack_two}`}>

                    <HeroCard images="https://cdn.dribbble.com/users/8037018/screenshots/17188064/media/e65ae9badddd9ee42158a4ddec6d0652.jpg" />

                </div>
                <div className={`${classes.single_stack} ${classes.stack_three}`}>

                    <HeroCard images="https://cdn.dribbble.com/users/1672258/screenshots/17190174/media/523900c5fe299e59594cf981da18b2ce.png"/>

                </div>
                <div className={`${classes.single_stack} ${classes.stack_four}`}>

                    <HeroCard images="https://cdn.dribbble.com/users/47552/screenshots/17188225/media/87a00406380206e25b0ca51eb188152a.png" />

                </div>
                <div className={`${classes.single_stack} ${classes.stack_five}`}>

                    <HeroCard images="https://cdn.dribbble.com/users/6077763/screenshots/17187829/media/29a0f0a036111a685291463f232dc18a.png"/>

                </div>
                <div className={`${classes.single_stack} ${classes.stack_six}`}>

                    <HeroCard  images="https://cdn.dribbble.com/users/1998175/screenshots/17186124/media/819f1c57d13b8ccf814c20973ec75cd1.jpg" />

                </div>
            </div>
        </div>

    </div>

    )
}

export default Projects
