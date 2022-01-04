import React from 'react'
import Typewriter from 'typewriter-effect';
import Button from './Button';
import classes from '../css/custom.module.css';

function HeroCard({images}) {
    return (
        <>
            <div className={`${classes.inside_container} bg-cover bg-center `} style={{ backgroundImage: `url(${images})` }}>

            </div>
        </>
    )
}

export default HeroCard
