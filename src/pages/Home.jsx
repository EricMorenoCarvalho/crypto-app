import React from 'react'
import CoinListComponent from '../components/layout/CoinListComponent'
import CoinInfoComponent from '../components/layout/CoinInfoComponent'

const Home = () => {
    return (
        <div className='flex flex-col md:flex-row h-screen w-screen mt-20'>
            <div className='w-full md:w-1/3 h-auto md:h-screen mt-10 py-2 px-4'>
                <div className='h-1/2 md:h-auto mb-4'>
                    <CoinListComponent limit={5} title="Trending Coins" />
                </div>
                <div className='h-1/2 md:h-auto'>
                    <CoinInfoComponent />
                </div>
            </div>
        </div>
    )
}

export default Home