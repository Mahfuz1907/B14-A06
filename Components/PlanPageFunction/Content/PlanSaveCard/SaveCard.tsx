import { WorkoutTypesPromises } from '@/type';
import Image from 'next/image';
import React, { useContext } from 'react';
import { FaRegClock } from "react-icons/fa";
import { IoMdFlame } from "react-icons/io";
import { FaRegStar } from "react-icons/fa";
import { HiXMark } from "react-icons/hi2";
import Link from 'next/link';
import { WorkContext } from '@/Context/WorkContext';

export interface SaveCardType{
    save: WorkoutTypesPromises
}

const SaveCard = ({save}: SaveCardType) => {
    const {saveLater, setSaveLater} = useContext(WorkContext)

    const handleRemove = (item:WorkoutTypesPromises) => {
        const newArray = saveLater.filter((save) => save.id !== item.id)
        setSaveLater(newArray)
    }
    return (
        <div className='p-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-3 md:gap-0 w-full'>
                    <div className='flex flex-row justify-start items-start gap-4'>
                        <div className='relative h-22 overflow-hidden shrink-0 rounded-xl aspect-video'>
                            <Image 
                            src={save.image} 
                            alt={save.name} 
                            fill
                            sizes="(max-width: 144px) 100vw, (max-width: 1200px) 50vw, 50vw"
                            className='object-cover'
                            priority
                            />
                        </div>
                        <div className='flex flex-col justify-between items-start gap-2'>
                            <h1 className='text-white font-oswald text-base font-bold'>{save.name}</h1>
                            <p className='text-[#8a92a0] font-inter text-xs font-semibold'>{save.equipment}</p>
                            <div className='flex flex-row justify-between items-start gap-3'>
                                <button className='text-[#d1d5db] font-inter text-xs font-normal flex flex-row justify-between items-center gap-0.5'><FaRegClock className='text-[#ccff00]' />{save.duration} min</button>
                                <button className='text-[#d1d5db] font-inter text-xs font-normal flex flex-row justify-between items-center gap-0.5'><IoMdFlame className='text-[#ccff00]' />{save.caloriesBurned} kcal</button>
                                <button className='text-[#d1d5db] font-inter text-xs font-normal flex flex-row justify-between items-center gap-0.5'><FaRegStar className='text-[#ccff00]' />{save.rating}</button>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-row justify-end items-center gap-4'>
                        <Link href={`/${save.id}`} className='view-details font-inter'>View Details</Link>
                        <button onClick={() => handleRemove(save)} className='cross-mark'><HiXMark /></button>
                    </div>
                </div>
    );
};

export default SaveCard;