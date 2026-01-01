import { List } from "antd";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

const leagues = [
    {
        text: "Decimal (2.00)",
    },
];

const Format = () => {
    const [openId, setOpenId] = useState(null);

    const handleToggle = (id) => {
        setOpenId(openId === id ? null : id);
    };
    return (
        <div className='menu_wrapper mt-2'>
            <div className="txt">
                <h4 className='text-white f-16 f600 mb-0'>Odds format</h4>
            </div>
            <div className="pt-2 pb-2 px-2">
                <List
                    dataSource={leagues}
                    rowKey="id"
                    renderItem={(item, index) => (
                        <List.Item className="league-item pb-0" key={index}>
                            <div className="d-flex align-items-center justify-content-between w-100 pt-0 px-2 pb-2">
                                <div>
                                    <span className="f-15 f500">{item.text}</span>
                                </div>
                                <div>
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
                                    <li className='format_list'>
                                        <span className="f-13">American (+100)</span>
                                    </li>
                                    <li className='format_list'>
                                        <span className="f-13">Fractional (1/1)</span>
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

export default Format
