import { Tabs } from 'antd';
import React, { useState } from 'react'
// Images 
import Image1 from "../../assets/images/tabs1.png"
import Image2 from "../../assets/images/tabs2.png"

const TabsTitles = [
    { id: "1", text: "Football" },
    { id: "2", text: "BasketBall" },
    { id: "3", text: "Tennis" },
    { id: "4", text: "Ice Hockey" },
    { id: "5", text: "Table Tennis" },
    { id: "6", text: "American Football" },
    { id: "7", text: "Others" }
];

const Live = () => {
    const [activeTab, setActiveTab] = useState("1");
    return (
        <div className='live_sec mt-2'>
            <div className="live_wrapper">
                <h3 className='f-16 f600 text-white'>Live Now</h3>
                <div className="tabs">
                    <Tabs
                        activeKey={activeTab}
                        onChange={(id) => setActiveTab(id)}
                        items={TabsTitles.map(tab => ({
                            key: tab.id,
                            label: tab.text,
                        }))}
                    />

                    <div className="tabs_content">
                        {activeTab === '1' && (
                            <div>
                                <img src={Image1} alt="Image" className='img-fluid' loading="eager"/>
                            </div>
                        )}
                        {activeTab === '2' && (
                            <div>
                                <img src={Image2} alt="Image" className='img-fluid' loading="eager"/>
                            </div>
                        )}
                        {activeTab === '3' && (
                            <div>
                                <img src={Image1} alt="Image" className='img-fluid' loading="eager"/>
                            </div>
                        )}
                        {activeTab === '4' && (
                            <div>
                                <img src={Image2} alt="Image" className='img-fluid' loading="eager"/>
                            </div>
                        )}
                        {activeTab === '5' && (
                            <div>
                                <img src={Image1} alt="Image" className='img-fluid' loading="eager"/>
                            </div>
                        )}
                        {activeTab === '6' && (
                            <div>
                                <img src={Image2} alt="Image" className='img-fluid' loading="eager"/>
                            </div>
                        )}
                        {activeTab === '7' && (
                            <div>
                                <img src={Image1} alt="Image" className='img-fluid' loading="eager"/>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Live
