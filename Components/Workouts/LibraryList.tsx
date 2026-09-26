'use client'

import { WorkoutTypesPromises } from '@/type';
import React, { useContext } from 'react';
import { WorkContext } from '@/Context/WorkContext';
import SearchInput from '@/Components/Search/SearchInput';
import Work from './Work';

interface LibraryListProps {
    workouts: WorkoutTypesPromises[];
}

const LibraryList = ({ workouts }: LibraryListProps) => {
    const { searchQuery } = useContext(WorkContext);

    const filteredWorkouts = workouts.filter((work) => {
        const query = searchQuery.toLowerCase().trim();
        if (!query) return true;

        const nameMatch = work.name?.toLowerCase().includes(query);
        const equipmentMatch = work.equipment?.toLowerCase().includes(query);
        const muscleMatch = work.muscleGroups?.some((m) => m.toLowerCase().includes(query));

        return nameMatch || equipmentMatch || muscleMatch;
    });

    return (
        <div className='flex flex-col gap-6 w-full'>
            <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 w-full'>
                <div className='flex flex-col gap-1'>
                    <h1 className='text-white font-oswald text-3xl font-bold'>THE LIBRARY</h1>
                    <p className='text-[#9ca3af] font-inter text-sm font-normal'>
                        Twelve lifts covering every major muscle group.
                    </p>
                </div>
                <SearchInput />
            </div>

            {filteredWorkouts.length === 0 ? (
                <div className='py-16 text-center text-[#8a92a0] font-inter text-sm border border-dashed border-[#ffffff1a] rounded-xl w-full'>
                    No workouts in the library match &quot;{searchQuery}&quot;
                </div>
            ) : (
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-between items-start w-full gap-6'>
                    {filteredWorkouts.map((work) => (
                        <Work key={work.id} work={work} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default LibraryList;