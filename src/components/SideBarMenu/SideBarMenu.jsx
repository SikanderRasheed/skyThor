import React from 'react'
import { List } from "antd";
import { useState } from "react";
import { FaAngleDown, FaMinus } from "react-icons/fa";
import { BiBasketball, BiFootball, BiTennisBall } from "react-icons/bi";
import { PiHockeyDuotone } from "react-icons/pi";
import { FaVolleyball } from "react-icons/fa6";
// Images
import Flag1 from "../../assets/images/icons/flag1.svg"

const leagues = [
    {
        id: 1,
        text: "Football",
        icon: <BiFootball className="f-24" />,
        live: true,
        numbers: "999+"
    },
    {
        id: 2,
        text: "Tennis",
        icon: <BiTennisBall className="f-24" />,
        live: false,
        numbers: "999+"
    },
    {
        id: 3,
        text: "BasketBall",
        icon: <BiBasketball className="f-24" />,
        live: true,
        numbers: "999+"
    },
    {
        id: 4,
        text: "Ice Hockey",
        icon: <PiHockeyDuotone className="f-24" />,
        live: true,
        numbers: "999+"
    },
    {
        id: 5,
        text: "Volleyball",
        icon: <FaVolleyball className="f-24" />,
        live: false,
        numbers: "999+"
    },
    {
        id: 6,
        text: "E-Football",
        icon: <BiFootball className="f-24" />,
        live: true,
        numbers: "999+"
    },
    {
        id: 7,
        text: "Football Ai",
        icon: <BiFootball className="f-24" />,
        live: false,
        numbers: "999+"
    },
];

const SideBarMenu = () => {
    const [openId, setOpenId] = useState(null);

    const handleToggle = (id) => {
        setOpenId(openId === id ? null : id);
    };
    return (
        <div className='menu_wrapper mt-2'>
            <div className="txt">
                <h4 className='text-white f-16 f600 mb-0'>Menu</h4>
            </div>
            <div className="pt-2 pb-2 px-2">
                <List
                    dataSource={leagues}
                    rowKey="id"
                    renderItem={(item, index) => (
                        <List.Item className="league-item" key={index}>
                            <div className="d-flex align-items-center justify-content-between w-100 pt-0 px-2">
                                <div>
                                    <span className="league-icon">{item.icon}</span>
                                    <span className="f-15 f500">{item.text}</span>
                                </div>
                                <div>
                                    {item.live ? <span className="live_btn">Live</span> : null}
                                    <span className="number_span">{item.numbers}</span>
                                    <button
                                        className="innerdropdown_btn"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleToggle(item.id);
                                        }}>
                                        <FaAngleDown className="text-white f-18" />
                                    </button>
                                </div>
                            </div>
                            {/* Dropdown Content */}
                            {openId === item.id && (
                                <ul className="league-dropdown mt-2">
                                    <li>
                                        <div className="d-flex align-items-center gap-2">
                                            <label class="custom-checkbox">
                                                <input type="checkbox" />
                                                <span class="checkmark"></span>
                                            </label>
                                            <img src={Flag1} alt="Flag" className="img-fluid" />
                                            <span className="f-13">Europe</span>
                                        </div>
                                        <div>
                                            <FaAngleDown className="text-white f-18" />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="d-flex align-items-center gap-2">
                                            <label class="custom-checkbox">
                                                <input type="checkbox" />
                                                <span class="checkmark"></span>
                                            </label>
                                            <img src={Flag1} alt="Flag" className="img-fluid" />
                                            <span className="f-13">Europe</span>
                                        </div>
                                        <div>
                                            <FaAngleDown className="text-white f-18" />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="d-flex align-items-center gap-2">
                                            <label class="custom-checkbox">
                                                <input type="checkbox" />
                                                <span class="checkmark"></span>
                                            </label>
                                            <img src={Flag1} alt="Flag" className="img-fluid" />
                                            <span className="f-13">Europe</span>
                                        </div>
                                        <div>
                                            <FaAngleDown className="text-white f-18" />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="d-flex align-items-center gap-2">
                                            <label class="custom-checkbox">
                                                <input type="checkbox" />
                                                <span class="checkmark"></span>
                                            </label>
                                            <img src={Flag1} alt="Flag" className="img-fluid" />
                                            <span className="f-13">Europe</span>
                                        </div>
                                        <div>
                                            <FaAngleDown className="text-white f-18" />
                                        </div>
                                    </li>
                                </ul>
                            )}
                        </List.Item>
                    )}
                />
            </div>
        </div>
    )
}

export default SideBarMenu
