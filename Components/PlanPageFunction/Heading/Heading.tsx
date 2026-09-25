import React from 'react';

const Heading = () => {
    return (
        <div className='flex flex-col justify-between items-start gap-2'>
            <h1 className='text-white font-oswald text-3xl font-bold'>MY PLAN</h1>
            <p className='text-[#8a92a0] font-inter text-sm font-normal'>Cap of five lifts for today. Finish them, then load more.</p>
        </div>
    );
};

export default Heading;