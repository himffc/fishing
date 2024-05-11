"use client";
import React, { useEffect, useState } from 'react'

export default function FComp1() {
  const [innerw,setInnerW] = useState()
  useEffect(()=>{
    setInnerW(window.innerWidth)
  },[])
  return (
    <div className={` ${innerw >420 ? 'bgimg':'mobimg'} h-52 bg-cover bg-no-repeat bg-center overlay`}>
      
    </div>
  )
}
