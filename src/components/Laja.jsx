import React from 'react';
import { motion } from 'framer-motion';

export default function Laja({darkShit}) {
  return (
    <div className='w-full h-full'>
      <div className='items-center flex justify-center' style={{backgroundImage: `url('map.png')`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh'}}>
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ ease: "linear", duration: 0.5 }}
          initial={{ scale: 1.0 }}
          className='border-[#d2c69e] border-2 w-[230px] lg:w-[350px] py-6 justify-center items-center flex'
        >
          <p className={`${darkShit?'text-[#000]':'text-[#d2c69e]'}`}>REMAKE BY LAJA</p>
        </motion.div>
      </div>
    </div>
  );
}
