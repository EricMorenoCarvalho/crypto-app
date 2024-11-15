import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Logo } from '../../assets/Icons'

const Header = () => {
  const [isLogedIn, setIsLogedIn] = useState(null)
  const [isHeaderOpen, setIsHeaderOpen] = useState(false)

  const handleIsHeaderOpen = () => {
    setIsHeaderOpen(!isHeaderOpen)
  }

  return (
    <header className='fixed w-full top-0 z-10 shadow-lg bg-white'>
      <div className='flex content-between px-10 my-5'>
        <div className='hover:scale-105 transition-transform duration-300 ease-in-out'>
          <Link to='/'>
            <Logo fill='#000000' />
          </Link>
        </div>
        <div className='flex text-right ml-auto text-lg'>
          <ul className='flex items-center gap-6'>
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
      </div>
    </header>
  )
}

export default Header