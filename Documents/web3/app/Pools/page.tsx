import supabase from '@/utils/supabaseClient'
import React from 'react'
import Table from '@/components/dashboard/Table'

export default async function Pools() {

  console.log(supabase)

  const { data: coins, error } = await supabase
    .from('assets')
    .select('*')
    .order('coins', { ascending: true })

  console.log({ coins })

  if (error) {
    console.error('Error fetching watches')
  }

  return (
    <div className="mt-6">
      <h1 className="flex space-x-2 p-7">
        Pools
      </h1>
      {
      coins.map((coin) => (
        <div key={coins.id} className="mb-4 p-4 bg-gray-800 rounded-lg shadow">
          <h2 className="text-xl text-white mb-2">{coin.coin} - {coin.price}</h2>
         
        </div>
      ))
      }
    </div>
   
  )
}