"use client";
import React, { useState } from 'react';
import { cryptoList, Cryptocurrency } from '@/constants/Crypto';
import Image from 'next/image';

interface SortOrder {
    column: keyof Cryptocurrency | null;
    ascending: boolean;
}

const Assets = () => {
    const [sortOrder, setSortOrder] = useState<SortOrder>({
        column: null,
        ascending: true,
    });

    const handleSort = (column: keyof Cryptocurrency | null) => {
        if (sortOrder.column === column) {
            setSortOrder({ ...sortOrder, ascending: !sortOrder.ascending });
        } else {
            setSortOrder({ column, ascending: true });
        }
    };

    const sortedCryptoList = [...cryptoList].sort((a, b) => {
        const columnA = sortOrder.column ? a[sortOrder.column] : null;
        const columnB = sortOrder.column ? b[sortOrder.column] : null;

        if (typeof columnA === 'string' && typeof columnB === 'string') {
            return sortOrder.ascending ? columnA.localeCompare(columnB) : columnB.localeCompare(columnA);
        } else {
            return sortOrder.ascending ? (columnA as number) - (columnB as number) : (columnB as number) - (columnA as number);
        }
    });

    const renderHeaderCell = (
        label: string,
        column: keyof Cryptocurrency
    ) => (
        <div
            key={column}
            className="border p-4 text-center font-bold cursor-pointer"
            onClick={() => handleSort(column)}
        >
            {label}
            {sortOrder.column === column && (
                <span>{sortOrder.ascending ? ' ▲' : ' ▼'}</span>
            )}
        </div>
    );

    const renderDataCell = (
        content: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | null | undefined
    ) => (
        <div key={content === false ? null : String(content)} className="border p-4">
            {content}
        </div>
    );

    return (
        <>
            <h2 className='font-bold p-4'>My Assets</h2>
            <div className="grid grid-cols-5 gap-4 shadow-lg text-center"> {/* Reduced to 5 columns since there's no separate icon header */}

                {/* Header Row */}
                {renderHeaderCell('Assets', 'asset')}
                {renderHeaderCell('Balance', 'balance')}
                {renderHeaderCell('Price', 'price')}
                {renderHeaderCell('Fluctuation', 'fluctuation')}
                {renderHeaderCell('Percentage', 'percentage')}

                {/* Dynamic Rows */}
                {sortedCryptoList.map((crypto: Cryptocurrency, index: number) => (
                    <React.Fragment key={index}>
                        {/* Icon and Asset cell */}
                        {crypto.icon && (
                            <div className="border p-4 flex items-center">
                                <Image src={crypto.icon}
                                    alt={crypto.asset}
                                    width='24'
                                    height='24'
                                    priority
                                />
                                <span className="ml-2">{crypto.asset}</span>
                            </div>
                        )}
                        {/* Other Data cells */}
                        {renderDataCell(`$${crypto.balance.toFixed(2)}`)}
                        {renderDataCell(`$${crypto.price.toFixed(2)}`)}
                        {renderDataCell(`${crypto.fluctuation}%`)}
                        {renderDataCell(`${crypto.percentage}%`)}
                    </React.Fragment>
                ))}
            </div>
        </>
    );
}

export default Assets;
