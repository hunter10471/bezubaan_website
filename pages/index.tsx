import Image from 'next/image'
import { Poppins } from 'next/font/google'
import Navbar from '@/components/medium/Navbar'
import googleImg from '../public/assets/google-play-badge.png'
import { ArrowRightCircleIcon,CalendarDaysIcon,ComputerDesktopIcon,DocumentChartBarIcon,PhoneArrowUpRightIcon } from '@heroicons/react/24/outline'
import { ChatBubbleLeftRightIcon, ClockIcon,  } from '@heroicons/react/24/solid'
import mockupImage from '../public/assets/mockup_phone.png'
import blob from '../public/assets/blob.svg'
import Head from 'next/head'
import IconBox from '@/components/medium/IconBox'
import couchDog from '../public/assets/couch_dog.png'

const poppins = Poppins({ subsets:['latin'],weight:['400','500','600','700'] })

export default function Home() {
  return (
    <main className=' w-screen md:w-auto overflow-hidden'>
      <Head>
        <title>Bezubaan</title>
      </Head>
      <Navbar/>
      <div className='flex flex-wrap min-h-screen relative'>
        <Image src={blob} width={300} alt='blob' className='absolute -z-10 opacity-10 left-[-30px]' />
        <div className='w-full md:w-8/12 flex justify-center items-center md:items-start  flex-col mt-[150px] lg:mt-[100px]'>
          <div className='md:ml-[5vw] md:w-full w-[85%] md:text-left text-center'>
              <h1 className={`text-4xl xl:text-5xl ${poppins.className} font-bold capitalize w-full md:w-[50%] `}>
               Vet care for pets, just a tap away with <strong className='text-primary'>Bezubaan</strong>
              </h1>
              <h5 className='text-grey-200 text-gray my-4 text-xs lg:text-sm xl:text-base w-full  md:w-[50%]'>
              Silent paws speak volumes with Bezubaan - the app that connects pet parents to veterinary care, anytime, anywhere!
              </h5>
              <div className='relative flex flex-wrap items-center md:justify-start justify-center mt-8 gap-6'>
              <Image priority src={googleImg} width={165} alt='google-play-badge' className='ml-[-10px]  cursor-pointer' />
              <a className={`${poppins.className} flex items-center gap-2 hover:animate-bounce `} href="#"><span>See more</span><ArrowRightCircleIcon className='h-8 w-8 md:rotate-0 rotate-90' /> </a>
              <Image src={blob} width={300} alt='blob' className='absolute -z-10 opacity-10 right-[-50px] bottom-[-250px]' />
              </div>
              <ul className={`hidden md:flex flex-wrap md:flex-nowrap lg:relative absolute mt-10 gap-6 z-10 bottom-[-60px] left-[50%] -translate-x-1/2 lg:w-[70%] w-[90%] lg:bg-opacity-0 bg-primary p-4 lg:p-0 rounded-md lg:text-black text-white ${poppins.className} `}>
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
        <div className=' relative flex justify-center my-10 md:my-0 w-full md:w-4/12 md:bg-gradient-to-t from-white to-primary'>
          <Image className='w-[300px] md:w-[350px] lg:w-[450px] xl:w-[550px] md:absolute md:top-[55%] md:-translate-y-1/2 left-[-35%]' src={mockupImage} width={800} priority alt='phone-design'  />
        </div>
      </div>
    <div className='flex flex-wrap md:flex-nowrap   lg:mt-[100px] my-10 md:my-20  mx-[5vw] gap-14 md:gap-24'>
     <div className='relative w-full md:w-4/12 flex md:justify-start items-center md:items-start  flex-col '>
          <h2 className={`${poppins.className} text-gray text-sm md:text-base font-medium uppercase`}>Pawsome Features</h2>
          <h3 className={`text-2xl md:text-3xl md:text-left text-center font-bold ${poppins.className}`}>Discover the Amazing Benefits of Bezubaan's Cutting-Edge Technology and Expert Vet Care</h3>
          <Image src={blob} width={300} alt='blob' className='absolute -z-10 opacity-10 top-[-100px] left-[-50px]' />
          <Image src={couchDog} width={400} alt='dog sitting on couch' className='mt-14' />
      </div>
      <div className='flex flex-col gap-14 w-full md:w-8/12'>
          <p className='w-full md:w-[80%] font-medium md:text-left text-center hidden md:block'>Bezubaan connects pet owners with experienced vets for seamless appointment booking, personalized reminders, and instant access to professional veterinary advice - all in one convenient app.</p>
          <div className='flex md:flex-row flex-col items-center md:items-start gap-10'>
              <IconBox icon={<PhoneArrowUpRightIcon className='text-primary h-6 w-6' />} title='Vet Access' text='Connect with qualified vets through booking or chat for expert guidance on pet health and wellness.' />
              <IconBox icon={<CalendarDaysIcon className='text-primary h-6 w-6' />} title='Appointment Management' text='Easily book vet appointments and receive personalized reminders for important pet health events.' />
          </div>
          <div className='relative flex md:flex-row flex-col items-center md:items-start gap-10'>
              <Image src={blob} width={300} alt='blob' className='absolute -z-10 opacity-10 bottom-[-100px] right-[-50px]' />
              <IconBox icon={<DocumentChartBarIcon className='text-primary h-6 w-6' />} title='Health Records' text='Keep track of pet health milestones and medical history in one place with centralized storage.' />
              <IconBox icon={<ComputerDesktopIcon className='text-primary h-6 w-6' />} title='Technology & Usability' text='Enjoy a modern and streamlined experience with an intuitive interface that makes pet health management easy.' />
          </div>
          <div>

          </div>
      </div>
    </div>
    </main>
  )
}
