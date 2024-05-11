import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import thumb from '../../public/imgs/thumb.png'
import quote from '../../public/imgs/quote.svg'
export default function Section3() {
  return (
    <div className='max-w-[90%] mx-auto py-8 '>
        <h2 className='text-3xl font-bold font-sec text-primary'>How much does it cost?</h2>
        <h3 className='font-primary text-6xl my-4'>A simple per person cost</h3>
   
        <div className='grid grid-cols-1 md:grid-cols-2 py-8'>
            <div className='py-5'>
                <h4 className='font-primary text-primary text-3xl'>Booking cost</h4>
                <p className='font-sec text-xl'>Minimum of 4 guests required to book (max 12).</p>
                <p className='font-primary mt-6 text-primary text-6xl'>$125 <span className='font-sec text-xl'>/ person</span></p>
                <p className='font-sec text-xl'>Booking fee assessed the day of your trip</p>
                <div className='flex gap-3 items-center my-4 flex-wrap'>
                    <Link href={''} className='font-sec border border-primary px-6 py-2 text-xl text-primary hover:bg-secondary duration-200 transition-all'>CHECK PRICING</Link>
                    <Link href={''} className='text-primary font-bold text-xl font-sec underline underline-offset-2'>Having Questions ? Read FAQs</Link>
                </div>
            </div>
            <div className='bg-gray-100 flex flex-col justify-center rounded-md p-4'>
                <p className='text-3xl font-sec '>{'"'}Our bridal party had such a great time on the water bowfishing! It was a first time for us bowfishing, but it certainly won{"'"}t be the last.{'"'}</p>
                <div className='flex items-center justify-between mt-4'> 
                    <div className='flex items-center gap-3'>
                        <Image src={thumb} width={46} height={46} alt='thumbnail' className='rounded-full border-2 border-primary'></Image>
                        <p className='text-primary font-sec text-xl font-bold'>Grace Bradson</p>
                    </div>
                    <Image src={quote} width={40} height={40} alt='quote' />
                </div>
            </div>
        </div>
    </div>
  )
}
