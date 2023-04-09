import Image from 'next/image'
import { Poppins } from 'next/font/google'
import Navbar from '@/components/Navbar'
import googleImg from '../public/assets/google-play-badge.png'
import { ArrowRightCircleIcon } from '@heroicons/react/24/outline'
import { ChatBubbleLeftRightIcon, ClockIcon } from '@heroicons/react/24/solid'
import mockupImage from '../public/assets/mockup_phone.png'

const poppins = Poppins({ subsets:['latin'],weight:['400','500','600','700'] })

export default function Home() {
  return (
    <main>
      <Navbar/>
      <div className='flex h-screen w-screen overflow-x-hidden'>
        <div className='w-8/12 flex justify-center flex-col mt-[80px]'>
          <div className='ml-[5vw] '>
              <h1 className={`text-5xl ${poppins.className} font-bold capitalize leading-[65px] w-[50%] `}>
               Vet care for pets, just a tap away with <span className='text-primary'>Bezubaan</span>
              </h1>
              <h5 className='text-grey-200 text-gray my-2  w-[50%]'>
              Silent paws speak volumes with Bezubaan - the app that connects pet parents to veterinary care, anytime, anywhere!
              </h5>
              <div className='flex items-center mt-8 gap-6'>
              <Image priority src={googleImg} width={165} alt='google-play-badge' className='ml-[-10px] cursor-pointer' />
              <a className={`${poppins.className} flex items-center gap-2 hover:animate-bounce`} href="#"><span>See more</span><ArrowRightCircleIcon className='h-8 w-8' /> </a>
              </div>
              <ul className={`flex mt-20 gap-6 w-[70%] ${poppins.className} `}>
                  <li className='flex items-center gap-4 text-xs'>
                    <ChatBubbleLeftRightIcon className='w-8 h-8 flex-shrink-0 text-primary'/>
                    <span>Instantly connect with experienced vets anytime, anywhere for expert pet advice at your fingertips.</span>
                    </li>
                  <li className='flex items-center gap-4 text-xs'>
                    <ClockIcon className='w-8 h-8 flex-shrink-0 text-primary'/>
                    <span>Book appointments, track records, and get reminders for your pet's health in one convenient app.</span>
                    </li>
              </ul>
          </div>
        </div>
        <div className='relative w-4/12 bg-gradient-to-tr  from-black to-secondary'>
          <Image className='absolute top-[60%] -translate-y-1/2 left-[-100px]' src={mockupImage} width={350} priority alt='phone-design'  />
        </div>
      </div>
    
    </main>
  )
}
