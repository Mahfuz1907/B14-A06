import { WorkContext } from '@/Context/WorkContext';
import React, { useContext } from 'react';

const StatSave = () => {
    const {saveLater} = useContext(WorkContext)
    const minutes = saveLater.reduce((total, current) => total + current.duration, 0)
    const calories = saveLater.reduce((total, current) => total + current.caloriesBurned, 0)
    return (
        <div className='flex flex-col sm:flex-row justify-start items-center gap-5 sm:gap-0 w-full rounded-2xl p-6 bg-[#13161d] border border-[#232732]'>
            <div className='flex flex-col justify-between items-start w-full'>
                <h1 className='text-[#8a92a0] font-inter text-xs font-normal'>Exercises</h1>
                <p className='text-[#ccff00] font-oswald text-4xl font-bold'>{saveLater.length}</p>
            </div>
            <div className='flex flex-col justify-between items-start sm:border border-[#23273299] w-full sm:px-8'>
                <h1 className='text-[#8a92a0] font-inter text-xs font-normal'>Minutes</h1>
                <p className='text-white font-oswald text-4xl font-bold'>{minutes}</p>
            </div>
            <div className='flex flex-col justify-between items-start sm:border border-[#23273299] w-full sm:px-8'>
                <h1 className='text-[#8a92a0] font-inter text-xs font-normal'>Calories</h1>
                <p className='text-white font-oswald text-4xl font-bold'>{calories}</p>
            </div>
        </div>
    );
};

export default StatSave;