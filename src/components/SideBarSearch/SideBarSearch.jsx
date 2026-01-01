import React from 'react'
import { FaSearch } from 'react-icons/fa'

const SideBarSearch = () => {
    return (
        <div className='search_wrapper mt-2'>
            <div className="inp_wrapper">
                <div className="icon">
                    <FaSearch className='f-18 text-white' />
                </div>
                <div className="inp">
                    <input type="text" placeholder='Enter Team or Championship name' />
                </div>
            </div>
        </div>
    )
}

export default SideBarSearch
