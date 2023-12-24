"use client"
import { Fragment, useState, useEffect, useRef } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { callsToActionFeatures, callsToActionMarketPlace, callsToActionProducts, company, features, marketplace, productsList } from '@/constants/NavbarMenuFeatures'

import LoginModal from '@/components/homepage/LoginModal'
import Image from 'next/image'



function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}


const DashboardNavbar = () => {

    // const [isModalOpen, setModalOpen] = useState(false);

    // const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


    // Header scroll effect.
    const headerRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const headerElement = headerRef.current;

            if (headerElement) {
                if (scrollPosition > 50) {  // Adjust as needed
                    headerElement.style.backgroundColor = 'rgba(255, 255, 255, 1)'; // Fully opaque white
                    headerElement.style.transition = 'background-color 0.3s';
                } else {
                    headerElement.style.backgroundColor = 'rgba(255, 255, 255, 0)'; // Transparent
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const [searchQuery, setSearchQuery] = useState('');
    const [selectedOption, setSelectedOption] = useState('option1');


    const handleKeyPress = (event: { key: string }) => {
        if (event.key === 'Enter') {
            // Perform the search action with the searchQuery
            performSearch(searchQuery);
        }
    };

    const performSearch = (query: string) => {
        // Add your search logic here
        console.log('Searching for:', query);
    };


    const handleDropdownChange = (event: { target: { value: any } }) => {
        // Handle the dropdown selection
        setSelectedOption(event.target.value);
    };



    return (
        <>
            <header ref={headerRef} className="sticky top-0 z-50 inset-x-0 bg-white bg-opacity-0">
                <nav
                    className="mx-auto flex max-w-full items-center justify-between p-4 lg:px-8"
                    aria-label="Global"
                >
                    <div className="flex lg:flex-1">
                        <Link href="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">Xpan</span>
                            <Image
                                className="h-auto w-auto"
                                src="/assets/dashboard/dark.svg"
                                alt="logo"
                                width="150"
                                height="48"
                            />
                        </Link>

                        <div className="flex items-center">

                            <input
                                type="text"
                                placeholder="Search assets"
                                className="border p-2  mx-6 px-4 mr-2"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                onKeyPress={handleKeyPress}
                            />



                        </div>
                    </div>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        // onClick={() => setMobileMenuOpen(true)}
                        >
                            <span className="sr-only">Open main menu</span>
                            {/* <Bars3Icon className="h-6 w-6" aria-hidden="true" /> */}
                        </button>
                    </div>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end px-4">
                        <select
                            className="p-4 justify-end border mx-6 px-4 mr-2"
                            value={selectedOption}
                            onChange={handleDropdownChange}
                        >
                            <option value="option1">MetaMask</option>
                            <option value="option2">BetaMask</option>
                            {/* Add more options as needed */}
                        </select>
                        <Link href="/" className="-m-1.5 p-1.5">
                            {/* <span className="sr-only">Xpan</span> */}
                            <Image
                                // onClick={() => setModalOpen(true)}
                                className="rounded-full"
                                src="/assets/dashboard/settings.svg"
                                width={40}
                                height={40}
                                alt={'Settings'}
                                priority
                            />
                        </Link>


                        {/* <button
                            // onClick={() => setModalOpen(true)}
                            className="rounded-full">
                            Settings 
                        </button> */}

                    </div>
                </nav>
            </header>
        </>
    );
}

export default DashboardNavbar