import { WorkoutTypesPromises } from '@/type';
import React from 'react';
import Work from './Work';

const Workouts = async() => {
    const workoutPromise = await fetch('https://api.abcz.workers.dev/api/fitlog')
    const data = await workoutPromise.json()
    
    return (
        <div className='flex flex-col justify-between items-start gap-3 mx-20 mb-16'>
            <div className='flex flex-col justify-between items-start gap-1'>
                <h1 className='text-white font-oswald text-3xl font-bold'>THE LIBRARY</h1>
                <p className='text-[#9ca3af] font-inter text-sm font-normal'>Twelve lifts covering every major muscle group.</p>
            </div>
            <div className='grid grid-cols-3 justify-between items-start w-full gap-6'>
                {
                    data.map((work:WorkoutTypesPromises) => <Work key={work.id} work={work} ></Work>)
                }
            </div>
        </div>
    );
};

export default Workouts;