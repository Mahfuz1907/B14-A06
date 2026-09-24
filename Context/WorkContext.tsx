'use client'

import { WorkoutTypesPromises } from '@/type';
import React, { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react';

export interface WorkContextType{
    planToday: WorkoutTypesPromises[],
    setPlanToday: Dispatch<SetStateAction<WorkoutTypesPromises[]>>,
    saveLater: WorkoutTypesPromises[],
    setSaveLater: Dispatch<SetStateAction<WorkoutTypesPromises[]>>
}

export const WorkContext = createContext<WorkContextType>({
    planToday: [],
    setPlanToday: () => {},
    saveLater: [],
    setSaveLater: () => {}
})

const WorkProvider = ({children} : {children: ReactNode}) => {
    const [planToday, setPlanToday] = useState<WorkoutTypesPromises[]>([])
    const [saveLater, setSaveLater] = useState<WorkoutTypesPromises[]>([])

    const sharedData = {
        planToday,
        setPlanToday,
        saveLater,
        setSaveLater
    }
    return (
        <WorkContext.Provider value={sharedData}>{children}</WorkContext.Provider>
    );
};

export default WorkProvider;