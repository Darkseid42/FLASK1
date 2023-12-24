import Navbar from '@/components/homepage/Navbar'
import DashboardNavbar from '@/components/dashboard/DashboardNavbar'
import React from 'react'
import MiddleDash from '@/components/dashboard/MiddleDash'
import LeftDash from '@/components/dashboard/LeftDash'
import { RecentSales } from '@/components/dashboard/RecentSales'
import { Swap } from '@/components/dashboard/Swap'

const dashboard = () => {
  return (
    <>

      {/* <Navbar /> */}
      <DashboardNavbar />

      <div className="flex mx-auto mt-10">
        {/* Left Column */}
        <div className="flex-1 justify-end">
          <LeftDash />
        </div>

        {/* Middle Column */}
        <div className='flex-2 justify-center'>
          <MiddleDash />
        </div>

        {/* Right Column */}
        <div className="flex-1 justify-end -ml-5">
          <Swap />
          <RecentSales />
        </div>
      </div>

    </>

  )
}

export default dashboard