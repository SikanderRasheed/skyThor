import React, { useState } from 'react'
import { FaAngleDown, FaMinus } from 'react-icons/fa'
// Images
import Reciept from "../../assets/images/icons/reciep-icon.svg"

const BestSlip = () => {
    const [open, setOpen] = useState(true);
    return (
        <div className='slip_sec mt-2'>
            <div className="txt">
                <h4 className='text-white f-16 f600 mb-0'>BESTSLIP</h4>
                {open ? (
                    <FaMinus
                        className={`dropdown-icon`}
                        onClick={() => setOpen(!open)}
                    />
                ) : (
                    <FaAngleDown
                        className={`dropdown-icon`}
                        onClick={() => setOpen(!open)}
                    />
                )}
            </div>
            {open && (
                <div className="slip_wrapper">
                    <div className="img">
                        <img src={Reciept} alt="Image" className='img-fluid mx-auto d-block mb-2' />
                    </div>
                    <div className="slip_txt">
                        <p className='text-white f-16 text-center mb-0'>No selections in the betslip</p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default BestSlip
