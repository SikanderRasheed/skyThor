import React from 'react'

const SportsTabs = () => {
    return (
        <div className='sports_tabs'>
            <div className="d-flex align-items-center justify-content-between">
                <div className='active_btn'>
                    <p className='text-white f-14 f600 mb-0'>Sports</p>
                </div>
                <div className='w-100 d-flex align-items-center justify-content-center'>
                    <p className='text-white f-14 f600 mb-0'>E-Sports</p>
                </div>
                <div className='w-100 d-flex align-items-center justify-content-center'>
                    <p className='text-white f-14 f600 mb-0'>Virtuals</p>
                </div>
            </div>
        </div>
    )
}

export default SportsTabs
