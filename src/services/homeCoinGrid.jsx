import React, { useEffect, useState } from 'react'
import axios from 'axios'

const CoinList = () => {
  const [coins, setCoins] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchCoins = async () => {
      const options = {
        method: 'GET',
        url: 'https://coinranking1.p.rapidapi.com/coins',
        params: {
          referenceCurrencyUuid: 'yhjMzLPhuIDl',
          timePeriod: '24h',
          orderBy: 'marketCap',
          orderDirection: 'desc',
          limit: '10',
          offset: '0',
        },
        headers: {
          'x-rapidapi-key': import.meta.env.VITE_RAPIDAPI_KEY,
          'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
        },
      }

      try {
        const response = await axios.request(options)
        setCoins(response.data.data.coins)
        setLoading(false)
      } catch (error) {
        setError('Error al obtener las monedas')
        setLoading(false)
      }
    }

    fetchCoins()
  }, [])

  if (loading) return <p>Cargando datos...</p>
  if (error) return <p>{error}</p>

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {coins.map((coin) => (
          <div
            key={coin.uuid}
            className="min-h-20 min-w-56 text-center rounded-lg bg-gray-200 px-5 py-5"
          >
            <img
              src={coin.iconUrl}
              alt={coin.name}
              className="w-10 h-10 mx-auto"
            />
            <p>{coin.name} ({coin.symbol})</p>
            <p>Precio: ${coin.price}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CoinList