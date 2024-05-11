import React from 'react'
import FaqComponent from './faqComponent'

export default function Section5() {
  return (
    <div id='faq' className='max-w-[90%] mx-auto py-12'>
      <p className='text-primary font-sec text-2xl text-center'>Have Any Questions ?</p>
      <h3 className='text-center font-primary  text-6xl mt-4'>Questions With Answers</h3>
      <div className='py-12'>
        <FaqComponent />
        <FaqComponent />
        <FaqComponent />
      </div>
    </div>
  )
}
