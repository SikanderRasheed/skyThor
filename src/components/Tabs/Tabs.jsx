import React from 'react'
import { FaHome } from 'react-icons/fa'

const Tabs = () => {
    return (
        <div className='tabs_bar'>
            <div className="tabs_wrapper d-flex align-items-center justify-content-between">
                <div className="home_btn d-flex align-items-center justify-content-center">
                    <FaHome className='text-white' />
                </div>
                <div className="live_btn w-100 d-flex align-items-center justify-content-center">
                    <span className='bg-danger text-white text-uppercase f-14 f600 px-2 rounded'>
                        Live
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Tabs
