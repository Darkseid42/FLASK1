"use client"

import React from 'react';
import Image from 'next/image';


const MidAcc = () => {
    return (

        <div className="flex-1 p-4 bg-gray-100 w-full h-screen rounded-lg shadow-md -ml-8 px-5 mr-5">
            {/* Row 1 */}
            <div className="mb-4 border rounded-md shadow-xl p-4 space-y-4">
                <h1 className='font-bold text-lg'>My Accounts</h1>
                <p>Wallet Balance</p>
                <p>$1200 <span className='ml-5'>(25%)</span></p>
                <button className='border justify-end bg-slate-50 rounded-xl shadow-xl p-2'>Add Account +</button>
            </div>

            <div className="mb-4 border rounded-md shadow-xl p-4 space-y-4">
                <div className="flex items-center">
                    <div className="h-12 w-12 space-y-1">
                        <Image src="/assets/crypto/Ethereum.svg" alt="Avatar" width="20" height="20" />
                        <Image src="/assets/crypto/BTC.svg" alt="Avatar" width="20" height="20" />
                    </div>
                    <div className="ml-4 space-y-4 p-2">
                        <p className="text-sm font-medium leading-none">Ethereum</p>
                        <p className="text-sm font-medium leading-none">
                            Bitcoin
                        </p>
                    </div>
                    <div className="space-y-4 ml-auto">
                        <p className="text-sm font-medium leading-none">$ 540.00 </p>
                        <p className="text-sm text-muted-foreground text-right">
                            $ 940
                        </p>
                    </div>
                </div>
            </div>

            <div className="mb-4 border rounded-md shadow-xl p-4 space-y-4">
                <div className="flex items-center">
                    <div className="h-12 w-12 space-y-1">
                        <Image src="/assets/crypto/Ethereum.svg" alt="Avatar" width="20" height="20" />
                        <Image src="/assets/crypto/BTC.svg" alt="Avatar" width="20" height="20" />
                    </div>
                    <div className="ml-4 space-y-4 p-2">
                        <p className="text-sm font-medium leading-none">Ethereum</p>
                        <p className="text-sm font-medium leading-none">
                            Bitcoin
                        </p>
                    </div>
                    <div className="space-y-4 ml-auto">
                        <p className="text-sm font-medium leading-none">$ 540.00 </p>
                        <p className="text-sm text-muted-foreground text-right">
                            $ 940
                        </p>
                    </div>
                </div>
            </div>
            
        </div >

    );
};

export default MidAcc;
