'use client'

import { WorkContext } from '@/Context/WorkContext';
import { WorkoutTypesPromises } from '@/type';
import React, { useContext } from 'react';
import { CiBookmark } from "react-icons/ci";
import { toast } from 'react-toastify';

export interface SaveWorkType{
    work: WorkoutTypesPromises
}

const Save = ({work}: SaveWorkType) => {
    const {saveLater, setSaveLater} = useContext(WorkContext)

    const handleSaveButton = () => {
        const inAlready = saveLater.some((item) => Number(item.id) === Number(work.id))

        if(!inAlready){
            setSaveLater([...saveLater, work])
            toast.success(`Saved ${work.name} for later`)
        }else{
            toast.error(`${work.name} is already saved for later`)
        }
    }


    return (
        <button onClick={() => handleSaveButton()} className='save-button'><CiBookmark />Save for later</button>
    );
};

export default Save;