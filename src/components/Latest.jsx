import React from 'react';
import { motion } from 'framer-motion';

export default function Latest({darkShit}) {
  return (
    <div className='flex flex-col mt-[100px]  lg:mt-[-900px] items-center justify-center text-center'>
      <p className='text-2xl font-extrabold mb-4'>LATEST STORIES</p>
      <motion.div className='motion-safe:animate-bounce'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
        </svg>
      </motion.div>

      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
        <div className=' p-4 '>
          <img src='tus.png' className='w-[576px] h-auto mb-2 '  alt='Tuscany' />
       <div className='flex-row flex items-center p-4 justify-center'>
         <motion.div    initial={{ rotate: "315deg", y: 0 }}
           
            whileHover={{rotate: "360deg",}}
            transition={{ duration: 1, ease: "backInOut" }}
            > <p>________</p></motion.div>
          <p className='font-thin lg:w-[600px] w-[300px] md:w-[400px] '>TUSCANY</p></div>
          <p className='lg:text-2xl md:text-xl lg:w-[600px] w-[300px] md:w-[400px]  text-left text-lg font-bold'>A Timeless Tuscan Wedding at Terre di Nano</p>
        </div>
        <div className=' p-4 rounded-lg'>
          <img src='wedi.png' className='w-full h-auto mb-2' alt='Worldwide' />
           <div className='flex-row flex items-center p-4 justify-center'>
         <motion.div    initial={{ rotate: "315deg", y: 0 }}
           
            whileHover={{rotate: "360deg",}}
            transition={{ duration: 1, ease: "backInOut" }}
            > <p>________</p></motion.div>
          <p className='font-thin lg:w-[600px] w-[300px] md:w-[400px] '>WORLDWIDE</p></div>
          <p className='lg:text-2xl md:text-xl lg:w-[600px] w-[300px] md:w-[400px]  text-left text-lg font-bold'>Hawaiian Vows Captured: The Wedding Photography Story of Nick & Bri in Honolulu</p>
        </div>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
        <div className=' p-4 rounded-lg'>
          <img src='tus.png' className='w-full h-auto mb-2' alt='Tuscany' />
           <div className='flex-row flex items-center p-4 justify-center'>
         <motion.div    initial={{ rotate: "315deg", y: 0 }}
           
            whileHover={{rotate: "360deg",}}
            transition={{ duration: 1, ease: "backInOut" }}
            > <p>________</p></motion.div>
          <p className='font-thin lg:w-[600px] w-[300px] md:w-[400px] '>Amalfi Coast</p></div>
          <p className='lg:text-2xl md:text-xl lg:w-[600px] w-[300px] md:w-[400px]  text-left text-lg font-bold'>An Amalfi Coast Affair: Cliff and Leszek's Fashion-Forward Wedding Charm</p>
        </div>
        <div className=' p-4 rounded-lg'>
          <img src='wedd.png' className='w-[576px]  h-auto mb-2' alt='Worldwide' />
           <div className='flex-row flex items-center p-4 justify-center'>
         <motion.div    initial={{ rotate: "315deg", y: 0 }}
           
            whileHover={{rotate: "360deg",}}
            transition={{ duration: 1, ease: "backInOut" }}
            > <p>________</p></motion.div>
          <p className='font-thin lg:w-[600px] w-[300px] md:w-[400px] '>TUSCANY</p></div>
          <p className='lg:text-2xl md:text-xl lg:w-[600px] w-[300px] md:w-[400px]  text-left text-lg font-bold'>Enchanting Autumn Wedding in Siena, Tuscany</p>
        </div>
      </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
        <div className=' p-4 rounded-lg'>
          <img src='ama.png' className='w-[576px] h-auto mb-2' alt='Tuscany' />
           <div className='flex-row flex items-center p-4 justify-center'>
         <motion.div    initial={{ rotate: "315deg", y: 0 }}
           
            whileHover={{rotate: "360deg",}}
            transition={{ duration: 1, ease: "backInOut" }}
            > <p>________</p></motion.div>
          <p className='font-thin lg:w-[600px] w-[300px] md:w-[400px]'>TUSCANY</p></div>
          <p className='lg:text-2xl md:text-xl lg:w-[600px] w-[300px] md:w-[400px]  text-left text-lg font-bold'>A Timeless Tuscan Wedding at Terre di Nano</p>
        </div>
        <div className=' p-4 rounded-lg'>
          <img src='am.png' className='w-full h-auto mb-2' alt='Worldwide' />
           <div className='flex-row flex items-center p-4 justify-center'>
         <motion.div    initial={{ rotate: "315deg", y: 0 }}
           
            whileHover={{rotate: "360deg",}}
            transition={{ duration: 1, ease: "backInOut" }}
            > <p>________</p></motion.div>
          <p className='font-thin lg:w-[600px] w-[300px] md:w-[400px]'>WORLDWIDE</p></div>
          <p className='lg:text-2xl md:text-xl lg:w-[600px] w-[300px] md:w-[400px]  text-left text-lg font-bold'>Hawaiian Vows Captured: The Wedding Photography Story of Nick & Bri in Honolulu</p>
        </div>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
        <div className=' p-4 rounded-lg'>
          <img src='wo.png' className='w-full h-auto mb-2' alt='Tuscany' />
           <div className='flex-row flex items-center p-4 justify-center'>
         <motion.div    initial={{ rotate: "315deg", y: 0 }}
           
            whileHover={{rotate: "360deg",}}
            transition={{ duration: 1, ease: "backInOut" }}
            > <p>________</p></motion.div>
          <p className='font-thin lg:w-[600px] w-[300px] md:w-[400px]'>WORLDWIDE</p></div>
          <p className='lg:text-2xl md:text-xl lg:w-[600px] w-[300px] md:w-[400px]  text-left text-lg font-bold'>Wedding in Tuscany – Borgo Stomennano Siena – Julie and Matthew</p>
        </div>
        <div className=' p-4 rounded-lg'>
          <img src='br.png' className='w-[576px] h-auto mb-2' alt='Worldwide' />
           <div className='flex-row flex items-center p-4 justify-center'>
         <motion.div    initial={{ rotate: "315deg", y: 0 }}
           
            whileHover={{rotate: "360deg",}}
            transition={{ duration: 1, ease: "backInOut" }}
            > <p>________</p></motion.div>
          <p className='font-thin lg:w-[600px] w-[300px] md:w-[400px]'>TUSCANY</p></div>
          <p className='lg:text-2xl md:text-xl lg:w-[600px] w-[300px] md:w-[400px]  text-left text-lg font-bold'>Wedding in Tuscany – Borgo Stomennano Siena – Julie and Matthew</p>
        </div>
      </div>
   <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ ease: "linear", duration: 0.5 }}
            initial={{ scale: 1.0 }} className='border-[#d2c69e] border-2 w-[230px] lg:w-[350px]   py-6 justify-center items-center flex'>
            <p className={`${darkShit?'text-[#000]':'text-[#d2c69e]'}`}>VIEW ALL PORTFOLIO</p>
          </motion.div>

          <div className='p-10'><p className='font-semibold lg:text-xl text-sm md:text-md'>DESTINATION WEDDING AND ELOPEMENT PHOTOGRAPHERS</p></div>
    </div>
  );
}
