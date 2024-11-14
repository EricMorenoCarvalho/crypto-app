import axios from 'axios'

export const fetchCoinInfo = async (uuid, timePeriod) => {
    const options = {
        method: 'GET',
        url: 'https://coinranking1.p.rapidapi.com/coin/Qwsogvtv82FCd/history',
        params: {
            referenceCurrencyUuid: uuid,
            timePeriod: timePeriod
        },
        headers: {
            'x-rapidapi-key': import.meta.env.VITE_RAPIDAPI_KEY,
            'x-rapidapi-host': 'coinranking1.p.rapidapi.com'
        }
    }

    try {
        const response = await axios.request(options)
        console.log(response.data)
    } catch (error) {
        console.error(error)
    }
}