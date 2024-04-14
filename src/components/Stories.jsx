import React from 'react';
import { motion } from 'framer-motion';

export default function Stories({ darkShit }) {
  return (
    <div className='flex flex-col items-center justify-center p-3'>
      <div className='flex items-center lg:w-[1350px] mx-auto md:w-[800px] w-[350px] justify-between flex-col  lg:flex-row'>
        <div className='flex flex-col items-center lg:w-[600px] mx-auto md:w-[400px] w-[150px] justify-center'>
          <p className='md:text-[40px] text-[30px] lg:text-[60px] sedan-regular text-center w-[340px]'>
            telling stories going a little deeper
          </p>
          <p>______________________________</p>
          <p className='w-[340px] text-[20px] text-center'>
            We love being surrounded by happy people, sharing with them some of their most unforgettable moments of their life.
          </p>
          <p className='pt-5 w-[340px] text-center text-[20px]'>
            Our goal is telling stories going a little deeper, catching the unscripted moments of life.
          </p>
        </div>

        <div className='flex flex-col  items-center justify-center relative '>
                  <div className='pt-20 items-center justify-center flex'>
          {/* <img src='map.png' className='w-[300px] lg:w-[600px] pt-[700px]' alt='Map' /> */}
          <img src='lake.png' alt='Lake' className='  w-full h-full' />
        </div></div>
      </div>
      <div className='grid grid-rows-2 items-center justify-center lg:grid-cols-2'>
        <div className='flex flex-col items-center justify-center'>
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ ease: "linear", duration: 0.5 }}
            initial={{ scale: 1.0 }}
            className='items-center flex justify-center pt-10'
          >
            <img src='bride.png' className='w-[50%]' />
          </motion.div>
        </div>
        <div className='flex flex-col items-center justify-center relative'>
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ ease: "linear", duration: 0.5 }}
            initial={{ scale: 1.0 }} className='border-[#d2c69e] border-2 w-[230px] lg:w-[230px] py-5  lg:p-4 justify-center items-center flex'>
            <p className={`${darkShit?'text-[#000]':'text-[#d2c69e]'}`}>OUR APPROACH</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}