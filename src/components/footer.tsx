import React from 'react'

const Footer = () => {
  return (

    <section className='flex flex-col justify-center '>
    <div className='flex w-full h-[505px] mt-11 border-t-2 border-t-[#D9D9D9]'>

        <div className='flex flex-col w-[20%] h-[60%] mt-[6rem] mx-[5rem]'>
            <p className='text-2xl font-semibold text-[#000000] mx-14 py-5'>Furniro.</p>
            <p className='text-m text-[#9F9F9F] justify-center px-5 mt-3 mx-10'>University Road Suite 200, Karachi, PAKISTAN</p>
        </div>
        
        <div className='flex flex-col justify-start items-start w-[90px] h-[312px] mt-[6rem] mx-[5rem]'>
            
            <p className=' text-[#9F9F9F] font-medium px-3 mt-3'>Links</p>
            <button className=' font-medium text-[#000000] px-3 mt-10'>Home</button>
            <button className=' font-medium text-[#000000] px-3 mt-10'>Shop</button>
            <button className=' font-medium text-[#000000] px-3 mt-10'>About</button>
            <button className=' font-medium text-[#000000] px-3 mt-10'>Contact</button>
        </div>

        <div className='flex flex-col justify-start items-start w-[12rem] h-[312px] mt-[6rem] mx-[5rem]'>
            
            <p className=' text-[#9F9F9F] font-medium px-3 mt-3'>Help</p>
            <button className=' font-medium text-[#000000] px-3 mt-10'>Payment Options</button>
            <button className=' font-medium text-[#000000] px-3 mt-10'>Returns</button>
            <button className=' font-medium text-[#000000] px-3 mt-10'>Payment Policies</button>
            
        </div>

        <div className='flex justify-start items-start w-[30rem] h-[101px] mt-[6rem] mx-[2px]'>
            
            <p className=' text-[#9F9F9F] font-medium px-3 mt-3'>Newsletter</p>
            <button className=' font-medium text-[#000000] px-3 mt-12 mx-[-6rem] underline underline-offset-8'>Enter Your Email Address</button>
            <button className=' font-semibold text-[#000000] px-3 mt-12 mx-[7.5rem] underline underline-offset-8'>SUBSCRIBE</button>
         </div>

    </div>

    <div className='flex w-[70rem] h-[5rem] mx-40 border-t-2 border-t-[#D9D9D9]'>

        <p className='text-[#000000] mx-5 mt-5'>2023 furniro. All rights reverved</p>

        </div>
    </section>
    

    
  )
}

export default Footer