'use client'
import { usePathname } from 'next/navigation';

import React, { useContext } from 'react';
import './Navbar.css'
import Link from 'next/link';
import { WorkContext } from '@/Context/WorkContext';


const Navbar = () => {
    const pathname = usePathname()
    const {planToday, saveLater} = useContext(WorkContext)

    const fixStyle = (path:string) => {
        const isActive = pathname === path

        return isActive ? 'active' : 'inActive'
    }
    return (
        <div className='sticky top-0 z-50 mb-6 bg-[#090a0d] flex flex-row justify-between items-center px-5 md:px-20 py-4 border border-[#1c1f26]'>
            <Link href={'/'} className='text-white font-oswald text-lg font-bold cursor-pointer'>FITLOG</Link>
            <div className='flex flex-row justify-center items-center gap-0 md:gap-2 font-inter'>
                <Link href={'/'} className={fixStyle('/')}>Workouts</Link>
                <Link href={'/plan'} className={fixStyle('/plan')}>My Plan</Link>
            </div>
            <div className='flex flex-row justify-between items-center gap-0 md:gap-2 font-inter'>
                <Link href={'/plan'} className='planSave planButton'>Plan <span className='planSpan'>{planToday.length}</span></Link>
                <Link href={'/plan'} className='planSave saveButton'>Saved <span className='saveSpan'>{saveLater.length}</span></Link>
            </div>
        </div>
    );
};

export default Navbar;