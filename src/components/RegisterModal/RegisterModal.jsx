import React from 'react'

const RegisterModal = ({ switchToLogin, closeModal }) => {
    return (
        <div className="sky-register-wrapper">
            <button className="sky-close" onClick={closeModal}>✕</button>

            <h2 className="f-26 f500 text-white text-center oswald mb-3 mb-lg-4 pb-2">Member Login</h2>

            <div className="register-layout">

                {/* LEFT COLUMN */}
                <div className="left-col">
                    <input placeholder="Username" />
                    <input placeholder="Password" type="password" />
                    <input placeholder="Confirm password" type="password" />

                    <div className="row-2">
                        <select className="country">
                            <option>PAKISTAN</option>
                        </select>
                        <select>
                            <option>EUR</option>
                        </select>
                    </div>

                    <label className="label">Your cell phone number</label>
                    <div className="row-2 phone">
                        <input value="+92" disabled />
                        <input placeholder="Phone number" />
                    </div>

                    <input placeholder="Email" className='mb-3'/>

                    <label className="label">Birthday</label>
                    <input placeholder="DD/MM/YYYY" />
                </div>

                {/* RIGHT COLUMN */}
                <div className="right-col">
                    <div className="row-2">
                        <select>
                            <option>Gender</option>
                        </select>
                        <input placeholder="First Name" />
                    </div>

                    <input placeholder="Last Name" />
                    <input placeholder="Address" />

                    <div className="row-2">
                        <input placeholder="City" />
                        <input placeholder="ZIP Code" />
                    </div>

                    <button className="sky-register-btn f-16 f500">Promotional code</button>

                    <label className="checkbox">
                        <input type="checkbox" /> I accept the Terms & Conditions
                    </label>

                    <label className="checkbox">
                        <input type="checkbox" /> I accept the Privacy Policy
                    </label>

                    <button className="sky-login-btn oswald mt-4">
                        Create Account
                    </button>
                </div>

            </div>

            <div className="bottom-links">
                <a className='text-white f600 f-18 text-decoration-underline mb-0'>Are you already a member? <button onClick={switchToLogin} className='bg-transparent border-0 text-white f600 text-decoration-underline'>Login.</button></a>
                <a className='text-white f600 f-18 text-decoration-underline mt-0'>Forgot Password?</a>
            </div>
        </div>
    );
}

export default RegisterModal
