import { Tabs, List } from "antd";
import { useState } from "react";
import { FaAngleDown, FaFutbol, FaMinus } from "react-icons/fa";
// Images
import Flag1 from "../../assets/images/icons/flag1.svg"

const leagues = [
    {
        link: "#",
        text: "UEFA Champions League"
    },
    {
        link: "#",
        text: "UEFA Europa League"
    },
    {
        link: "#",
        text: "Copa Libertadores"
    },
    {
        link: "#",
        text: "Premier League"
    },
    {
        link: "#",
        text: "LaLiga"
    },
    {
        link: "#",
        text: "Serie A"
    },
    {
        link: "#",
        text: "Coppa Italia"
    },
    {
        link: "#",
        text: "Bundesliga"
    },
    {
        link: "#",
        text: "Ligue 1"
    },
    {
        link: "#",
        text: "Coupe de France"
    },
    {
        link: "#",
        text: "Superliga"
    },
    {
        link: "#",
        text: "Euroleague"
    }
];

const LeagueTabs = () => {
    const [activeTab, setActiveTab] = useState("1");
    const [open, setOpen] = useState(false);
    const [openId, setOpenId] = useState(null);

    const handleToggle = (id) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <div className="league_tabs w-100 mt-2">

            {/* HEADER TABS (ALWAYS VISIBLE) */}
            <div className="tabs-header">
                <Tabs
                    activeKey={activeTab}
                    onChange={(key) => setActiveTab(key)}
                    items={[
                        { key: "1", label: "TOP LEAGUES" },
                        { key: "2", label: "MY LEAGUES 0" },
                    ]}
                />

                {/* DROPDOWN ICON */}
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

            {/* DROPDOWN CONTENT */}
            {open && (
                <div className="dropdown-content">
                    {activeTab === "1" && (
                        <List
                            dataSource={leagues}
                            rowKey="id"
                            renderItem={(item, index) => (
                                <List.Item className="league-item" key={index}>
                                    <a href={item.link} className="text-white d-flex align-items-center gap-2 w-100">
                                        <FaFutbol className="f-20 text-white" />
                                        <span className="f-15 f500 d-block">{item.text}</span>
                                    </a>
                                </List.Item>
                            )}
                        />
                    )}

                    {activeTab === "2" && (
                        <div className="text-white f-18 text-center">
                            No leagues added
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default LeagueTabs;

