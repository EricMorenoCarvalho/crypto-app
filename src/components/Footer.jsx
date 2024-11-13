import React from 'react'
import { Link } from 'react-router-dom'
import { FacebookLogo, InstagramLogo, Logo, SocialMediaLogo, YoutubeLogo } from '../assets/Icons'

const Footer = () => {
    return (
        <footer className='flex justify-between w-full bottom-0 z-10 px-10 py-5 items-center bg-black'>
            <Link to='/'>
                <Logo fill='white' />
            </Link>
            <div className='flex gap-x-2 ml-auto'>
                <SocialMediaLogo network={"instagram"}/>
                <SocialMediaLogo network={"facebook"}/>
                <SocialMediaLogo network={"youtube"}/>
            </div>
        </footer>
    )
}

export default Footer