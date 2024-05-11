"use client"
import React,{useState} from 'react'

export default function FaqComponent() {
    const [isOpen,setisOpen] = useState(false)
    const handleFaqClick=()=>{
        setisOpen(!isOpen)
    }
    return (
        <div className='max-w-[90%] md:max-w-[55%] mx-auto border-b border-gray-200 py-4 cursor-pointer'>
            <div className='flex justify-between items-center gap-x-4' onClick={handleFaqClick}>
                <p className='font-primary text-xl'>This is question 1 long text with name?</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-6 h-6 ${isOpen ? 'rotate-180':'rotate-0'} duration-150 transition-all ease-in-out'`}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                </svg>
            </div>
            <div className={`mt-4 overflow-hidden ${isOpen ? 'h-auto':'h-0'} duration-150 transition-all ease-in-out`}>
                <p className='font-sec text-xl'>Bowfishing trips typically last 6 hours in total on the water. We will begin at dark and will bowfish for 4-5 hours(dependent on weather and water conditions). Trip lengths can be made flexible to suit customer needs.</p>
            </div>
        </div>
    )
}
