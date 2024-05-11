import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import FComp1 from './components/section1'

export default function FishingCharters() {
  return (
    <>
      <Navbar />
      <FComp1 />
      <div>
        <h3 className='font-primary text-white absolute top-[150px] z-50 text-4xl'>Fishing Charter Details</h3>
      </div>
      <Footer />
    </>
    
  )
}     
