import React from 'react'
import { BiFootball } from 'react-icons/bi';
import Slider from 'react-slick'
// Images
import Streaming from "../../assets/images/icons/streaming.svg"


const LiveStreaming = () => {

    const sportSlider = {
        dots: false,
        arrows: true,
        infinite: false,
        speed: 500,
        slidesToShow: 2.2,
        slidesToScroll: 1,
        autoplay: false,
    };

    const streamingSlider = {
        dots: false,
        arrows: true,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: false,
    };

    return (
        <div className='streaming_wrapper'>
            <div className="txt">
                <h4 className='text-white f-16 f600 mb-0'>Live Streaming</h4>
            </div>
            <div className="sports_slider mt-2 px-3">
                <Slider {...sportSlider}>
                    <div className='px-1'>
                        <div className="sport_box">
                            <div className="icon">
                                <BiFootball className='f-22 me-1' />
                            </div>
                            <div className="slider_txt">
                                <span>
                                    E-Football
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='px-1'>
                        <div className="sport_box">
                            <div className="icon">
                                <BiFootball className='f-22 me-1' />
                            </div>
                            <div className="slider_txt">
                                <span>
                                    Football AI
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='px-1'>
                        <div className="sport_box">
                            <div className="icon">
                                <BiFootball className='f-22 me-1' />
                            </div>
                            <div className="slider_txt">
                                <span>
                                    E-sports +
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='px-1'>
                        <div className="sport_box">
                            <div className="icon">
                                <BiFootball className='f-22 me-1' />
                            </div>
                            <div className="slider_txt">
                                <span>
                                    E-IceHockey
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='px-1'>
                        <div className="sport_box">
                            <div className="icon">
                                <BiFootball className='f-22 me-1' />
                            </div>
                            <div className="slider_txt">
                                <span>
                                    E-BasketBall
                                </span>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
            <div className="video_div mt-2 mx-2">
                <div className="img">
                    <img src={Streaming} alt="Video" className='img-fluid' />
                </div>
                <div className="video_txt">
                    <p className='mb-0'>You need to be logged-in to watch streaming</p>
                </div>
            </div>
            <div className="streaming_slider sports_slider mt-2 px-3 mb-3">
                <Slider {...streamingSlider}>
                    <div className='px-1'>
                        <div className="sport_box w-100" style={{ display: 'inherit' }}>
                            <div className="slider_txt">
                                <span className='f-12 text-white d-block mb-1' style={{ opacity: '0.5' }}>2nd Half</span>
                                <div className="d-flex align-items-center justify-content-between">
                                    <span className='f-12 text-white'>Portugal (aguuero)</span>
                                    <span className='f-12 text-white'>1</span>
                                </div>
                                <div className="d-flex align-items-center justify-content-between">
                                    <span className='f-12 text-white'>Portugal (aguuero)</span>
                                    <span className='f-12 text-white'>1</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='px-1'>
                        <div className="sport_box w-100" style={{ display: 'inherit' }}>
                            <div className="slider_txt">
                                <span className='f-12 text-white d-block mb-1' style={{ opacity: '0.5' }}>2nd Half</span>
                                <div className="d-flex align-items-center justify-content-between">
                                    <span className='f-12 text-white'>Portugal (aguuero)</span>
                                    <span className='f-12 text-white'>1</span>
                                </div>
                                <div className="d-flex align-items-center justify-content-between">
                                    <span className='f-12 text-white'>Portugal (aguuero)</span>
                                    <span className='f-12 text-white'>1</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='px-1'>
                        <div className="sport_box w-100" style={{ display: 'inherit' }}>
                            <div className="slider_txt">
                                <span className='f-12 text-white d-block mb-1' style={{ opacity: '0.5' }}>2nd Half</span>
                                <div className="d-flex align-items-center justify-content-between">
                                    <span className='f-12 text-white'>Portugal (aguuero)</span>
                                    <span className='f-12 text-white'>1</span>
                                </div>
                                <div className="d-flex align-items-center justify-content-between">
                                    <span className='f-12 text-white'>Portugal (aguuero)</span>
                                    <span className='f-12 text-white'>1</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='px-1'>
                        <div className="sport_box w-100" style={{ display: 'inherit' }}>
                            <div className="slider_txt">
                                <span className='f-12 text-white d-block mb-1' style={{ opacity: '0.5' }}>2nd Half</span>
                                <div className="d-flex align-items-center justify-content-between">
                                    <span className='f-12 text-white'>Portugal (aguuero)</span>
                                    <span className='f-12 text-white'>1</span>
                                </div>
                                <div className="d-flex align-items-center justify-content-between">
                                    <span className='f-12 text-white'>Portugal (aguuero)</span>
                                    <span className='f-12 text-white'>1</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default LiveStreaming
