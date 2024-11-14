import axios from 'axios'

export const fetchCoinList = async (limit, offset = 0, orderBy = 'marketCap', orderDirection = 'desc') => {
  const options = {
    method: 'GET',
    url: 'https://coinranking1.p.rapidapi.com/coins',
    params: {
      referenceCurrencyUuid: 'yhjMzLPhuIDl',
      limit: limit.toString(),
    },
    headers: {
      'x-rapidapi-key': import.meta.env.VITE_RAPIDAPI_KEY,
      'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    },
  }

  try {
    const response = await axios.request(options)
    return response.data.data.coins
  } catch (error) {
    throw new Error('Error fetching coins')
  }
}