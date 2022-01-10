import React from 'react'
import Carousel from "react-elastic-carousel";
import Card from './Card';
import './Carousel.css';
function ElasticCarousal() {
    const breakpoint = [
        {width:1, itemsToShow: 1},
        {width:500, itemsToShow: 2},
        {width:768, itemsToShow: 3},
        {width:1200, itemsToShow: 4}
    ]
    return (
        <>
        <h2 className="text-center text-[34px] sm:text-[54px] pt-10 font-semibold bg-clip-text text-transparent  bg-gradient-to-r from-[#12465b] via-[#FFAB90] to-[#ff48f0]">Our Clients</h2>
        <Carousel breakPoints={breakpoint} className="py-10">
            <Card image={`${process.env.PUBLIC_URL}/images/Rajarshi.jpg`}/>
            <Card image="2" />
            <Card image="3"/>
            <Card image="4"/>
            <Card image="5"/>
        </Carousel>
        </>
    )
}

export default ElasticCarousal
