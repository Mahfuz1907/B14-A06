'use client'

import { WorkContext } from '@/Context/WorkContext';
import React, { useContext } from 'react';
import { IoSearchOutline } from 'react-icons/io5';

const SearchInput = () => {
    const {searchQuery, setSearchQuery} = useContext(WorkContext)
    return (
        <div className="relative w-full max-w-xs">
            <IoSearchOutline className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8a92a0] text-sm" />
            <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by name, equipment, or muscle groups..."
                className="w-full bg-[#13161d] border border-[#232732] rounded-[9px] 
                pl-8 pr-3 py-1.5 text-white font-inter text-xs placeholder-[#8a92a0] 
                focus:outline-none focus:border-[#ccff00]"
            />
        </div>
    );
};

export default SearchInput;