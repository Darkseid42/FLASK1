"use client"
import React from 'react';
import Image from 'next/image';

const Arbitrage = () => {
  const cardsData = [
    {
      section1: {
        Buy: 'BUY',
        logoLeft: '/assets/crypto/Bitcoin.svg',
        asset: 'Bitcoin',
        logoRight: '/assets/crypto/Bitcoin.svg',
        heading: '$1600.00 XRP ($526)',
        subheading: '$0.326 per XRP',
      },
      section2: {
        Sell: 'SELL',
        logoLeft: '/assets/crypto/Bitcoin.svg',
        asset: 'Bitcoin',
        logoRight: '/assets/crypto/Bitcoin.svg',
        heading: '$1600.00 XRP ($526)',
        subheading: '$0.326 per XRP',
      },
      section3: {
        leftCol : 'Arbitrage',
        midCol : '4.66 ($30)',
        midP : '0.10 mins',
        button : 'Track Live',
      },
      section4: '$1 (3.55 XRP)',
    },
    {
      section1: {
        Buy: 'BUY',
        logoLeft: '/assets/crypto/Bitcoin.svg',
        asset: 'Bitcoin',
        logoRight: '/assets/crypto/Bitcoin.svg',
        heading: '$1600.00 XRP ($526)',
        subheading: '$0.326 per XRP',
      },
      section2: {
        Sell: 'SELL',
        logoLeft: '/assets/crypto/Bitcoin.svg',
        asset: 'Bitcoin',
        logoRight: '/assets/crypto/Bitcoin.svg',
        heading: '$1600.00 XRP ($526)',
        subheading: '$0.326 per XRP',
      },
      section3: {
        leftCol: 'Arbitrage',
        midCol: '4.66 ($30)',
        midP: '0.10 mins',
        button: 'Track Live',
      },
      section4: '$1 (3.55 XRP)',
    },
    {
      section1: {
        Buy: 'BUY',
        logoLeft: '/assets/crypto/Bitcoin.svg',
        asset: 'Bitcoin',
        logoRight: '/assets/crypto/Bitcoin.svg',
        heading: '$1600.00 XRP ($526)',
        subheading: '$0.326 per XRP',
      },
      section2: {
        Sell: 'SELL',
        logoLeft: '/assets/crypto/Bitcoin.svg',
        asset: 'Bitcoin',
        logoRight: '/assets/crypto/Bitcoin.svg',
        heading: '$1600.00 XRP ($526)',
        subheading: '$0.326 per XRP',
      },
      section3: {
        leftCol: 'Arbitrage',
        midCol: '4.66 ($30)',
        midP: '0.10 mins',
        button: 'Track Live',
      },
      section4: '$1 (3.55 XRP)',
    },
    {
      section1: {
        Buy: 'BUY',
        logoLeft: '/assets/crypto/Bitcoin.svg',
        asset: 'Bitcoin',
        logoRight: '/assets/crypto/Bitcoin.svg',
        heading: '$1600.00 XRP ($526)',
        subheading: '$0.326 per XRP',
      },
      section2: {
        Sell: 'SELL',
        logoLeft: '/assets/crypto/Bitcoin.svg',
        asset: 'Bitcoin',
        logoRight: '/assets/crypto/Bitcoin.svg',
        heading: '$1600.00 XRP ($526)',
        subheading: '$0.326 per XRP',
      },
      section3: {
        leftCol: 'Arbitrage',
        midCol: '4.66 ($30)',
        midP: '0.10 mins',
        button: 'Track Live',
      },
      section4: '$1 (3.55 XRP)',
    },
    {
      section1: {
        Buy: 'BUY',
        logoLeft: '/assets/crypto/Bitcoin.svg',
        asset: 'Bitcoin',
        logoRight: '/assets/crypto/Bitcoin.svg',
        heading: '$1600.00 XRP ($526)',
        subheading: '$0.326 per XRP',
      },
      section2: {
        Sell: 'SELL',
        logoLeft: '/assets/crypto/Bitcoin.svg',
        asset: 'Bitcoin',
        logoRight: '/assets/crypto/Bitcoin.svg',
        heading: '$1600.00 XRP ($526)',
        subheading: '$0.326 per XRP',
      },
      section3: {
        leftCol: 'Arbitrage',
        midCol: '4.66 ($30)',
        midP: '0.10 mins',
        button: 'Track Live',
      },
      section4: '$1 (3.55 XRP)',
    },
    {
      section1: {
        Buy: 'BUY',
        logoLeft: '/assets/crypto/Bitcoin.svg',
        asset: 'Bitcoin',
        logoRight: '/assets/crypto/Bitcoin.svg',
        heading: '$1600.00 XRP ($526)',
        subheading: '$0.326 per XRP',
      },
      section2: {
        Sell: 'SELL',
        logoLeft: '/assets/crypto/Bitcoin.svg',
        asset: 'Bitcoin',
        logoRight: '/assets/crypto/Bitcoin.svg',
        heading: '$1600.00 XRP ($526)',
        subheading: '$0.326 per XRP',
      },
      section3: {
        leftCol: 'Arbitrage',
        midCol: '4.66 ($30)',
        midP: '0.10 mins',
        button: 'Track Live',
      },
      section4: '$1 (3.55 XRP)',
    },
    {
      section1: {
        Buy: 'BUY',
        logoLeft: '/assets/crypto/Bitcoin.svg',
        asset: 'Bitcoin',
        logoRight: '/assets/crypto/Bitcoin.svg',
        heading: '$1600.00 XRP ($526)',
        subheading: '$0.326 per XRP',
      },
      section2: {
        Sell: 'SELL',
        logoLeft: '/assets/crypto/Bitcoin.svg',
        asset: 'Bitcoin',
        logoRight: '/assets/crypto/Bitcoin.svg',
        heading: '$1600.00 XRP ($526)',
        subheading: '$0.326 per XRP',
      },
      section3: {
        leftCol: 'Arbitrage',
        midCol: '4.66 ($30)',
        midP: '0.10 mins',
        button: 'Track Live',
      },
      section4: '$1 (3.55 XRP)',
    },
    {
      section1: {
        Buy: 'BUY',
        logoLeft: '/assets/crypto/Bitcoin.svg',
        asset: 'Bitcoin',
        logoRight: '/assets/crypto/Bitcoin.svg',
        heading: '$1600.00 XRP ($526)',
        subheading: '$0.326 per XRP',
      },
      section2: {
        Sell: 'SELL',
        logoLeft: '/assets/crypto/Bitcoin.svg',
        asset: 'Bitcoin',
        logoRight: '/assets/crypto/Bitcoin.svg',
        heading: '$1600.00 XRP ($526)',
        subheading: '$0.326 per XRP',
      },
      section3: {
        leftCol: 'Arbitrage',
        midCol: '4.66 ($30)',
        midP: '0.10 mins',
        button: 'Track Live',
      },
      section4: '$1 (3.55 XRP)',
    },
    {
      section1: {
        Buy: 'BUY',
        logoLeft: '/assets/crypto/Bitcoin.svg',
        asset: 'Bitcoin',
        logoRight: '/assets/crypto/Bitcoin.svg',
        heading: '$1600.00 XRP ($526)',
        subheading: '$0.326 per XRP',
      },
      section2: {
        Sell: 'SELL',
        logoLeft: '/assets/crypto/Bitcoin.svg',
        asset: 'Bitcoin',
        logoRight: '/assets/crypto/Bitcoin.svg',
        heading: '$1600.00 XRP ($526)',
        subheading: '$0.326 per XRP',
      },
      section3: {
        leftCol: 'Arbitrage',
        midCol: '4.66 ($30)',
        midP: '0.10 mins',
        button: 'Track Live',
      },
      section4: '$1 (3.55 XRP)',
    },
    {
      section1: {
        Buy: 'BUY',
        logoLeft: '/assets/crypto/Bitcoin.svg',
        asset: 'Bitcoin',
        logoRight: '/assets/crypto/Bitcoin.svg',
        heading: '$1600.00 XRP ($526)',
        subheading: '$0.326 per XRP',
      },
      section2: {
        Sell: 'SELL',
        logoLeft: '/assets/crypto/Bitcoin.svg',
        asset: 'Bitcoin',
        logoRight: '/assets/crypto/Bitcoin.svg',
        heading: '$1600.00 XRP ($526)',
        subheading: '$0.326 per XRP',
      },
      section3: {
        leftCol: 'Arbitrage',
        midCol: '4.66 ($30)',
        midP: '0.10 mins',
        button: 'Track Live',
      },
      section4: '$1 (3.55 XRP)',
    },
    

  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {cardsData.map((card, index) => (
        <div key={index} className="max-w-md mx-auto bg-white rounded-xl border overflow-hidden">
          {/* Section 1 */}
          <div className="p-4 grid grid-cols-3 gap-4 border-b border-gray-300">
            {/* Left Logo */}
            <div className="col-span-1 flex items-center justify-center">
              <p>{card.section1.Buy}</p>
              <Image src={card.section1.logoLeft} alt="Left Logo" width={30} height={30} />
            </div>

            {/* Middle Content */}
            <div className="col-span-1 text-center">
              <h2 className="text-sm font-bold mb-2">{card.section1.heading}</h2>
              <p className="text-sm text-gray-600">{card.section1.subheading}</p>
            </div>

            {/* Right Logo */}
            <div className="col-span-1 flex items-center justify-center">
              <p>{card.section1.asset}</p>
              <Image src={card.section1.logoRight} alt="Right Logo" width={30} height={30} />
            </div>
          </div>

          {/* Section 2 */}
          <div className="p-4 grid grid-cols-3 gap-4">
            {/* Left Logo */}
            <div className="col-span-1 flex items-center justify-center">
              <p>{card.section2.Sell}</p>
              <Image src={card.section2.logoLeft} alt="Left Logo" width={30} height={30} />
            </div>

            {/* Middle Content */}
            <div className="col-span-1 text-center">
              <h2 className="text-sm font-bold mb-2">{card.section2.heading}</h2>
              <p className="text-sm text-gray-600">{card.section2.subheading}</p>
            </div>

            {/* Right Logo */}
            <div className="col-span-1 flex items-center justify-center">
              <p>{card.section2.asset}</p>
              <Image src={card.section2.logoRight} alt="Right Logo" width={30} height={30} />
            </div>
          </div>

          {/* Section 3 */}
          <div className="p-4 grid grid-cols-3 gap-4 border-t border-gray-300">
            {/* Arbitrage */}
            <div className="col-span-1 text-center">
              <h2 className="text-sm font-bold mb-2">{card.section3.leftCol}</h2>
            </div>

            {/* 4.6555 */}
            <div className="col-span-1 text-center">
              <h2 className="text-sm font-bold mb-2">{card.section3.midCol}</h2>
              <p className="text-sm font-bold mb-2">{card.section3.midP}</p>
            </div>

            {/* Track Live Button */}
            <div className="col-span-1 text-center">
              <button className="bg-slate-100 text-black text-sm px-4 py-2 rounded-md">{card.section3.button}</button>
            </div>
          </div>

          {/* Section 4 */}
          <div className="p-4 border-t border-gray-300 text-center">
            <p className="text-md font-bold mb-2">Breakeven {card.section4}</p>
            
          </div>
        </div>

      ))}
    </div>
  );
};

export default Arbitrage;
