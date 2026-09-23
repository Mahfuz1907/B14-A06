import Image from 'next/image';
import React from 'react';
import logo from '@/public/assets/logo.png'

const Footer = () => {
    return (
        <div className='border border-[#1a1d24] bg-[#090a0d] px-5 md:px-20 py-10 flex flex-row justify-between items-center'>
            <div className='flex flex-row justify-between items-center gap-1'>
                <Image src={logo} alt='logo' />
                <button className='text-white font-oswald text-sm font-bold'>FITLOG</button>
            </div>
            <p className='text-[#6b7280] text-xs font-normal'>© 2026 FitLog — Workout Library. Train hard, log honest.</p>
        </div>
    );
};

export default Footer;