import React from 'react'

const Button = ({ text, className, modalState }) => {
    return (
        <button className={className} onClick={modalState}>
            {text}
        </button>
    )
}

export default Button
