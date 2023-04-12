import { Bars3Icon } from '@heroicons/react/24/solid'
import { Poppins } from 'next/font/google'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import logo from '../../../public/assets/green_logo_only.png'



const poppins = Poppins({subsets:['latin'],weight:['600','500']})



const Navbar = () => {
  const [isTransparent, setIsTransparent] = useState<Boolean>(true);
  const [menuOpen, setMenuOpen] = useState<boolean>(false)

  const handleScroll = () => {
    if(window.scrollY >= 10) setIsTransparent(false)
    else setIsTransparent(true)
};

if (typeof window !== "undefined") {
  window.addEventListener("scroll", handleScroll);
}


useEffect(() => {
  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
  }, []);
  return (
    <nav  className={`overflow-y-hidden z-20 ${menuOpen ? 'h-[330px]' : 'h-[75px]'} transition-all flex-wrap flex py-2 items-center justify-between w-full fixed left-1/2 -translate-x-1/2 px-8 md:px-20 ${!isTransparent && 'bg-white shadow-xl'} z-10`}>
        <Image className='' alt='bezubaan_logo' src={logo} priority width={38} />
        <button onClick={()=>setMenuOpen(!menuOpen)} className='lg:hidden z-10'><Bars3Icon className='h-10 w-10 rounded-full shadow-lg bg-white text-primary p-2' /></button>
        <ul className={` ${poppins.className} items-center ${isTransparent && !menuOpen ? 'bg-opacity-0' : 'bg-white'} lg:bg-opacity-0 rounded-lg p-4 lg:p-0 flex w-full flex-col lg:flex-row lg:flex-[2] lg:ml-[25%] gap-10 `}>
            <li className='hover:text-primary transition-all'> <a href="">Services</a> </li>
            <li className='hover:text-primary transition-all'> <a href="">FAQ</a> </li>
            <li className='hover:text-primary transition-all'> <a href="">Contact</a> </li> 
            <li className='lg:hidden'><button className=' text-primary py-1 px-2 h-fit rounded-md border-2 hover:shadow-xl hover:border-white hover:bg-primary hover:text-white border-primary transition-all'>Get the app</button></li>
        </ul>
        <button className={`hidden lg:block ${!isTransparent  ? 'text-primary hover:bg-primary hover:text-white' : 'text-white hover:border-primary hover:bg-white hover:text-secondary border-white'} py-1 px-2 h-fit rounded-md border-2 transition-all`}>Get the app</button>
    </nav>
  )
}

export default Navbar