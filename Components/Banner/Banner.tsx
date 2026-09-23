import Image from 'next/image';
import React from 'react';
import banner from '@/public/assets/banner.png'
import './Banner.css'

const Banner = () => {
    return (
        <div className='mx-5 md:mx-20 mb-16 p-14 flex flex-col-reverse md:flex-row justify-between items-center gap-5 md:gap-57 bg-[#15171d] border border-[#222630] rounded-2xl'>
            <div className='flex flex-col justify-between items-center md:items-start gap-5'>
                <h4 className='font-inter text-[#c2f800] text-[11px] font-bold'>WORKOUT LIBRARY</h4>
                <h1 className='font-oswald text-6xl font-bold text-white text-center md:text-start'>TRAIN WITH INTENT. LOG EVERY SET.</h1>
                <p className='text-[#9ca3af] font-inter text-base font-normal text-center md:text-start'>FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today&apos;s plan, 
                    and watch the week&apos;s work add up.</p>
                <button className='browseButton font-inter'>BROWSE WORKOUTS</button>
            </div>
            <Image src={banner} alt='banner' />
        </div>
    );
};

export default Banner;