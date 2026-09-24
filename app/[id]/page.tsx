import Image from 'next/image';
import React from 'react';
import './workDetails.css'
import Add from '@/Components/Buttons/Add';
import Save from '@/Components/Buttons/Save';

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


export async function generateMetadata({params}:WorkoutDetailsPageTypes) {
    const {id} = await params
    const work = await getWorkout(id)

    if (!work) {
        return {
            title: 'Workout Not Found | FitLog',
            icons: {
                icon: '/assets/logo.ico'
            }
        };
    }

    return {
        title: `${work.name} | FitLog`,
        icons: {
                icon: '/assets/logo.ico'
            }
    }
}

const WorkoutDetailsPage = async({params}:WorkoutDetailsPageTypes) => {
    const {id} = await params
    const work = await getWorkout(id)


    if (!work) {
        return (
            <div className='flex items-center justify-center min-h-screen bg-[#15171d]'>
                <h1 className='text-white text-2xl font-inter'>Workout not found</h1>
            </div>
        );
    }

    
    return (
        <div className='mx-20 mt-10 mb-16 flex flex-row justify-between items-start gap-20'>
            <div className='relative w-1/2 h-200 aspect-video overflow-hidden rounded-2xl shrink-0'>
                <Image 
                    src={work.image} 
                    alt={work.name} 
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                    className='object-cover'
                    priority
                />
            </div>
            <div className='flex flex-col justify-between items-start gap-5'>
                <div className='flex flex-col justify-between items-start gap-2'>
                    <h1 className='text-white font-oswald text-4xl font-bold'>{work.name}</h1>
                    <p className='text-[#9ca3af] font-inter text-base font-normal'>{work.description}</p>
                    <div className='flex flex-row justify-start items-center gap-3'>
                        {
                            work.muscleGroups.map((muscle:string) => <button className='font-inter muscleButton' key={muscle}>{muscle}</button>)
                        }
                    </div>
                </div>
                <div className="w-full flex flex-col gap-0 rounded-2xl border border-[#232834] bg-[#151922]">
                    <div className='flex rounded-t-2xl flex-row justify-between items-center px-6 py-3.5 border-b border-b-[#232834]'>
                        <h4 className='text-[#9ca3af] font-inter text-xs font-bold'>Equipment</h4>
                        <h4 className='text-[#e5e7eb] font-inter text-sm font-medium'>{work.equipment}</h4>
                    </div>
                    <div className='flex flex-row justify-between items-center px-6 py-3.5 border-b border-b-[#232834]'>
                        <h4 className='text-[#9ca3af] font-inter text-xs font-bold'>Difficulty</h4>
                        <h4 className='text-[#e5e7eb] font-inter text-sm font-medium'>{work.difficulty}</h4>
                    </div>
                    <div className='flex flex-row justify-between items-center px-6 py-3.5 border-b border-b-[#232834]'>
                        <h4 className='text-[#9ca3af] font-inter text-xs font-bold'>Sets</h4>
                        <h4 className='text-[#e5e7eb] font-inter text-sm font-medium'>{work.sets}</h4>
                    </div>
                    <div className='flex flex-row justify-between items-center px-6 py-3.5 border-b border-b-[#232834]'>
                        <h4 className='text-[#9ca3af] font-inter text-xs font-bold'>Reps</h4>
                        <h4 className='text-[#e5e7eb] font-inter text-sm font-medium'>{work.reps}</h4>
                    </div>
                    <div className='flex flex-row justify-between items-center px-6 py-3.5 border-b border-b-[#232834]'>
                        <h4 className='text-[#9ca3af] font-inter text-xs font-bold'>Duration</h4>
                        <h4 className='text-[#e5e7eb] font-inter text-sm font-medium'>{work.duration} min</h4>
                    </div>
                    <div className='flex flex-row justify-between items-center px-6 py-3.5 border-b border-b-[#232834]'>
                        <h4 className='text-[#9ca3af] font-inter text-xs font-bold'>Calories</h4>
                        <h4 className='text-[#e5e7eb] font-inter text-sm font-medium'>{work.caloriesBurned} kcal</h4>
                    </div>
                    <div className='flex rounded-b-2xl flex-row justify-between items-center px-6 py-3.5'>
                        <h4 className='text-[#9ca3af] font-inter text-xs font-bold'>Rating</h4>
                        <h4 className='text-[#e5e7eb] font-inter text-sm font-medium'>{work.rating}</h4>
                    </div>
                </div>
                <div className='flex flex-col justify-between items-start gap-4'>
                    <h1 className='text-white font-inter text-base font-extrabold'>INSTRUCTIONS</h1>
                    <ol className='list-decimal list-inside flex flex-col justify-between items-start gap-3 text-[#d1d5db] font-inter text-sm font-normal'>
                        {
                            work.instructions.map((inst:string)=> <li key={inst}>{inst}</li>)
                        }
                    </ol>
                </div>
                <div className='flex flex-row justify-start items-center gap-4'>
                    <Add />
                    <Save />
                </div>
            </div>
        </div>
    );
};

export default WorkoutDetailsPage;