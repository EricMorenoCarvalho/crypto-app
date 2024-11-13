import React from 'react'
import HomeCoins from '../components/layout/coinsComponent'
import HomeNews from '../components/layout/newsComponent'

const Home = () => {
    const crypto = 'crypto' // Definimos la variable 'crypto' para pasarla como searchText

    return (
        <div className='h-max mt-28 mb-5'>
            <div className='place-items-end mr-5'>
                <HomeCoins limit={12} title="Trending Coins" />
            </div>
        </div>
    )
}

export default Home
