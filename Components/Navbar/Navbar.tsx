import React from 'react';
import './Navbar.css'


const Navbar = () => {
    return (
        <div className='sticky top-0 z-50 mb-6 flex flex-row justify-between items-center px-5 md:px-20 py-4 border border-[#1c1f26]'>
            <button className='text-white font-oswald text-lg font-bold cursor-pointer'>FITLOG</button>
            <div className='flex flex-row justify-center items-center gap-0 md:gap-2 font-inter'>
                <button className='active'>Workouts</button>
                <button className='inActive'>My Plan</button>
            </div>
            <div className='flex flex-row justify-between items-center gap-0 md:gap-2 font-inter'>
                <button className='planSave planButton'>Plan <span className='planSpan'>0</span></button>
                <button className='planSave saveButton'>Saved <span className='saveSpan'>0</span></button>
            </div>
        </div>
    );
};

export default Navbar;