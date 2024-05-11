import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import location from '../../public/imgs/location.svg'
import fb from '../../public/imgs/fb.png'
import insta from '../../public/imgs/insta.webp'
export default function Footer() {
  return (
    <div className='bg-primary'>
        <div className=' max-w-[95%] mx-auto py-8'>
            <h3 className='text-secondary font-sec text-xl text-center my-8'>Ready to Book ?</h3>
            <h2 className='text-white text-4xl md:text-7xl font-primary text-center my-8'>Call us to<br></br> book your trip</h2>

            <div className='flex justify-center items-center'>
                <Link href={'#'} className='hover:bg-secondary hover:text-primary duration-200 transition-all text-secondary font-sec border border-secondary px-6 py-4'>CALL +1 0000000000</Link>
            </div>


            <div className='flex justify-evenly items-center my-8 flex-wrap gap-y-4'>
                <div className='flex items-center gap-x-3'>
                    <Image src={fb} width={24} height={24} alt='' />
                    <Image src={insta} width={24} height={24} alt='' />
                </div>
                <div className='font-sec text-white text-md text-center'>© 2024 BF XTREME ADVENTURES. ALL RIGHTS RESERVED.</div>
                <div className='flex items-center gap-x-4'>
                    <Image src={location} width={18} height={18} alt='' className=''/>
                    <p className='text-white font-sec text-md'>Moratuva , Srilanka</p>
                </div>
            </div>
        </div>
    </div>
  )
}
