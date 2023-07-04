import Image from 'next/image'
import React from 'react'
import googleImg from '../../../public/assets/google-play-badge.png'
import mockupImage from '../../../public/assets/mockup_phone.png'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ subsets:['latin'],weight:['400','500','600','700'] })

const DownloadSection = () => {

  return (
    <div className='hover:shadow-2xl md:w-[70vw] w-[85vw] transition-all duration-500 ease-in-out  mx-auto rounded-xl bg-primary flex md:flex-row flex-col-reverse items-center justify-between p-10 m-10 overflow-y-hidden'>
      <div className='flex flex-col gap-6'>
        <h2 className={`text-white 3xl md:4xl lg:text-5xl ${poppins.className} font-medium`}>Download the app <br/> to get started</h2>
        <p className='text-white text-sm md:text-base'>Never worry about your pets when you have bezubaan on the go <br/> Its like having a vet right with you. Everywhere, All the time !</p>
        <Image priority src={googleImg} width={165} alt='google-play-badge' className='ml-[-10px]  cursor-pointer' />
      </div>
        <Image className='w-[200px] md:w-[300px] lg:w-[350px] xl:w-[400px] md:mb-[-28%]' src={mockupImage} width={300} priority alt='phone-design'  />
    </div>
  )
}

export default DownloadSection