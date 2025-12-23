import React from 'react'
import { FaGift, FaSearch, FaUser } from 'react-icons/fa'
import { FaVolleyball } from 'react-icons/fa6'

const BottomBar = () => {
    return (
        <section className='bottom_sec d-lg-none d-block'>
            <div className="bottom_bar">
                <div className="gred_bg search d-flex flex-column align-items-center justify-content-center ">
                    <div className="icon">
                        <FaSearch className='text-white f-20'/>
                    </div>
                    <div className="txt">
                        <p className='f-16 text-white f600 mb-0'>Search</p>
                    </div>
                </div>
                <div className="gred_bg search d-flex flex-column align-items-center justify-content-center ">
                    <div className="icon">
                        <FaUser className='text-white f-20'/>
                    </div>
                    <div className="txt">
                        <p className='f-16 text-white f600 mb-0'>Live</p>
                    </div>
                </div>
                <div className="gred_bg search d-flex flex-column align-items-center justify-content-center ">
                    <div className="icon">
                        <FaVolleyball className='text-white f-20'/>
                    </div>
                    <div className="txt">
                        <p className='f-16 text-white f600 mb-0'>Sports</p>
                    </div>
                </div>
                <div className="gred_bg search d-flex flex-column align-items-center justify-content-center ">
                    <div className="icon">
                        <FaGift className='text-white f-20'/>
                    </div>
                    <div className="txt">
                        <p className='f-16 text-white f600 mb-0'>Promo</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BottomBar
