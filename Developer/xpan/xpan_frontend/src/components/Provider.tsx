'use client'

import React, { ReactNode } from 'react'
import { SessionProvider } from 'next-auth/react'

interface ProviderProps {
    children: ReactNode;
    session: any; // Replace 'any' with the actual type of your session object
}

const Provider: React.FC<ProviderProps> = ({ children , session}) => {
    return (
        <SessionProvider session={session}>
            {children}
        </SessionProvider>
    )
}

export default Provider