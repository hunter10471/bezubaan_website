import { Poppins } from 'next/font/google'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import logo from '../../public/assets/green_logo_only.png'



const poppins = Poppins({subsets:['latin'],weight:['600','500']})



const Navbar = () => {
  const [isTransparent, setIsTransparent] = useState<Boolean>(true);
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if(scrollPosition > 1) setIsTransparent(false)
    else setIsTransparent(true)
};
useEffect(() => {
  handleScroll();
  window.addEventListener("scroll", handleScroll);
  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
  }, []);
  return (
    <nav  className={`flex py-2 items-center w-full fixed left-1/2 -translate-x-1/2 px-20 ${!isTransparent && 'bg-white'} z-10`}>
        <Image className='' alt='bezubaan_logo' src={logo} priority width={48} />
        <ul className={`flex ${poppins.className} items-center flex-[2] ml-[25%] gap-10`}>
            <li className='hover:text-primary transition-all'> <a href="">Services</a> </li>
            <li className='hover:text-primary transition-all'> <a href="">FAQ</a> </li>
            <li className='hover:text-primary transition-all'> <a href="">Contact</a> </li> 
        </ul>
        <button className=' text-white py-1 px-2 h-fit rounded-md border-2 hover:shadow-xl hover:border-primary hover:bg-white hover:text-secondary border-white transition-all'>Get the app</button>
    </nav>
  )
}

export default Navbar