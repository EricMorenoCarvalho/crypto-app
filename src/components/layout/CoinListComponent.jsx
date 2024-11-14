import React, { useEffect, useState } from 'react'
import { fetchCoinList } from '../services/CoinListService'

const CoinsComponent = ({ limit, title }) => {
  const [data, setData] = useState({ coins: [], loading: true, error: null })

  useEffect(() => {
    const getCoins = async () => {
      setData({ ...data, loading: true })
      try {
        const coins = await fetchCoinList(limit)
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
    <div className="h-full flex flex-col gap-2 bg-gray-200 px-4 py-4 rounded-lg min-w-full sm:min-w-[350px] md:min-w-[400px] lg:min-w-[500px] xl:min-w-[600px]">
      {title && <span className='font-bold text-xl mb-2'>{title}</span>}
      
      {data.coins.map((coin) => (
        <div
          key={coin.uuid}
          className="flex items-center bg-gray-100 shadow-lg p-2 rounded-lg hover:bg-gray-300 hover:scale-105 transition-transform duration-300 ease-in-out"
        >
          <img
            src={coin.iconUrl}
            alt={coin.name}
            className="w-6 h-6 mr-3"
          />
          <div className="flex-1 text-left hover:text-gray-500 space-x-2 py-2">
            <span className='font-bold text-sm sm:text-base md:text-lg'>{coin.symbol}</span>
            <span className='text-xs sm:text-sm md:text-base'>{coin.name}</span>
            <span className='text-xs sm:text-sm md:text-lg'>
              ${parseFloat(coin.price).toFixed(6)}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CoinsComponent