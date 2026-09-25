import React from 'react';
import './Plan.css'

const Tab = () => {
    return (
        <div className='flex flex-row justify-between items-end sm:items-center w-full'>
            <div role="tablist" className="tabs tabs-box bg-[#151921] border-[#232732] rounded-xl">
                <a role="tab" className="tab font-inter">Today&apos;s Plan</a>
                <a role="tab" className="tab tab-active font-inter">Saved</a>
            </div>
            <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0 w-30 sm:w-60'>
                <h1 className='text-[#8a92a0] font-inter font-normal text-xs w-20'>Sort By</h1>
                <select defaultValue="Pick a color" 
                className="select bg-[#13161d] border border-[#232732] rounded-[9px] 
                px-2.5 text-white font-inter text-xs font-normal">
                    <option disabled={true}>Pick a color</option>
                    <option>Duration</option>
                    <option>Calories</option>
                    <option>Rating</option>
                </select>
            </div>
        </div>
    );
};

export default Tab;