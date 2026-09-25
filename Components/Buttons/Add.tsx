'use client'

import React, { useContext } from 'react';
import './button.css'
import { SlCalender } from "react-icons/sl";
import { WorkoutTypesPromises } from '@/type';
import { WorkContext } from '@/Context/WorkContext';
import { toast } from 'react-toastify';

export interface AddWorkType{
    work: WorkoutTypesPromises
}

const Add = ({work}: AddWorkType) => {
    const {planToday, setPlanToday} = useContext(WorkContext)

    const handleAddButton = () => {
        const inAlready = planToday.some((item) => Number(item.id) === Number(work.id))

        if(!inAlready){
            setPlanToday([...planToday, work])
            toast.success(`Added ${work.name} to today's plan`)
        }else{
            toast.error(`${work.name} is already in the plan`)
        }
    }


    return (
            <button onClick={() => handleAddButton()} className='add-button font-inter'><SlCalender />Add to today&apos;s plan</button>
    );
};

export default Add;