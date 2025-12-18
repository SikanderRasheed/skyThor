import React from 'react';
import { Tabs } from 'antd';

const CustomTabs = ({ items, onChange, className }) => {
    return (
        <section className='tabs_sec px-3 py-2' id='tabs'>
            <Tabs
                defaultActiveKey="top"
                items={items}
                onChange={onChange}
                className={className}
            />
        </section>
    );
};

export default CustomTabs;