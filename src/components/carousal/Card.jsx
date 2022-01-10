import React from 'react'
import './Carousel.css';
function Card({image}) {
    return (
        <div className="h-[100%] w-[100%]">
            <img src={image} alt="" className="bg-cover"/>
        </div>
    )
}

export default Card;
