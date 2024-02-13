import React, { useState } from 'react';

const Tabs = ({ defaultTab, tabs }) => {
    const [activeTab, setActiveTab] = useState(defaultTab);

    const handleClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div>
            <div>
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => handleClick(tab.id)}
                        style={{ fontWeight: activeTab === tab.id ? 'bold' : 'normal' }}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            <div>
                {tabs.find((tab) => tab.id === activeTab)?.content}
            </div>
        </div>
    );
};

export default Tabs;