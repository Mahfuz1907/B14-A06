'use client'

import React, { useContext } from 'react';
import Heading from './Heading/Heading';
import StatAdd from './Stat/StatAdd';
import Tab from './Tab/Tab';
import ContentAdd from './Content/ContentAdd';
import { WorkContext } from '@/Context/WorkContext';
import StatSave from './Stat/StatSave';
import ContentSave from './Content/ContentSave';

const PPF = () => {
    const {tab} = useContext(WorkContext)
    return (
        <div className='w-full flex flex-col justify-between items-start gap-8'>
            <div className='flex flex-col justify-between items-start gap-6 w-full'>
                <Heading />
                {
                    tab === 'plan' ? <StatAdd /> : <StatSave />
                }
            </div>
            <div className='flex flex-col justify-between items-start gap-6 w-full'>
                <Tab />
                {
                    tab === 'plan' ? <ContentAdd /> : <ContentSave />
                }
            </div>
        </div>
    );
};

export default PPF;