"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Bars3Icon } from '@heroicons/react/24/solid';
import { XIcon } from 'lucide-react';
import { RxSketchLogo, RxDashboard, RxPerson } from 'react-icons/rx';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { FiSettings } from 'react-icons/fi';


const LeftDash = ({}) => {
    // const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    // const toggleSidebar = () => {
    //     setIsSidebarOpen(!isSidebarOpen);
    // };

    return (
        <div className='flex'>
            <div className='fixed w-30 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between'>
                <div className='flex flex-col items-center '>
                    <Link href='/Dashboard'>
                        <div className='bg-gray-100 hover:bg-gray-500 p-3 inline-flex items-center rounded-lg space-x-2 w-44 h-50 mb-1'>
                            <RxSketchLogo size={20} className="flex-shrink-0" />
                            <p className="flex-shrink-0">Dashboard</p>
                        </div>
                    </Link>
                    <span className='border-b-[1px] border-gray-200 w-full p-2'></span>
                    <Link href='/Dashboard/Accounts'>
                        <div className='bg-gray-100 hover:bg-gray-500 p-3 inline-flex items-center rounded-lg space-x-2 w-44 h-50 mb-1'>
                            <RxDashboard size={20} className="flex-shrink-0" />
                            <p className="flex-shrink-0">Accounts</p>
                        </div>
                    </Link>
                    <Link href='/Dashboard/Orderbook'>
                        <div className='bg-gray-100 hover:bg-gray-500 p-3 inline-flex items-center rounded-lg space-x-2 w-44 h-50 mb-1'>
                            <RxPerson size={20} className="flex-shrink-0" />
                            <p className="flex-shrink-0">Orderbook</p>
                        </div>
                    </Link>
                    <Link href='/Dashboard/Arbitrage'>
                        <div className='bg-gray-100 hover:bg-gray-500 p-3 inline-flex items-center rounded-lg space-x-2 w-44 h-50 mb-1'>
                            <HiOutlineShoppingBag size={20} className="flex-shrink-0" />
                            <p className="flex-shrink-0">Buy/Sell Crypto</p>
                        </div>
                    </Link>
                    <Link href='/Dashboard/Assets'>
                        <div className='bg-gray-100 hover:bg-gray-500 p-3 inline-flex items-center rounded-lg space-x-2 w-44 h-50 mb-1'>
                            <FiSettings size={20} className="flex-shrink-0" />
                            <p className="flex-shrink-0">Assets</p>
                        </div>
                    </Link>
                    <Link href='/Dashboard/Swap'>
                        <div className='bg-gray-100 hover:bg-gray-500 p-3 inline-flex items-center rounded-lg space-x-2 w-44 h-50 mb-1'>
                            <FiSettings size={20} className="flex-shrink-0" />
                            <p className="flex-shrink-0">Swap</p>
                        </div>
                    </Link>
                    <Link href='/Dashboard/NFTs'>
                        <div className='bg-gray-100 hover:bg-gray-500 p-3 inline-flex items-center rounded-lg space-x-2 w-44 h-50 mb-1'>
                            <FiSettings size={20} className="flex-shrink-0" />
                            <p className="flex-shrink-0">NFTs</p>
                        </div>
                    </Link>
                    <Link href='/Dashboard/Bridge'>
                        <div className='bg-gray-100 hover:bg-gray-500 p-3 inline-flex items-center rounded-lg space-x-2 w-44 h-50 mb-1'>
                            <FiSettings size={20} className="flex-shrink-0" />
                            <p className="flex-shrink-0">Bridge</p>
                        </div>
                    </Link>
                    <Link href='/Dashboard/Earn'>
                        <div className='bg-gray-100 hover:bg-gray-500 p-3 inline-flex items-center rounded-lg space-x-2 w-44 h-50 mb-1'>
                            <FiSettings size={20} className="flex-shrink-0" />
                            <p className="flex-shrink-0">Earn</p>
                        </div>
                    </Link>
                    <Link href='/Dashboard/Analytics'>
                        <div className='bg-gray-100 hover:bg-gray-500 p-3 inline-flex items-center rounded-lg space-x-2 w-44 h-50 mb-1'>
                            <FiSettings size={20} className="flex-shrink-0" />
                            <p className="flex-shrink-0">Analytics</p>
                        </div>
                    </Link>
                    <Link href='/Dashboard/Support'>
                        <div className='bg-gray-100 hover:bg-gray-500 p-3 inline-flex items-center rounded-lg space-x-2 w-44 h-50 mb-1 mt-10'>
                            <FiSettings size={20} className="flex-shrink-0" />
                            <p className="flex-shrink-0">Support</p>
                        </div>
                    </Link>

                </div>
            </div>
            <main className='ml-20 w-full'></main>
        </div>
    );
};

        // <div className="flex flex-row shadow-xl rounded-lg">
        //     <div className={`bg-gray-800 text-white flex flex-col justify-between items-start h-screen w-24 ${isSidebarOpen ? 'w-72' : 'w-24'}`}>
        //         <div className="cursor-pointer p-4" onClick={toggleSidebar}>
        //             {isSidebarOpen ? <XIcon className="h-6 w-6" aria-hidden="true" /> : <Bars3Icon className="h-6 w-6" aria-hidden="true" />}
        //         </div>

        //         {isSidebarOpen && (
        //             <ul className="bg-gray-800 text-white w-64 py-8 text-center cursor-pointer space-y-6 shadow-xl border rounded-md">
        //                 {/* Sidebar content here */}
        //                 <div className="flex items-center">
        //                     <Link href="/Dashboard">
        //                         <div className="h-12 w-12 space-y-1 px-4">
        //                             <Image src="/assets/dashboard/dashboard.svg" alt="Avatar" width="30" height="30" />
        //                         </div>
        //                         <div className="ml-4 space-y-4 -mt-2">
        //                             <p className="text-md font-medium leading-none">Dashboard</p>
        //                         </div>
        //                     </Link>
        //                 </div>
        //                 <div className="flex items-center">
        //                     <Link href="/Dashboard/Accounts">
        //                         <div className="h-12 w-12 space-y-1 px-4">
        //                             <Image src="/assets/dashboard/dashboard.svg" alt="Avatar" width="30" height="30" />
        //                         </div>
        //                         <div className="ml-4 space-y-4 -mt-2">
        //                             <p className="text-md font-medium leading-none">My Accounts</p>
        //                         </div>
        //                     </Link>
        //                 </div>
        //                 <div className="flex items-center">
        //                     <Link href="/Dashboard/Orderbook">
        //                         <div className="h-12 w-12 space-y-1 px-4">
        //                             <Image src="/assets/dashboard/dashboard.svg" alt="Avatar" width="30" height="30" />
        //                         </div>
        //                         <div className="ml-4 space-y-4 -mt-2">
        //                             <p className="text-md font-medium leading-none">Transactions</p>
        //                         </div>
        //                     </Link>
        //                 </div>
        //                 <div className="flex items-center">
        //                     <Link href="/Dashboard/Arbitrage">
        //                         <div className="h-12 w-12 space-y-1 px-4">
        //                             <Image src="/assets/dashboard/dashboard.svg" alt="Avatar" width="30" height="30" />
        //                         </div>
        //                         <div className="ml-4 space-y-4 -mt-2">
        //                             <p className="text-md font-medium leading-none">Buy/Sell Crypto</p>
        //                         </div>
        //                     </Link>
        //                 </div>
        //                 <div className="flex items-center">
        //                     <Link href="/Dashboard/Swap">
        //                         <div className="h-12 w-12 space-y-1 px-4">
        //                             <Image src="/assets/dashboard/dashboard.svg" alt="Avatar" width="30" height="30" />
        //                         </div>
        //                         <div className="ml-4 space-y-4 -mt-2">
        //                             <p className="text-md font-medium leading-none">Swap</p>
        //                         </div>
        //                     </Link>
        //                 </div>
        //                 <div className="flex items-center">
        //                     <Link href="/Dashboard/Assets">
        //                         <div className="h-12 w-12 space-y-1 px-4">
        //                             <Image src="/assets/dashboard/dashboard.svg" alt="Avatar" width="30" height="30" />
        //                         </div>
        //                         <div className="ml-4 space-y-4 -mt-2">
        //                             <p className="text-md font-medium leading-none">Assets</p>
        //                         </div>
        //                     </Link>
        //                 </div>
        //                 <div className="flex items-center">
        //                     <Link href="/Dashboard/NFTs">
        //                         <div className="h-12 w-12 space-y-1 px-4">
        //                             <Image src="/assets/dashboard/dashboard.svg" alt="Avatar" width="30" height="30" />
        //                         </div>
        //                         <div className="ml-4 space-y-4 -mt-2">
        //                             <p className="text-md font-medium leading-none">NFTs</p>
        //                         </div>
        //                     </Link>
        //                 </div>

        //                 <div className="flex items-center">
        //                     <Link href="/Dashboard/Earn">
        //                         <div className="h-12 w-12 space-y-1 px-4">
        //                             <Image src="/assets/dashboard/dashboard.svg" alt="Avatar" width="30" height="30" />
        //                         </div>
        //                         <div className="ml-4 space-y-4 -mt-2">
        //                             <p className="text-md font-medium leading-none">Earn</p>
        //                         </div>
        //                     </Link>
        //                 </div>
        //                 <div className="flex items-center">
        //                     <Link href="/Dashboard/Bridge">
        //                         <div className="h-12 w-12 space-y-1 px-4">
        //                             <Image src="/assets/dashboard/dashboard.svg" alt="Avatar" width="30" height="30" />
        //                         </div>
        //                         <div className="ml-4 space-y-4 -mt-2">
        //                             <p className="text-md font-medium leading-none">Bridge</p>
        //                         </div>
        //                     </Link>
        //                 </div>
        //                 <div className="flex items-center">
        //                     <Link href="/Dashboard/Analytics">
        //                         <div className="h-12 w-12 space-y-1 px-4">
        //                             <Image src="/assets/dashboard/dashboard.svg" alt="Avatar" width="30" height="30" />
        //                         </div>
        //                         <div className="ml-4 space-y-4 -mt-2">
        //                             <p className="text-md font-medium leading-none">Analytics</p>
        //                         </div>
        //                     </Link>
        //                 </div>
        //                 <div className="flex items-center">
        //                     <Link href="/Dashboard/Support">
        //                         <div className="h-12 w-12 space-y-1 px-4">
        //                             <Image src="/assets/dashboard/dashboard.svg" alt="Avatar" width="30" height="30" />
        //                         </div>
        //                         <div className="ml-4 space-y-4 -mt-2">
        //                             <p className="text-md font-medium leading-none">Support</p>
        //                         </div>
        //                     </Link>
        //                 </div>
        //             </ul>
        //         )}
        //     </div>
        // </div>


export default LeftDash;
