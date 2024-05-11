import React from 'react'
import ins1 from '../../public/imgs/ins1.webp'
import ins2 from '../../public/imgs/ins2.webp'
import ins3 from '../../public/imgs/ins3.webp'
import insta from '../../public/imgs/insta.webp'
import Image from 'next/image'
import Link from 'next/link'
export default function Section4() {
  return (
    <div className='bg-black'>
        <div className='max-w-[90%] mx-auto py-12'>
            <p className='text-secondary font-sec text-xl'>WANT TO SEE MORE OF OUR HUNTS</p>
            <h3 className='text-4xl font-primary text-white'>FOLLOW US ON INSTAGRAM</h3>
            <div className='grid grid-cols-2 md:grid-cols-4 my-9 gap-4'>
                <Image src={ins1} width={330} height={440} alt=''/>
                <Image src={ins2} width={330} height={440} alt=''/>
                <Image src={ins3} width={330} height={440} alt=''/>
                <Image src={ins2} width={330} height={440} alt=''/>
            </div>
            <div className='flex items-center text-xl gap-x-4'>
                <Image src={insta} width={40} height={40} alt=''/>
                <p className='text-secondary font-sec'>Find more of our bowfishing photos on our <Link href={''} className='underline underline-offset-2 text-secondary font-sec hover:text-white duration-200 transition-all'>Instagram</Link>.</p>
            </div>
        </div>
    </div>
  )
}
