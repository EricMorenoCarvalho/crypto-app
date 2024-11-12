import React from 'react'
import { Link } from 'react-router-dom'
import { Logo } from './Icons'

const Header = () => {
    return (
        <header className='fixed w-full top-0 z-10 shadow-lg'>
            <div className='flex content-between px-10 my-5'>
                <Link to='/'>
                    <Logo fill='#000000'/>
                </Link>
                <div className='flex text-right ml-auto text-lg'>
                    <ul className='flex items-center gap-6'>
                        <li>
                            <Link to='/'>
                                Home
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header