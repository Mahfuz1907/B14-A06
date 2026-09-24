import React from 'react';
import './Plan.css'

const Tab = () => {
    return (
        <div role="tablist" className="tabs tabs-box bg-[#151921] border-[#232732] rounded-xl">
            <a role="tab" className="tab font-inter">Today&apos;s Plan</a>
            <a role="tab" className="tab tab-active font-inter">Saved</a>
        </div>
    );
};

export default Tab;