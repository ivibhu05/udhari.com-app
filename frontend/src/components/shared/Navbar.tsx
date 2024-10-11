'use client'
import { AlignRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import MobileNavbar from './MobileNavbar'
import { usePathname } from 'next/navigation'
import MobileSidebar from './MobileSideBar'

const Navbar = () => {

  return (
    <div className={`px-8 py-3 rounded-[30px] fixed bg-white flex items-center w-[80%]
     h-[3.2rem] top-2 z-10 ml-36 max-lg:mx-auto max-lg:w-[90%] justify-between`}>

       <MobileSidebar/>

        <Link href={"/"}>
        <div className='flex gap-1 items-end'>
            <Image src={'/icons/money.png'} height={30} width={30} alt='logo'/>
            <h1 className='font-semibold'>udhari.com</h1>
        </div>
        </Link>

        <div className='flex gap-12 max-lg:hidden'>
            <Link href={"/"} className='text-[.9rem] font-semibold'>
                <p>Home</p>
            </Link>

            <Link href={"/dashboard/customer"} className='text-[.9rem] font-semibold'>
                <p>Dashboard</p>
            </Link>

            <Link href={"/contact-us"} className='text-[.9rem] font-semibold'>
                <p>Contact-us</p>
            </Link>

            <Link href={"/about"} className='text-[.9rem] font-semibold'>
                <p>About</p>
            </Link>
        </div>

        <div>
            <MobileNavbar/>
        </div>
    </div>
  )
}

export default Navbar