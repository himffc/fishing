"use client";
import React, { useEffect, useState } from 'react'

export default function Section1() {
    const [screenWidth, setScreenWidth] = useState()

  useEffect(() => {
    setScreenWidth(window.innerWidth)
  }, []);
  console.log('sc ',screenWidth);
  return (
    <section className="">
        <div className={`relative 
        ${screenWidth>420 ? 'bgimg':'mobimg'} bg-no-repeat bg-cover h-[500px] w-full`} >
            <div className="absolute inset-0 bg-cyan-950 opacity-50 z-30"></div>
            <div className='flex flex-col justify-center items-center gap-y-4 h-full '>
                <h2 className='font-primary text-secondary z-40 sm:text-md text-wrap md:text-4xl'>WELCOME TO YOUR NEW ADDICTION</h2>
                <h1 className='text-6xl text-center md:text-8xl font-sec font-bold text-white z-40'>{`LET'S`} GO BOWFISHING</h1>
                <h3 className='text-white font-sec z-40 font-bold text-md md:text-xl text-center'>EXPERIENCE ONE OF CENTRAL TEXAS BEST GUIDED BOWFISHING ADVENTURES</h3>

                <div className="bg-secondary py-2 px-8 text-xl rounded-sm hover:shadow-sm hover:shadow-teal-200 text-center cursor-pointer z-40">
                        <a href="#" className="text-primary font-bold font-sec text-lg">LETS GO FISHING</a>
                    </div>
            </div>
        </div>
    </section>
  )
}
