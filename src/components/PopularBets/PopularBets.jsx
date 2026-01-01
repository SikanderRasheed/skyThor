import React from 'react'
import { FaFutbol } from 'react-icons/fa'

const PopularBets = () => {
    return (
        <div className='popular_bets mt-2'>
            <div className="txt">
                <h4 className='text-white f-16 f600 mb-0'>Popular bets</h4>
            </div>
            <div className="sec_wrapper">
                <div className="popular_box">
                    <div className="d-flex align-items-center gap-2">
                        <FaFutbol className="f-20 text-white" />
                        <p className='text-white f-14 mb-0'>Blackburn Rovers vs. Wrexham</p>
                    </div>
                    <p className='text-white f-14 mb-0' style={{ opacity: '0.5' }}>
                        Both Teams To Score
                    </p>
                    <div className="d-flex align-items-center justify-content-between">
                        <p className='text-white f-14 f600 mb-0'>GG</p>
                        <p className='text-white f-14 f600 mb-0'>2.05</p>
                    </div>
                </div>
                <div className="popular_box">
                    <div className="d-flex align-items-center gap-2">
                        <FaFutbol className="f-20 text-white" />
                        <p className='text-white f-14 mb-0'>Blackburn Rovers vs. Wrexham</p>
                    </div>
                    <p className='text-white f-14 mb-0' style={{ opacity: '0.5' }}>
                        Both Teams To Score
                    </p>
                    <div className="d-flex align-items-center justify-content-between">
                        <p className='text-white f-14 f600 mb-0'>GG</p>
                        <p className='text-white f-14 f600 mb-0'>2.05</p>
                    </div>
                </div>
                <div className="popular_box">
                    <div className="d-flex align-items-center gap-2">
                        <FaFutbol className="f-20 text-white" />
                        <p className='text-white f-14 mb-0'>Blackburn Rovers vs. Wrexham</p>
                    </div>
                    <p className='text-white f-14 mb-0' style={{ opacity: '0.5' }}>
                        Both Teams To Score
                    </p>
                    <div className="d-flex align-items-center justify-content-between">
                        <p className='text-white f-14 f600 mb-0'>GG</p>
                        <p className='text-white f-14 f600 mb-0'>2.05</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopularBets
