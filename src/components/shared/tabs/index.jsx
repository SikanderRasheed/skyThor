// import React from 'react';
// import { Input, Tabs } from 'antd';
// import { SearchOutlined } from '@ant-design/icons';

// const CustomTabs = ({ items, onChange, className }) => {
//     return (
//         <section className='tabs_sec px-3 py-2' id='tabs'>
//             <Tabs
//                 defaultActiveKey="top"
//                 items={items}
//                 onChange={onChange}
//                 className={className}
//                 tabBarExtraContent={{
//                     right: (
//                         <>
//                             <SearchOutlined
//                                 style={{
//                                     fontSize: '20px',
//                                     color: '#fff',
//                                     cursor: 'pointer'
//                                 }}
//                                 onClick={() => console.log('Search clicked')}
//                             />
//                             <Input
//                                 placeholder="Search..."
//                                 prefix={<SearchOutlined />}
//                                 style={{ width: 200 }}
//                             />
//                         </>
//                     ),
//                 }}
//             />
//         </section>
//     );
// };

// export default CustomTabs;

import React, { useState } from 'react';
import { Tabs, Input } from 'antd';
import { SearchOutlined, CloseOutlined } from '@ant-design/icons';

const CustomTabs = ({ items, onChange, className }) => {
    const [showSearch, setShowSearch] = useState(false);

    return (
        <section className='tabs_sec px-3 py-2' id='tabs'>
            <Tabs
                defaultActiveKey="top"
                items={items}
                onChange={onChange}
                className={className}
                tabBarExtraContent={{
                    right: (
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            {!showSearch ? (
                                <SearchOutlined
                                    style={{
                                        fontSize: '20px',
                                        color: '#fff',
                                        cursor: 'pointer'
                                    }}
                                    onClick={() => setShowSearch(true)}
                                />
                            ) : (
                                <Input
                                    autoFocus
                                    placeholder="Search..."
                                    style={{ width: 200 }}
                                    suffix={
                                        <CloseOutlined
                                            style={{ cursor: 'pointer' }}
                                            onClick={() => setShowSearch(false)}
                                        />
                                    }
                                />
                            )}
                        </div>
                    ),
                }}
            />
        </section>
    );
};

export default CustomTabs;
