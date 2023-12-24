"use client"
import React, { useState } from 'react';
import Image from 'next/image'
import Assets from './Assets'

const MiddleDash = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    return (
        <div className="w-2/3 -ml-8">
            {/* First Row */}
            <div className="col-span-2 grid grid-cols-1 gap-4 ">
                <div className="border p-4">
                    <div className="grid grid-cols-3 gap-4">
                        <div className="bg-gray-200 p-4 rounded-md">Image</div>
                        
                        <div className="bg-gray-200 p-4 rounded-md">
                            <div className="grid grid-cols-2 gap-4">
                                <div className='text-center'>Wallet Balance</div>
                            </div>
                            <div className="grid grid-cols-2 gap-4 mt-4">
                                <div className='text-center'>$12000</div>
                            </div>
                        </div>
                        <div className="bg-gray-200 p-4 rounded-md">25%</div>
                    </div>
                </div>

            </div>

            {/* Second Row */}
            <div className={`col-span-${isSidebarOpen ? '2' : '1'} grid grid-cols-1 gap-4`}>
                <div className="border p-2">
                    {/* Placeholder Image 1 */}
                    {/* Replace this with your actual image component */}
                    <Image
                        src="/assets/dashboard/dash.png"
                        alt=""
                        width="900"
                        height="300"
                    />
                </div>
            </div>

            {/* Third Row */}
            <div className={`col-span-${isSidebarOpen ? '2' : '1'} grid grid-cols-1 gap-4`}>
                <div className="border p-2">
                    
                    <Assets />
                    
                </div>
            </div>
        </div >
    )
}

export default MiddleDash