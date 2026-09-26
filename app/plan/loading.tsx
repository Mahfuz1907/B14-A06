import React from 'react';

export default function Loading() {
    return (
        <div className="min-h-[60vh] w-full flex flex-col justify-center items-center gap-4">
            <div className="w-12 h-12 border-4 border-[#232732] border-t-[#ccff00] rounded-full animate-spin"></div>
            <p className="text-white font-inter text-base font-medium animate-pulse">
                Loading workouts…
            </p>
        </div>
    );
}