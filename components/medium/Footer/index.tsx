import React from 'react'
import logo from '../../../public/assets/white_logo.png'
import googleBadge from '../../../public/assets/google-play-badge.png'
import Image from 'next/image'


const Footer = () => {
  return (
    <div className='flex flex-wrap md:flex-nowrap bg-lightBlack px-[5vw] py-[8vh] text-white justify-center gap-16'>
        <div>
        <Image src={logo} width={180} alt='logo' className='h-[80px]' />

        </div>
        <div className='flex justify-around w-full'>
        <ul className='font-light text-xs'>
            <li className='mb-4 text-base font-medium'><h5>Learn More</h5></li>
            <li className='my-3'><a href="">Home</a></li>
            <li className='my-3'><a href="">Features</a></li>
            <li className='my-3'><a href="">About Us</a></li>
            <li className='my-3'><a href="">Contact Us</a></li>
        </ul>
        <ul className='font-light text-xs'>
            <li className='mb-4 text-base font-medium'><h5>Support</h5></li>
            <li className='my-3'><a href="">Help</a></li>
            <li className='my-3'><a href="">Support</a></li>
            <li className='my-3'><a href="">FAQ&apos;s</a></li>
        </ul>
        <ul className='font-light text-xs'>
            <li className='mb-4 text-base font-medium'><h5>Socials</h5></li>
            <li className='my-3'><a href="">Facebook</a></li>
            <li className='my-3'><a href="">Twitter</a></li>
            <li className='my-3'><a href="">Instagram</a></li>
        </ul>
        </div>
        <div className='flex flex-col md:items-start items-center'>
            <h4>Get in touch & Stay up to date</h4>
            <Image src={googleBadge} width={150} className='ml-[-10px] mt-5 cursor-pointer' alt='google-badge' />
        </div>
    </div>
  )
}

export default Footer