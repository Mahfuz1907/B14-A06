import React from 'react';
import './Navbar.css'
import Image from 'next/image';
import logo from '@/public/assets/logo.png'

const Navbar = () => {
    return (
        <div className='flex flex-row justify-between items-center px-20 py-4 border-b border-[#1c1f26]'>
            <div className='flex flex-row justify-between items-center gap-1'>
                <Image src={logo} alt='logo' />
                <button className='text-white font-oswald text-lg font-bold'>FITLOG</button>
            </div>
            <div className='flex flex-row justify-center items-center gap-2 font-inter'>
                <button className='active'>Workouts</button>
                <button className='inActive'>My Plan</button>
            </div>
            <div className='flex flex-row justify-between items-center gap-2 font-inter'>
                <button className='planSave planButton'>Plan <span className='planSpan'>0</span></button>
                <button className='planSave saveButton'>Saved <span className='saveSpan'>0</span></button>
            </div>
        </div>
    );
};

export default Navbar;