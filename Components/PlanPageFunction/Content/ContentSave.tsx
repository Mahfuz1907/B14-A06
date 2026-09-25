'use client'

import { WorkContext } from '@/Context/WorkContext';
import Link from 'next/link';
import React, { useContext } from 'react';

const ContentSave = () => {
    const {saveLater} = useContext(WorkContext)
    return saveLater.length === 0 ? (
        <div className='py-24 px-4 border bg-[#11131780] border-dashed border-[#ffffff1a] rounded-xl w-full flex flex-col justify-center items-center gap-6'>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='text-white font-oswald text-xl font-bold'>NOTHING HERE YET</h1>
                <p className='text-[#a1a1aa] font-inter text-xs font-normal'>Browse the library and add a lift to get today moving.</p>
            </div>
            <Link href={'/'} className='bg-[#c2f10d] hover:bg-[#abd503] py-2.5 px-6 rounded-[9999px] text-black font-inter font-medium text-base cursor-pointer'>Go to workouts</Link>
        </div>
    ) : (
        <div className='text-white'>abc</div>
    );
};

export default ContentSave;