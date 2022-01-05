import React, { useState, useRef, useEffect } from 'react';
import classes from '../css/custom.module.css';
import HeroCard from './HeroCard';
import { gsap } from "gsap";



function HeroSection() {
    let [rotateValue, setrotateValue] = useState(0);

    // const prevItem = () => {
    //     setrotateValue(rotateValue - 90);
    // };
    const nextRef = useRef();
    useEffect(()=>{
                // gsap.to(nextRef.current, {rotation: 360 , duration: 2 })
    },[]);

    const nextItem = () => {
        setrotateValue(rotateValue + 60);
    };
    return (
        <>
            <div className="overflow-hidden relative flex flex-row justify-between items-center pr-[5vw] h-screen w-full bg-gradient-to-r from-[#FCA311] to-[#3CB6ED]">

                {/* Circle controller navigation start */}
                <div className="flex flex-col h-[30vh] pb-[9vh]  w-[55vw] justify-evenly items-center">
                    {/* <div className="z-20 active:scale-95" onClick={prevItem}>
                        <img className={`${classes.top__reverse} h-10 w-10)`} src={process.env.PUBLIC_URL + 'images/arrow.svg'} />
                    </div> */}
                    <div className={`${classes.small_circle} font-bold`} style={{ transform: `rotate(${rotateValue}deg)` }}>
                        {/* <div className={`${classes.featured__card} ${classes.s_four} text-black`}>UI/UX DSIGN</div>
                        <div className={`${classes.featured__card} ${classes.s_one} text-black`}>WEB DESIGN</div>
                        <div className={`${classes.featured__card} ${classes.s_two} text-black`}>ANDROID APP</div>
                        <div className={`${classes.featured__card} ${classes.s_three} text-black`}>WEB APP</div>
                        <div className={`${classes.featured__card} ${classes.s_five} text-black`}>iOS APP</div>
                        <div className={`${classes.featured__card} ${classes.s_six} text-black`}>SEO</div> */}
                    </div>
                 



                    <div className="active:scale-95 z-40" onClick={nextItem}>
                        <img className={`${classes.next__button} h-40 w-40`} src={process.env.PUBLIC_URL + 'images/arrow.svg'} alt-text="next" />
                    </div>
                </div>
                {/* Circle controller Navigation End */}

                {/* Overlay */}
                <div className={`${classes.overlay} text-black`}></div>

                {/* Starting of Circle */}
                {/* <div className={`${classes.circle}`} style={{ transform: `rotate(${rotateValue}deg)` }}>
                    <div className={`${classes.featured__card} ${classes.one}`}>
                        <HeroCard />
                    </div>
                    <div className={`${classes.featured__card} ${classes.two}`}>
                        <HeroCard />
                    </div>
                    <div className={`${classes.featured__card} ${classes.three}`}>
                        <HeroCard />
                    </div>
                    <div className={`${classes.featured__card} ${classes.four}`}>
                        <HeroCard />
                    </div>
                </div> */}

                {/* Text Box utilities to fill up the empty space in the left side of the her section */}
                <div className={`${classes.text_box}`} >
                    {/* <h3 className="text-gray-500 text-[24px] font-semibold">We help brands to do good and looks good</h3> */}
                </div>

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
        </>
    )
}

export default HeroSection


