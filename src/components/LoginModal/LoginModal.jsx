import React from 'react'

const LoginModal = ({ switchToRegister, closeModal }) => {
    return (
        <div>
            <div className="sky-login-wrapper">
                <button className="sky-close" onClick={closeModal}>✕</button>

                <h2 className="f-26 f500 text-white text-center oswald mb-3 mb-lg-4 pb-2">Member Login</h2>

                <form>
                    <input type="text" placeholder="Username" className="sky-input" />
                    <input type="password" placeholder="Password" className="sky-input" />

                    <button className="sky-login-btn oswald">Login</button>
                </form>

                <div className="forgot_password">
                    <a className="sky-forgot oswald">Forgot Password?</a>
                </div>

                <p className="text-center text-white f-24 f500">Not a Member?</p>

                <button className="sky-register-btn oswald f-16 f700" onClick={switchToRegister}>Register now</button>
                <button className="sky-try-btn oswald f-16 f700">Try our games</button>
            </div>
        </div>
    )
}

export default LoginModal
