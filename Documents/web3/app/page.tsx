"use client"
import Header from '@/components/dashboard/Header';
import Sidebar from '@/components/dashboard/Sidebar';

import { useState } from 'react';


function Page() {
  const [activePage, setActivePage] = useState('Dashboard');

  const handleNavigate = (pageName: string) => {
    setActivePage(pageName);
    
  };

  
  return (
    <>
      <div className="container mx-auto p-4 ">
        <h1 className='text-3xl border border-red-500'>Home page</h1>
        </div>
    </>
  );
}

export default Page;
