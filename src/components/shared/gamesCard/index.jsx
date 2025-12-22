import React, { useEffect, useState } from 'react'
import Card1 from "../../../assets/images/card1.webp"
import Button from '../button';
import { Modal } from 'antd';
import LearnMoreModal from '../../LearnMoreModal/LearnMoreModal';
import LoginModal from '../../LoginModal/LoginModal';

const GamesCards = ({ image, timer, timerHeading, sharedBtn, overlay }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [authType, setAuthType] = useState("learn More")

    const targetDate = new Date("2025-12-31T00:00:00");

    const calculateTimeLeft = () => {
        const now = new Date();
        const difference = targetDate - now;

        if (difference <= 0) {
            return {
                days: "00",
                hours: "00",
                minutes: "00",
                seconds: "00",
            };
        }

        return {
            days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, "0"),
            hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, "0"),
            minutes: String(Math.floor((difference / (1000 * 60)) % 60)).padStart(2, "0"),
            seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
        };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <>
            <div className="card">
                <div className="img">
                    {timer && overlay ? <span className='overlay'></span> : null}
                    <img src={image} alt="Card Image" className='img-fluid' />
                </div>
                {timer ?
                    <div className="timer_wrapper">
                        <h3>{timerHeading}</h3>

                        <div className="timer-box">
                            <div className="time">
                                <p>{timeLeft.days}</p>
                                <small>Days</small>
                            </div>
                            <span className='text-white'>:</span>
                            <div className="time">
                                <p>{timeLeft.hours}</p>
                                <small>Hours</small>
                            </div>
                            <span className='text-white'>:</span>
                            <div className="time">
                                <p>{timeLeft.minutes}</p>
                                <small>Minutes</small>
                            </div>
                            <span className='text-white'>:</span>
                            <div className="time">
                                <p>{timeLeft.seconds}</p>
                                <small>Seconds</small>
                            </div>
                        </div>
                    </div> : null}
                <div className="d-flex align-items-center justify-content-start gap-2 mt-2">
                    <Button text="Learn More" className="bordered_btn shared_btn"
                        modalState={() => {
                            setModalOpen(true)
                            setAuthType("learn More")
                        }}

                    />
                    {sharedBtn ?
                        <Button text="Deposite Now" className="background_btn shared_btn" modalState={() => {
                            setModalOpen(true)
                            setAuthType("deposite now")
                        }} /> : null}
                </div>
            </div>

            <Modal
                open={modalOpen}
                footer={null}
                closable={false}
                centered
                width={authType === "learn More" ? 700 : 420}
                className={`sky-login-modal ${authType === "learn More" ? "learnMoreModal" : null}`}
                onCancel={() => setModalOpen(true)}>
                {authType === "learn More" ?
                    <LearnMoreModal closeModal={() => setModalOpen(false)} /> :
                    <LoginModal closeModal={() => setModalOpen(false)} />}
            </Modal>
        </>
    )
}

export default GamesCards
