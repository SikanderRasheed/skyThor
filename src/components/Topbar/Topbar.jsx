import React from 'react'
// Images
import Astronout1 from '../../assets/images/app_astronaut1.png'
import Apple from '../../assets/images/icons/apple.svg'
import Andriod from '../../assets/images/icons/andriod.svg'

const Topbar = () => {
    return (
        <div className='top_bar'>
            <div className="d-flex align-items-center justify-content-between">
                <div className="img">
                    <img src={Astronout1} alt='Astronout' className='img-fluid' />
                </div>
                <div className='txt'>
                    <p className='f-16 f700 text-white text-center mb-2'>PLAY WITHOUT LIMITS - Install Skythor APP</p>
                    <div className="d-none d-lg-flex align-items-center justify-content-center gap-1">
                        <div className="playBtn">
                            <a href="javascript:;">
                                <img src={Apple} alt="Apple" className='img-fluid' />
                                <span className='text-white f700 f-14'>iOS</span>
                            </a>
                        </div>
                        <div className="playBtn">
                            <a href="javascript:;">
                                <img src={Andriod} alt="Apple" className='img-fluid' />
                                <span className='text-white f700 f-14'>Andriod</span>
                            </a>
                        </div>
                    </div>
                    <div className="d-lg-none d-flex align-items-center justify-content-center">
                        <div className="playBtn">
                            <a href="javascript:;">
                                <span className='text-white f700 f-14'>Download Now</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="img">
                    <img src={Astronout1} alt='Astronout' className='img-fluid rotate-img' />
                </div>
            </div>
        </div>
    )
}

export default Topbar
