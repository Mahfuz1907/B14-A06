import { WorkoutTypesPromises } from '@/type';
import Image from 'next/image';
import React, { useContext } from 'react';
import { FaRegClock } from "react-icons/fa";
import { IoMdFlame } from "react-icons/io";
import { FaRegStar } from "react-icons/fa";
import '../../PlantPageFunction.css'
import { HiXMark } from "react-icons/hi2";
import Link from 'next/link';
import { WorkContext } from '@/Context/WorkContext';
import { toast } from 'react-toastify';

export interface PlanCardType{
    plan: WorkoutTypesPromises
}

const PlanCard = ({plan}: PlanCardType) => {
    const {planToday, setPlanToday} = useContext(WorkContext)

    const handleDone = (item:WorkoutTypesPromises) => {
        const newArray = planToday.filter((plan) => plan.id !== item.id)
        setPlanToday(newArray)
        toast.success(`${item.name} is done and removed successfully`)
    }

    const handleRemove = (item:WorkoutTypesPromises) => {
        const newArray = planToday.filter((plan) => plan.id !== item.id)
        setPlanToday(newArray)
        toast.success(`${item.name} is removed successfully`)
    }
    return (
        <div className='p-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-3 md:gap-0 w-full'>
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
                <Link  href={`/${plan.id}`} className='view-details font-inter'>View Details</Link>
                <button onClick={() => handleDone(plan)} className='mark-as-done font-inter'>Mark as Done</button>
                <button onClick={() => handleRemove(plan)} className='cross-mark'><HiXMark className='text-white' /></button>
            </div>
        </div>
    );
};

export default PlanCard;