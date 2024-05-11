import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import example from '../../public/imgs/example.webp'
export default function Section2() {
  return (
    <div className='max-w-[90%] mx-auto py-6'>
        <h3 className='text-center text-primary font-bold font-sec text-3xl mt-8'>Why Srilakna Bowfishing?</h3>
        <h2 className='text-center text-5xl font-primary my-4'>The number one destination for bowfishing in East Texas</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
            <Image src={example} width={'100%'} height={'90%'} alt='Hello' />
            <div className='px-4 flex justify-center flex-col gap-y-4'>
                <h3 className='font-bold font-primary text-primary text-2xl'>A Texas Parks and Wildlife Elite Angler award winner</h3>
                <p className='font-sec pb-2 text-xl'>BT Outdoors is a Texas Parks and Wildlife Elite Angler Award holder and the holder of several lake and river records. We offer guided bowfishing trips for families, groups, parties and special occasions.</p>
                <p className='font-sec pb-2 text-xl'>BT Outdoors is a Texas Parks and Wildlife Elite Angler Award holder and the holder of several lake and river records. We offer guided bowfishing trips for families, groups, parties and special occasions.</p>
                <div className='flex items-center gap-3 flex-wrap'>
                <Link href='' className='border border-primary text-primary font-sec px-4 py-2 text-xl hover:bg-secondary duration-200 transition-all'>CALL TO BOOK</Link>
                <Link href={''} className='text-primary font-bold text-xl font-sec underline underline-offset-2'>Having Questions ? Read FAQs</Link>
            </div>
            </div>

            
        </div>

    </div>
  )
}
