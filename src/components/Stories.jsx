import React from 'react'
import {motion} from 'framer-motion'
export default function Stories({ darkShit }) {
  return (
    <div className='flex items-center w-full justify-center p-3'>
      <div className='grid grid-rows-2 items-center justify-center lg:grid-cols-2'>
        <div className='flex flex-col items-center justify-center'>
          <p className='text-[60px] sedan-regular text-center w-[360px] '>
            telling stories going a little deeper
          </p>
          <p>__________________________</p>
          <p className='w-[360px] text-[20px] text-center'>We love being surrounded by happy people,
sharing with them some of their most
unforgettable moments of their life.</p>
<p className='pt-5 w-[360px] text-center text-[20px]'>Our goal is telling stories going a little deeper,
catching the unscripted moments of life.</p>
<motion.div whileHover={{scale:1.1, }} transition={{
  ease: "linear",
  duration: 0.5,
 
}} initial={{scale:1.0}} className='items-center flex justify-center pt-10'><img src='bride.png' className='w-[50%]'/></motion.div>
        </div>
        <div className='flex flex-col items-center justify-center relative'>
 
  <img src='lake.png' alt='Lake' className=' lg:pt-[0px]    w-[350px] z-10 pb-20  lg:w-full     ' />
  <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ ease: "linear", duration: 0.5 }}
            initial={{ scale: 1.0 }} className='border-[#d2c69e] border-2 w-[230px] lg:w-[230px] py-5  lg:p-4 justify-center items-center flex'>
            <p className={`${darkShit?'text-[#000]':'text-[#d2c69e]'}`}>OUR APPROACH</p>
          </motion.div></div>
</div>
      
    </div>
  )
}