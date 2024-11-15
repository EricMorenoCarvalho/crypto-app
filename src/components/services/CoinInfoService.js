import axios from 'axios'

export const fetchCoinInfo = async (uuid = 'Qwsogvtv82FCd', timePeriod = '3h') => {
    const options = {
        method: 'GET',
        url: `https://coinranking1.p.rapidapi.com/coin/${uuid}/history`,
        params: {
            referenceCurrencyUuid: 'yhjMzLPhuIDl',
            timePeriod: timePeriod
        },
        headers: {
            'x-rapidapi-key': import.meta.env.VITE_RAPIDAPI_KEY,
            'x-rapidapi-host': 'coinranking1.p.rapidapi.com'
        }
    }

    try {
        const response = await axios.request(options)
        return response.data
    } catch (error) {
        console.error(error)
        throw new Error('Error fetching coin info')
    }
}