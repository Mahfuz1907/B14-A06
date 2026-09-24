import React from 'react';
import './button.css'
import { SlCalender } from "react-icons/sl";

const Add = () => {
    return (
            <button className='add-button font-inter'><SlCalender />Add to today&apos;s plan</button>
    );
};

export default Add;