import React from 'react';

const PlanStat = () => {
    return (
        <div className='flex flex-row justify-start items-center w-full rounded-2xl p-6 bg-[#13161d] border border-[#232732]'>
            <div className='flex flex-col justify-between items-start w-full'>
                <p className='text-[#8a92a0] font-inter text-xs font-normal'>Exercises</p>
                <h1 className='text-[#ccff00] font-oswald text-4xl font-bold'>0</h1>
            </div>
            <div className='flex flex-col justify-between items-start border border-[#23273299] w-full px-8'>
                <p className='text-[#8a92a0] font-inter text-xs font-normal'>Minutes</p>
                <h1 className='text-white font-oswald text-4xl font-bold'>0</h1>
            </div>
            <div className='flex flex-col justify-between items-start border border-[#23273299] w-full px-8'>
                <p className='text-[#8a92a0] font-inter text-xs font-normal'>Calories</p>
                <h1 className='text-white font-oswald text-4xl font-bold'>0</h1>
            </div>
        </div>
    );
};

export default PlanStat;