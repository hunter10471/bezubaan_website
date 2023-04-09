import Image from 'next/image'
import { Poppins } from 'next/font/google'
import Navbar from '@/components/Navbar'
import googleImg from '../public/assets/google-play-badge.png'
import { ArrowRightCircleIcon } from '@heroicons/react/24/outline'
import { ChatBubbleLeftRightIcon, ClockIcon } from '@heroicons/react/24/solid'
import mockupImage from '../public/assets/mockup_phone.png'
import blob from '../public/assets/blob.svg'
import blob_white from '../public/assets/blob-white.svg'

const poppins = Poppins({ subsets:['latin'],weight:['400','500','600','700'] })

export default function Home() {
  return (
    <main>
      <Navbar/>
      <div className='flex flex-wrap h-screen overflow-x-hidden relative'>
        <Image src={blob} width={300} alt='blob' className='absolute -z-10 opacity-20 left-[-30px]' />
        <div className='w-full md:w-8/12 flex justify-center items-center md:items-start  flex-col mt-[150px] lg:mt-[100px]'>
          <div className='md:ml-[5vw] md:w-full w-[85%] md:text-left text-center'>
              <h1 className={`text-4xl xl:text-5xl ${poppins.className} font-bold capitalize w-full md:w-[50%] `}>
               Vet care for pets, just a tap away with <span className='text-primary'>Bezubaan</span>
              </h1>
              <h5 className='text-grey-200 text-gray my-4 text-xs lg:text-sm xl:text-base w-full  md:w-[50%]'>
              Silent paws speak volumes with Bezubaan - the app that connects pet parents to veterinary care, anytime, anywhere!
              </h5>
              <div className='relative flex flex-wrap items-center md:justify-start justify-center mt-8 gap-6'>
              <Image priority src={googleImg} width={165} alt='google-play-badge' className='ml-[-10px]  cursor-pointer' />
              <a className={`${poppins.className} flex items-center gap-2 hover:animate-bounce `} href="#"><span>See more</span><ArrowRightCircleIcon className='h-8 w-8 md:rotate-0 rotate-90' /> </a>
              <Image src={blob} width={300} alt='blob' className='absolute -z-10 opacity-20 right-[-50px] bottom-[-250px]' />
              </div>
              <ul className={`hidden md:flex flex-wrap md:flex-nowrap lg:relative absolute mt-20 gap-6 z-10 bottom-[-60px] left-[50%] -translate-x-1/2 lg:w-[70%] w-[90%] lg:bg-opacity-0 bg-primary p-4 lg:p-0 rounded-md lg:text-black text-white ${poppins.className} `}>
                  <li className='flex items-center gap-4 text-xs'>
                    <ChatBubbleLeftRightIcon className='w-8 h-8 flex-shrink-0 lg:text-primary text-white'/>
                    <span>Instantly connect with experienced vets anytime, anywhere for expert pet advice at your fingertips.</span>
                    </li>
                  <li className='flex items-center gap-4 text-xs'>
                    <ClockIcon className='w-8 h-8 flex-shrink-0 lg:text-primary text-white'/>
                    <span>Book appointments, track records, and get reminders for your pet&apos;s health in one convenient app.</span>
                    </li>
              </ul>
          </div>
        </div>
        <div className='relative flex justify-center my-10 md:my-0 w-full md:w-4/12 md:bg-gradient-to-tr from-black to-secondary'>
          <Image className='translate-x-[12%] w-[250px] md:w-auto md:translate-x-0 md:absolute md:top-[60%] md:-translate-y-1/2 left-[-70px]' src={mockupImage} width={340} priority alt='phone-design'  />
        </div>
      </div>
    
    </main>
  )
}
