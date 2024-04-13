import React from 'react'

export default function About({darkShit}) {
  return (
    <div className=' flex h-full'>
    <div className='flex-row justify-center flex items-center '>
        <div>
        <p className='hidden md:flex lg:flex rot'>About Us</p>
        </div>
     <div className=''>
        <div className='absolute flex-row flex items-center lg:px-1 md:px-0 px-5 w-[360px] md:w-[700px] lg:w-[950px] justify-between'><p className="font-fac sedan-regular md:text-[50px] dm-serif text-[30px] lg:text-[70px] text-black">
  cinematic
  <br />
  &nbsp;&nbsp;&nbsp;&nbsp;& timeless
</p>
<p className='text-black text-[12px] font-bold md:text-md lg:text-xl'>WEDDING <br />PHOTOGRAPHERS</p>
</div>
        <img src='wed.png' className='lg:w-[1100px] '/>
      <div className='items-center flex flex-col'><p className='text-center px-5 pt-10 lg:text-2xl md:text-xl  text-md'>Hello, we are Mary & Maurizio,
<br />husband & wife, destination wedding photographers.</p>
<p className='text-center mx-auto px-5 pt-5'>We passionately capture your love stories in
Amalfi Coast, Tuscany, Como Lake, Apulia and abroad.
<br />Our couples celebrate authentic and meaningful
<br />weddings with breathtaking backdrops, surrounded by
<br />the people they love.</p></div>  
        </div> 
      <div>
        <p className='rotate-90 md:flex md:w-full  lg:flex hidden'>Contact Us</p>
        </div>
    </div></div>
  )
}
