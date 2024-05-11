"use client"
import React, { useState } from 'react'
import Image from "next/image";
import Link from 'next/link'

export default function Navbar() {
    const [isOpen, setisOpen] = useState(false)
    const handleMenuClick = () => {
        setisOpen(!isOpen)
        if(isOpen){
            document.body.style.overflow="auto"
        }else{
            document.body.style.overflow="hidden"
        }
    }
    const handleMenuItemclick=()=>{
        console.log('ok ')
        document.body.style.overflow="auto"
    }
    return (
        <>
            <div className="bg-primary desktop hidden md:block">
                <nav className="text-white text-md max-w-[90%] mx-auto p-2 flex justify-between items-center">
                    <div className="">
                        <Link href={"/"} className="font-bold font-primary inline-block border border-white text-center px-2"><span className="text-2xl text-secondary">B</span>OW FISHING<br></br> <span className="text-2xl text-secondary">X</span>TREME ADVENTURES<br></br> </Link>
                    </div>
                    <div className="flex font-sec text-md gap-x-6">
                        <Link href="/fishing-charters" className="hover:text-secondary duration-200 transition-all hover:underline hover:underline-offset-4" onClick={handleMenuItemclick}>FISHING CHARTERS</Link>
                        <Link href="/about-us" className="hover:text-secondary duration-200 transition-all hover:underline hover:underline-offset-4" onClick={handleMenuItemclick}>ABOUT US</Link>
                        <Link href="/rentals" className="hover:text-secondary duration-200 transition-all hover:underline hover:underline-offset-4" onClick={handleMenuItemclick}>RENTALS</Link>
                        <Link href="/pricing" className="hover:text-secondary duration-200 transition-all hover:underline hover:underline-offset-4" onClick={handleMenuItemclick}>PRICING</Link>
                        <Link href="/#faq" className="hover:text-secondary duration-200 transition-all hover:underline hover:underline-offset-4" onClick={handleMenuItemclick}>FAQ</Link>
                    </div>
                    <div className="bg-secondary py-2 px-4 text-xs rounded-sm hover:shadow-sm hover:shadow-teal-200 text-center cursor-pointer">
                        <a href="#" className="text-primary font-bold font-sec text-lg">LETS GO FISHING</a>
                    </div>
                </nav>
            </div>

            <div className="mobile md:hidden z-50">
                <nav className="px-3 py-2 bg-primary text-white flex items-center justify-between">
                    <div>
                        <Link href={''} className="font-primary"><span className="text-2xl text-secondary">B</span>OW FISHING <br></br><span className="text-2xl text-secondary">X</span>TREME ADVENTURES</Link>
                    </div>
                    <div onClick={handleMenuClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-secondary">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </div>
                </nav>

                <div className={`z-50 overlay ${isOpen ? 'w-full':'w-0'} bg-teal-300 absolute h-full top-0 opacity-45 duration-300 transition-all ease-in`} onClick={handleMenuClick}></div>
                <div className={`z-50 ${isOpen ? 'w-[80%]':'w-0'} absolute h-full bg-primary top-0 overflow-hidden ${isOpen ? 'duration-300':'duration-150'}  transition-all ease-in`}>
                    <div className='z-50 flex flex-col px-4 py-5 gap-y-8 text-lg font-sec text-white whitespace-nowrap'>
                        <Link href={'/fishing-charters'} className='' onClick={handleMenuItemclick}>FISHING CHARTERS</Link>
                        <Link href={'about-us'} className='' onClick={handleMenuItemclick}>ABOUT US</Link>
                        <Link href={'rentals'} className='' onClick={handleMenuItemclick}>RENTALS</Link>
                        <Link href={'/#faq'} className='' onClick={handleMenuItemclick}>FAQS</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
