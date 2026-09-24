import { WorkoutTypesPromises } from '@/type';
import Image from 'next/image';
import React from 'react';
import './workDetails.css'

export interface WorkoutDetailsPageTypes{
    params: Promise<{
        id: string
    }>
}

const getWorkout = async(id:string) => {
    const response = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`)
    const data = await response.json()
    return data
}

const WorkoutDetailsPage = async({params}:WorkoutDetailsPageTypes) => {
    const {id} = await params
    console.log("RECEIVED ID IN PAGE:", id);
    
    const work = await getWorkout(id)


    if (!work) {
        return (
            <div className='flex items-center justify-center min-h-screen bg-[#15171d]'>
                <h1 className='text-white text-2xl font-inter'>Workout not found</h1>
            </div>
        );
    }

    
    return (
        <div className='mx-20 mb-16 flex flex-row justify-between items-start gap-5'>
            <div className='relative w-full h-auto overflow-hidden rounded-2xl'>
                <Image 
                src={work.image} 
                alt={work.name} 
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className='object-cover'
                />
            </div>
            <div className='flex flex-col justify-between items-start gap-3'>
                <div className='flex flex-col justify-between items-start gap-2'>
                    <h1 className='text-white font-oswald text-4xl font-bold'>{work.name}</h1>
                    <p className='text-[#9ca3af] font-inter text-base font-normal'>A compound press that builds chest thickness, triceps, and pressing power from a stable bench.</p>
                    <div className='flex flex-row justify-start items-center gap-3'>
                        {
                            work.muscleGroups.map((muscle:string) => <button className='font-inter muscleButton' key={muscle}>{muscle}</button>)
                        }
                    </div>
                </div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default WorkoutDetailsPage;