import React from 'react'
import Slider from 'react-slick';
// Images
import Slide1 from "../../assets/images/slide1.webp"
import Slide2 from "../../assets/images/slide2.webp"
import Slide3 from "../../assets/images/slide3.webp"
import Slide4 from "../../assets/images/slide4.webp"

const Banner = () => {

    const bannerSlider = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    };
    return (
        <section className='banner_sec'>
            <div>
                <Slider {...bannerSlider}>
                    <div className='slide'>
                        <img src={Slide1} alt='Slide 1' className='img-fluid' />
                        <div className="slider_btn">
                            <a href="javascript:;" className='text-white'>Learn More</a>
                        </div>
                    </div>
                    <div className='slide'>
                        <img src={Slide2} alt='Slide 1' className='img-fluid' />
                        <div className="slider_btn">
                            <a href="javascript:;" className='text-white'>Learn More</a>
                        </div>
                    </div>
                    <div className='slide'>
                        <img src={Slide3} alt='Slide 1' className='img-fluid' />
                        <div className="slider_btn">
                            <a href="javascript:;" className='text-white'>Learn More</a>
                        </div>
                    </div>
                    <div className='slide'>
                        <img src={Slide4} alt='Slide 1' className='img-fluid' />
                        <div className="slider_btn">
                            <a href="javascript:;" className='text-white'>Learn More</a>
                        </div>
                    </div>
                </Slider>
            </div>
        </section>
    )
}

export default Banner
