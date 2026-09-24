import { WorkoutTypesPromises } from '@/type';
import React from 'react';
import './Work.css';
import Image from 'next/image';
import { FaRegClock } from "react-icons/fa";
import { IoMdFlame } from "react-icons/io";
import { FaRegStar } from "react-icons/fa";
import Link from 'next/link';

export interface WorkoutType {
  work: WorkoutTypesPromises;
}

const Work = ({ work }: WorkoutType) => {

  return (
    <Link href={`/${work.id}`}>
        <div className='workCard'>
            <div className='relative w-full h-48 overflow-hidden rounded-t-2xl'>
                <Image 
                src={work.image} 
                alt={work.name} 
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className='object-cover'
                />
            </div>

            <div className='flex flex-col justify-between items-start gap-2 p-6'>
                <div className='flex flex-row justify-start items-center gap-2'>
                    {work.muscleGroups.map((muscle) => (
                        <button className='muscleGroupButton font-inter' key={muscle}>
                            {muscle}
                        </button>
                    ))}
                </div>
                <h1 className='text-white font-oswald text-lg font-bold'>{work.name}</h1>
                <p className='text-[#9ca3af] font-inter text-xs font-normal'>{work.equipment}</p>
                <div className='font-inter hourCalorieRating'>
                    <button className='hourCalorieRatingButton'><FaRegClock />{work.duration} min</button>
                    <button className='hourCalorieRatingButton'><IoMdFlame />{work.caloriesBurned} kcal</button>
                    <button className='hourCalorieRatingButton'><FaRegStar />{work.rating}</button>
                </div>
            </div>
        </div>
    </Link>
  );
};

export default Work;