import React from 'react'
import CoinList from '../services/homeCoinGrid'

const Home = () => {
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <CoinList />
        </div>
    )
}

export default Home