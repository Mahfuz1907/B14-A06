import React from 'react';
import './Plan.css'
import PPF from '@/Components/PlanPageFunction/PPF';
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: "My Plan | FitLog",
  icons: {
    icon: '/assets/logo.ico'
  }
};

const MyPlan = () => {
    return (
        <div className='mx-5 md:mx-20 mb-16 mt-10'>
            <PPF />
        </div>
    );
};

export default MyPlan;