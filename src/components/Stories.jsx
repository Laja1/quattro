import React from 'react'
import {motion} from 'framer-motion'
export default function Stories({ darkShit }) {
  return (
    <div className='flex items-center justify-center pt-0'>
      <div className='grid grid-rows-2 items-center justify-center lg:grid-cols-2'>
        <div className='flex flex-col items-center justify-center'>
          <p className='text-[60px] sedan-regular text-center w-[440px] '>
            telling stories going a little deeper
          </p>
          <p>__________________________</p>
          <p className='w-[440px] text-[20px] text-center'>We love being surrounded by happy people,
sharing with them some of their most
unforgettable moments of their life.</p>
<p className='pt-5 w-[440px] text-center text-[20px]'>Our goal is telling stories going a little deeper,
catching the unscripted moments of life.</p>
<motion.div whileHover={{scale:1.1, }} transition={{
  ease: "linear",
  duration: 0.5,
 
}} initial={{scale:1.0}} className='items-center flex justify-center pt-10'><img src='bride.png' className='w-[50%]'/></motion.div>
        </div>
        <div className='flex flex-col items-center justify-center relative'>
  <img src='map.png' className='w-full pt-[700px]  ' alt='Map' />
  <img src='lake.png' alt='Lake' className='absolute z-10 pb-20 h-[1000px]  lg:w-full     ' />
  <div className='border-[#f5f1e5] border-2 w-[160px]  lg:w-[230px] py-3 lg:p-4 justify-center items-center flex'><p className='text-[#f5f1e5]'>DIRECT MESSAGE</p></div></div>
</div>
      
    </div>
  )
}