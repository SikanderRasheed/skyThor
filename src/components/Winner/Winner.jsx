import React from 'react'
import SectionBar from '../shared/section_bar'
// images
import Image1 from "../../assets/images/tab2.webp"
import { FaTrophy } from 'react-icons/fa'
import Slider from 'react-slick'

const Winner = () => {

    const winnerSlider = {
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1099,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
        ]
    };

    return (
        <section className='winner_sec px-3 py-3'>
            <SectionBar title="Winners" />
            <div className="slider_wrapper">
                <div className="row">
                    <div className="col-12 col-lg-5">
                        <div className="row">
                            <div className="col-4 column_padding">
                                <div className="image_wrapper">
                                    <div className="img">
                                        <img src={Image1} alt="Image" className='img-fluid w-100' />
                                    </div>
                                    <div className="upperText">
                                        <FaTrophy className='icon' />
                                        <span>€10.040,00</span>
                                    </div>
                                    <div className="bottomText">
                                        <span>Pan***</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4 p-0">
                                <div className="image_wrapper">
                                    <div className="img">
                                        <img src={Image1} alt="Image" className='img-fluid w-100' />
                                    </div>
                                    <div className="upperText">
                                        <FaTrophy className='icon' />
                                        <span>€3.645,00</span>
                                    </div>
                                    <div className="bottomText">
                                        <span>vas***</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4 p-0">
                                <div className="image_wrapper">
                                    <div className="img">
                                        <img src={Image1} alt="Image" className='img-fluid w-100' />
                                    </div>
                                    <div className="upperText">
                                        <FaTrophy className='icon' />
                                        <span>€2.500,00</span>
                                    </div>
                                    <div className="bottomText">
                                        <span>pap***</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 col-12 slider_padding">
                        <div className="winnerSlider">
                            <Slider {...winnerSlider}>
                                <div className="slides">
                                    <div className="image_wrapper">
                                        <div className="img">
                                            <img src={Image1} alt="Image" className='img-fluid w-100' />
                                        </div>
                                        <div className="upperText">
                                            <FaTrophy className='icon' />
                                            <span>€10.040,00</span>
                                        </div>
                                        <div className="bottomText">
                                            <span>Pan***</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="slides">
                                    <div className="image_wrapper">
                                        <div className="img">
                                            <img src={Image1} alt="Image" className='img-fluid w-100' />
                                        </div>
                                        <div className="upperText">
                                            <FaTrophy className='icon' />
                                            <span>€3.645,00</span>
                                        </div>
                                        <div className="bottomText">
                                            <span>vas***</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="slides">
                                    <div className="image_wrapper">
                                        <div className="img">
                                            <img src={Image1} alt="Image" className='img-fluid w-100' />
                                        </div>
                                        <div className="upperText">
                                            <FaTrophy className='icon' />
                                            <span>€2.500,00</span>
                                        </div>
                                        <div className="bottomText">
                                            <span>pap***</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="slides">
                                    <div className="image_wrapper">
                                        <div className="img">
                                            <img src={Image1} alt="Image" className='img-fluid w-100' />
                                        </div>
                                        <div className="upperText">
                                            <FaTrophy className='icon' />
                                            <span>€10.040,00</span>
                                        </div>
                                        <div className="bottomText">
                                            <span>Pan***</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="slides">
                                    <div className="image_wrapper">
                                        <div className="img">
                                            <img src={Image1} alt="Image" className='img-fluid w-100' />
                                        </div>
                                        <div className="upperText">
                                            <FaTrophy className='icon' />
                                            <span>€3.645,00</span>
                                        </div>
                                        <div className="bottomText">
                                            <span>vas***</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="slides">
                                    <div className="image_wrapper">
                                        <div className="img">
                                            <img src={Image1} alt="Image" className='img-fluid w-100' />
                                        </div>
                                        <div className="upperText">
                                            <FaTrophy className='icon' />
                                            <span>€2.500,00</span>
                                        </div>
                                        <div className="bottomText">
                                            <span>pap***</span>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Winner
