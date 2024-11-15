import React from 'react'
import { Link } from 'react-router-dom'
import { Logo, SocialMediaLogo } from '../../assets/Icons'

const Footer = () => {
    return (
        <footer className='flex justify-between w-full bottom-0 z-10 px-10 py-5 items-center bg-black'>
            <div className='flex text-left text-lg'>
                <ul className='flex items-center text-left gap-6 text-white'>
                    <li className='hover:scale-105 transition-transform duration-300 ease-in-out'>
                        <Link to='/'>
                            <Logo fill='white' />
                        </Link>
                    </li>
                    <li className='hover:scale-105 transition-transform duration-300 ease-in-out'>
                        <Link to='/'>
                            Home
                        </Link>
                    </li>
                    <li className='hover:scale-105 transition-transform duration-300 ease-in-out'>
                        <Link to='/cryptos'>
                            All Cryptos
                        </Link>
                    </li>
                    <li className='hover:scale-105 transition-transform duration-300 ease-in-out'>
                        <Link to='/trade-cryptos'>
                            Trade Cryptos
                        </Link>
                    </li>
                    <li className='hover:scale-105 transition-transform duration-300 ease-in-out'>
                        <Link to='/my-wallet'>
                            My Wallet
                        </Link>
                    </li>
                    <li className='hover:scale-105 transition-transform duration-300 ease-in-out'>
                        <Link to='/contact'>
                            Contact
                        </Link>
                    </li>
                    <li className='hover:scale-105 transition-transform duration-300 ease-in-out'>
                        <Link to='/my-profile'>
                            Profile
                        </Link>
                    </li>
                </ul>
            </div>

            <div className='flex gap-x-2 ml-auto'>
                <SocialMediaLogo network={"instagram"} />
                <SocialMediaLogo network={"facebook"} />
                <SocialMediaLogo network={"youtube"} />
            </div>
        </footer>
    )
}

export default Footer