"use client"
import React from 'react'

const BidAsk = () => {
  return (
    <div>
      <div className="container mx-auto mt-8 -ml-8 px-5 mr-8">
        <table className="min-w-full border border-collapse border-gray-300">
          <thead>
            <tr className="bg-gray-200 items-center">
              <th className="py-2 px-4">Assets</th>
              <th className="py-2 px-4">Price</th>
              <th className="py-2 px-4">Bid/Ask</th>
              <th className="py-2 px-4">Buy/Sell</th>
            </tr>
          </thead>
          <tbody>
            {/* Add your order book data rows here */}
            {/* Example row: */}
            <tr className="border-t items-center">
              <td className="py-2 px-4">BTC/USD</td>
              <td className="py-2 px-4">45000</td>
              <td className="py-2 px-4 text-green-500">Bid</td>
              <td className="py-2 px-4 text-green-500">Buy</td>
            </tr>
            <tr className="border-t">
              <td className="py-2 px-4">ETH/USD</td>
              <td className="py-2 px-4">45000</td>
              <td className="py-2 px-4 text-green-500">Bid</td>
              <td className="py-2 px-4 text-green-500">Buy</td>
            </tr>
            <tr className="border-t">
              <td className="py-2 px-4">LIT/USD</td>
              <td className="py-2 px-4">45000</td>
              <td className="py-2 px-4 text-green-500">Ask</td>
              <td className="py-2 px-4 text-green-500">Buy</td>
            </tr>
            <tr className="border-t">
              <td className="py-2 px-4">XRP/USD</td>
              <td className="py-2 px-4">45000</td>
              <td className="py-2 px-4 text-green-500">Bid</td>
              <td className="py-2 px-4 text-green-500">Sell</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default BidAsk