'use client'

import { WorkoutTypesPromises } from '@/type';
import React, { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from 'react';

export interface WorkContextType{
    planToday: WorkoutTypesPromises[],
    setPlanToday: Dispatch<SetStateAction<WorkoutTypesPromises[]>>,
    saveLater: WorkoutTypesPromises[],
    setSaveLater: Dispatch<SetStateAction<WorkoutTypesPromises[]>>, 
    tab: string,
    setTab: Dispatch<SetStateAction<string>>,
    sortBy: string,
    setSortBy: Dispatch<SetStateAction<string>>
}

export const WorkContext = createContext<WorkContextType>({
    planToday: [],
    setPlanToday: () => {},
    saveLater: [],
    setSaveLater: () => {},
    tab: 'plan',
    setTab : () => {},
    sortBy: 'Duration',
    setSortBy: () => {}
})

const WorkProvider = ({children} : {children: ReactNode}) => {
    const [planToday, setPlanToday] = useState<WorkoutTypesPromises[]>(()=> {
        if (typeof window !== 'undefined'){
            const saved = localStorage.getItem('fitlog_planToday')
            return saved ? JSON.parse(saved) : []
        }

        return []
    })


    const [saveLater, setSaveLater] = useState<WorkoutTypesPromises[]>(()=> {
        if(typeof window !== 'undefined'){
            const saved = localStorage.getItem('fitlog_saveLater')
            return saved ? JSON.parse(saved) : []
        }

        return []
    })

    const [tab, setTab] = useState<string>('plan')
    const [sortBy, setSortBy] = useState<string>('Duration')

    useEffect(()=> {
        localStorage.setItem('fitlog_planToday', JSON.stringify(planToday))
    }, [planToday])

    useEffect(()=> {
        localStorage.setItem('fitlog_saveLater', JSON.stringify(saveLater))
    }, [saveLater])

    const sharedData = {
        planToday,
        setPlanToday,
        saveLater,
        setSaveLater,
        tab, 
        setTab,
        sortBy,
        setSortBy
    }
    return (
        <WorkContext.Provider 
            value={sharedData}>
            {children}
        </WorkContext.Provider>
    );
};

export default WorkProvider;