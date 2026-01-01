import React from 'react'
import { BiBasket, BiTennisBall } from 'react-icons/bi'
import { FaFutbol, FaHome, FaRegPlayCircle, FaTable, FaTrophy } from 'react-icons/fa'
import { FaVolleyball } from 'react-icons/fa6'
import { FiRefreshCw } from 'react-icons/fi'
import { GiHockey } from 'react-icons/gi'
import Slider from 'react-slick'

const sportSlider = [
    {
        icon: <FaHome className='f-26 ' />,
        text: "Home"
    },
    {
        icon: <FaRegPlayCircle className='f-26 ' />,
        text: "Live"
    },
    {
        icon: <FiRefreshCw className='f-26 ' />,
        text: "Virtual"
    },
    {
        icon: <FaTrophy className='f-26 ' />,
        text: "All Sports"
    },
    {
        icon: <FaTable className='f-26 ' />,
        text: "Results"
    },
    {
        icon: <FaFutbol className='f-26 ' />,
        text: "Football"
    },
    {
        icon: <BiTennisBall className='f-26 ' />,
        text: "Tennis"
    },
    {
        icon: <BiBasket className='f-26 ' />,
        text: "Basket Ball"
    },
    {
        icon: <GiHockey className='f-26 ' />,
        text: "Ice Hockey"
    },
    {
        icon: <FaVolleyball className='f-26 ' />,
        text: "Volley Ball"
    },
    {
        icon: <FaFutbol className='f-26 ' />,
        text: "E-Football"
    },
    {
        icon: <BiBasket className='f-26 ' />,
        text: "E-BasketBall"
    },
]

const SportsSlider = () => {

    const sportsSlider = {
        dots: false,
        arrows: true,
        infinite: false,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 1,
        autoplay: false,
    };

    return (
        <div className='sports_sec mt-2'>
            <div className="sport_wrapper">
                <Slider {...sportsSlider}>
                    {sportSlider.map((data, index) => (
                        <div className='px-1' key={index}>
                            <div className='slide_box'>
                                <span>{data.icon}</span>
                                <span className=''>{data.text}</span>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default SportsSlider
