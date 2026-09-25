import React from 'react';
import PlanStat from './PlanStat';
import './Plan.css'
import Tab from './Tab';
import Content from './Content';

const MyPlan = () => {
    return (
        <div className='mx-5 md:mx-20 mb-16 mt-10 flex flex-col justify-between items-start gap-6'>
            <div className='flex flex-col justify-between items-start gap-6 w-full'>
                <div className='flex flex-col justify-between items-start gap-2'>
                    <h1 className='text-white font-oswald text-3xl font-bold'>MY PLAN</h1>
                    <p className='text-[#8a92a0] font-inter text-sm font-normal'>Cap of five lifts for today. Finish them, then load more.</p>
                </div>
                <PlanStat />
            </div>
            <div className='flex flex-col justify-between items-start gap-6 w-full'>
                <Tab />
                <Content />
            </div>
        </div>
    );
};

export default MyPlan;