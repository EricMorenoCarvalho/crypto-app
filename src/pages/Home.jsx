import React from 'react'
import HomeCoins from '../components/layout/CoinListComponent'

const Home = () => {

    return (
        <div className='h-max mt-28 mb-2'>
            <div className='px-5'>
                <HomeCoins limit={12} title="Trending Coins" />
            </div>
        </div>
    )
}

export default Home
