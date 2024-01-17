'use client'

import React from 'react'
import Link from 'next/link'

const NewSidebar = () => {
  return (
    <div style={{height:'100vh',backgroundColor:'red',position:'fixed'}}>
       <Link href={'/Dashboard'}>
        Dashboard
       </Link>
    </div>
  )
}

export default NewSidebar