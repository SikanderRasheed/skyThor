import React from 'react'
// Images
import Modal from '../../assets/images/modal.png'

const LearnMoreModal = ({closeModal}) => {
  return (
    <div>
        <button className="sky-close" onClick={closeModal}>✕</button>
      <img src={Modal} alt="Modal" className='img-fluid' loading="eager" />
    </div>
  )
}

export default LearnMoreModal
