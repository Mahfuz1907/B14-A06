import { WorkoutTypesPromises } from '@/type';
import Image from 'next/image';
import React from 'react';
import { FaRegClock } from "react-icons/fa";
import { IoMdFlame } from "react-icons/io";
import { FaRegStar } from "react-icons/fa";
import '../../PlantPageFunction.css'

export interface PlanCardType{
    plan: WorkoutTypesPromises
}

const PlanCard = ({plan}: PlanCardType) => {
    return (
        <div className='p-4 flex flex-row justify-between items-center w-full'>
            <div className='flex flex-row justify-start items-start gap-4'>
                <div className='relative h-22 overflow-hidden shrink-0 rounded-xl aspect-video'>
                    <Image 
                    src={plan.image} 
                    alt={plan.name} 
                    fill
                    sizes="(max-width: 144px) 100vw, (max-width: 1200px) 50vw, 50vw"
                    className='object-cover'
                    priority
                    />
                </div>
                <div className='flex flex-col justify-between items-start gap-2'>
                    <h1 className='text-white font-oswald text-base font-bold'>{plan.name}</h1>
                    <p className='text-[#8a92a0] font-inter text-xs font-semibold'>{plan.equipment}</p>
                    <div className='flex flex-row justify-between items-start gap-3'>
                        <button className='text-[#d1d5db] font-inter text-xs font-normal flex flex-row justify-between items-center gap-0.5'><FaRegClock className='text-[#ccff00]' />{plan.duration} min</button>
                        <button className='text-[#d1d5db] font-inter text-xs font-normal flex flex-row justify-between items-center gap-0.5'><IoMdFlame className='text-[#ccff00]' />{plan.caloriesBurned} kcal</button>
                        <button className='text-[#d1d5db] font-inter text-xs font-normal flex flex-row justify-between items-center gap-0.5'><FaRegStar className='text-[#ccff00]' />{plan.rating}</button>
                    </div>
                </div>
            </div>
            <div className='flex flex-row justify-end items-center gap-4'>
                <button className='view-details font-inter'>View Details</button>
                <button className='mark-as-done font-inter'>Mark as Done</button>
            </div>
        </div>
    );
};

export default PlanCard;