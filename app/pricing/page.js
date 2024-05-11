import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Link from  'next/link'
import Image from 'next/image'
import visa from '../../public/imgs/visa.webp'
export default function Pricing() {
    return (
        <>
            <Navbar />
            <div className='max-w-[90%] mx-auto py-8'>
                <h3 className='font-primary  text-center text-6xl '>OUR PRICING</h3>
                <p className='text-secondary font-sec text-xl text-center'>GUIDED BOWFISIHING TRIPS</p>

                <div className='max-w-[90%] md:max-w-[70%] mx-auto mt-8'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                        <div className='border-2 p-6 flex flex-col rounded-md'>
                            <h4 className='text-2xl text-center font-sec my-6 font-bold text-primary'>4-HOUR NIGHT CHARTER</h4>
                            <p className='flex items-center font-sec gap-x-4'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                                $200 Per Person ( Max of 6 People )
                            </p>
                            <p className='flex items-center font-sec gap-x-4 my-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                                Ride-Alongs/Non-Shooter: $50 Per Person
                            </p>
                            <p className='flex items-center font-sec gap-x-4'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                                Additional Bowfishing Hours: $100/HR
                            </p>
                            <p className='flex items-center font-sec gap-x-4 my-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                                Most Trips 8:00 PM - 12:00 AM
                            </p>

                            <Link href={''} className="font-sec py-2 mt-4 border-2 border-primary text-center hover:text-white duration-300 transition-all hover:bg-primary">BOOK NOW</Link>
                        </div>
                        <div className='border-2 p-6 flex flex-col rounded-md'>
                            <h4 className='text-2xl text-center font-sec my-6 font-bold text-primary'>6-HOUR NIGHT CHARTER</h4>
                            <p className='flex items-center font-sec gap-x-4'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                                $200 Per Person ( Max of 6 People )
                            </p>
                            <p className='flex items-center font-sec gap-x-4 my-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                                Ride-Alongs/Non-Shooter: $50 Per Person
                            </p>
                            <p className='flex items-center font-sec gap-x-4'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                                Additional Bowfishing Hours: $100/HR
                            </p>
                            <p className='flex items-center font-sec gap-x-4 my-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                                Most Trips 8:00 PM - 12:00 AM
                            </p>

                            <Link href={''} className="font-sec py-2 mt-4 border-2 border-primary text-center hover:bg-primary hover:text-white duration-300 transition-all">BOOK NOW</Link>
                        </div>
                    </div>
                </div>

                <div className='flex items-center flex-col justify-center'>
                    <p className='font-sec text-gray-800 font-bold mt-8'>We Accept</p>
                    <div>
                        <Image src={visa} alt="" width={200} height={80}/>
                    </div>
                </div>
                <div className='mt-6 flex shadow-xl border p-4 justify-between items-center flex-wrap'>
                        <p className='font-sec text-xl'>Go on a one of a kind fishing adventure as unique as you are with the<br></br> best fishing guides in Idaho</p>
                    <Link href={''} className='font-sec  bg-primary  text-secondary px-6 py-2'>BOOK NOW</Link>
                </div>
            </div>
            <Footer />
        </>
    )
}
