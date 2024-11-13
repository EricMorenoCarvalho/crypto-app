import React, { useEffect, useState } from 'react'
import { fetchCoins } from '../services/coinService'

const CoinsComponent = ({ limit, title }) => {
  const [data, setData] = useState({ coins: [], loading: true, error: null })

  useEffect(() => {
    const getCoins = async () => {
      setData({ ...data, loading: true })
      try {
        const coins = await fetchCoins(limit)
        setData({ coins, loading: false, error: null })
      } catch (error) {
        setData({ coins: [], loading: false, error: 'Error fetching coins' })
      }
    }

    getCoins()
  }, [limit])

  if (data.loading) return <p>Loading data...</p>
  if (data.error) return <p>{data.error}</p>

  return (
    <div className="flex flex-col gap-2 bg-gray-200 px-4 py-4 rounded-lg min-w-md min-h-96">
      {title ? <span className='font-bold'>{title}</span> : <></>}
      {data.coins.map((coin) => (
        <div
          key={coin.uuid}
          className="flex items-center bg-gray-100 shadow-lg p-2 rounded-lg"
        >
          <img
            src={coin.iconUrl}
            alt={coin.name}
            className="w-5 h-5 mr-2"
          />
          <div className="flex-1 text-left hover:text-gray-500 space-x-2 py-2">
            <span className='font-bold'>{coin.symbol}</span>
            <span className='text-xs'>{coin.name}</span>
            <span>${parseFloat(coin.price).toFixed(6)}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CoinsComponent