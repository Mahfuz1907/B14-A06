import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <div className="min-h-screen bg-[#0d0f12] flex flex-col justify-center items-center px-4 text-center">
            <h1 className="text-[#ccff00] font-oswald text-8xl font-bold tracking-wider mb-2">404</h1>
            <h2 className="text-white font-oswald text-2xl font-semibold mb-3 uppercase">Page Not Found</h2>
            <p className="text-[#8a92a0] font-inter text-sm max-w-md mb-8">
                The workout route or page you are looking for doesn&apos;t exist or has been moved.
            </p>
            <Link 
                href={'/'}
                className="bg-[#c2f10d] hover:bg-[#abd503] text-black font-inter font-semibold py-3 px-8 rounded-full transition-colors duration-200"
            >
                Back to Workouts
            </Link>
        </div>
    );
}


export default NotFound;