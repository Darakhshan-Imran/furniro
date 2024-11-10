import React from 'react'
import Image from 'next/image'

const OurProducts = () => {
  return (
    <section className='h-full sm:h-[1084px] w-full mt-30 flex flex-col justify-center items-center'>
      <div className='flex justify-center mt-20'>
        <h1 className=' font-bold text-xl sm:text-2xl md:text-4xl lg:text-4xl font-[#3A3A3A] py-2 mt-10'>OUR PRODUCTS</h1>
      </div>

     <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 mt-10 gap-2 sm:gap-3 md:gap-4'>
      
        <div className='w-[285px] h-[450px]  bg-[#F4F5F7]'>
        <Image src="/products/image1.jpg" alt="image1"
        width={285}
        height={301}/>

        <p className='flex justify-start text-[#3A3A3A] font-semibold text-xl mt-5 mx-3 p-2'>Syltherine</p>
        <p  className=' text-[#3A3A3A] font-medium mx-3 p-2'>Stylish corner table</p>
        <p className='flex justify-start text-[#3A3A3A] font-semibold text-l mx-3 p-2'>Rs 125,000 <del className=' text-[#3A3A3A] font-medium text-sm mx-5'>Rs 150,000</del></p>
      </div>

      <div className='w-[285px] h-[450px]  bg-[#F4F5F7]'>
        <Image src="/products/image2.jpg" alt="image2"
        width={285}
        height={301}/>

      <p className='flex justify-start text-[#3A3A3A] font-semibold text-xl mt-5 mx-3 p-2'>Leviosa</p>
        <p  className=' text-[#3A3A3A] font-medium mx-3 p-2'>Stylish cafe chair</p>
        <p className='flex justify-start text-[#3A3A3A] font-semibold text-l mx-3 p-2'>Rs 100,000</p>
      </div>

      <div className='w-[285px] h-[450px]  bg-[#F4F5F7]'>
        <Image src="/products/image3.jpg" alt="image3"
        width={285}
        height={301}/>

        <p className='flex justify-start text-[#3A3A3A] font-semibold text-xl mt-5 mx-3 p-2'>Lolito</p>
        <p  className=' text-[#3A3A3A] font-medium mx-3 p-2'>Luxury big sofa</p>
        <p className='flex justify-start text-[#3A3A3A] font-semibold text-l mx-3 p-2'>Rs 175,000 <del className=' text-[#3A3A3A] font-medium text-sm mx-5'>Rs 200,000</del></p>
      </div>

      <div className='w-[285px] h-[450px]  bg-[#F4F5F7]'>
        <Image src="/products/image4.jpg" alt="image4"
        width={285}
        height={301}/>

        <p className='flex justify-start text-[#3A3A3A] font-semibold text-xl mt-5 mx-3 p-2'>Respira</p>
        <p  className=' text-[#3A3A3A] font-medium mx-3 p-2'>Center table and Six seater sofa</p>
        <p className='flex justify-start text-[#3A3A3A] font-semibold text-l mx-3 p-2'>Rs 500,000 </p>
      </div>
      

      
        <div className='w-[285px] h-[450px]  bg-[#F4F5F7]'>
        <Image src="/products/image5.jpg" alt="image5"
        width={285}
        height={301}/>

        <p className='flex justify-start text-[#3A3A3A] font-semibold text-xl mt-5 mx-3 p-2'>Grifo</p>
        <p  className=' text-[#3A3A3A] font-medium mx-3 p-2'>Night lamp</p>
        <p className='flex justify-start text-[#3A3A3A] font-semibold text-l mx-3 p-2'>Rs 75,000</p>
      </div>

      <div className='w-[285px] h-[450px]  bg-[#F4F5F7]'>
        <Image src="/products/image6.jpg" alt="image6"
        width={285}
        height={301}/>

        <p className='flex justify-start text-[#3A3A3A] font-semibold text-xl mt-5 mx-3 p-2'>Greyno</p>
        <p  className=' text-[#3A3A3A] font-medium mx-3 p-2'>Lounge sofa</p>
        <p className='flex justify-start text-[#3A3A3A] font-semibold text-l mx-3 p-2'>Rs 550,000</p>
      </div>

      <div className='w-[285px] h-[450px]  bg-[#F4F5F7]'>
        <Image src="/products/image7.jpg" alt="image7"
        width={285}
        height={301}/>

        <p className='flex justify-start text-[#3A3A3A] font-semibold text-xl mt-5 mx-3 p-2'>Comforty</p>
        <p  className=' text-[#3A3A3A] font-medium mx-3 p-2'>Luxury comfortable sofa</p>
        <p className='flex justify-start text-[#3A3A3A] font-semibold text-l mx-3 p-2'>Rs 550,000 <del className=' text-[#3A3A3A] font-medium text-sm mx-5'>Rs 600,000</del></p>
      </div>

      <div className='w-[285px] h-[450px]  bg-[#F4F5F7]'>
        <Image src="/products/image8.jpg" alt="image8"
        width={285}
        height={301}/>

        <p className='flex justify-start text-[#3A3A3A] font-semibold text-xl mt-5 mx-3 p-2'>Choco</p>
        <p  className=' text-[#3A3A3A] font-medium mx-3 p-2'>Comfy two seater</p>
        <p className='flex justify-start text-[#3A3A3A] font-semibold text-l mx-3 p-2'>Rs 500,000</p>
      </div>
  
      <div className='flex items-center mt-8'>
        <button className='flex items-center justify-center py-3 my-2 w-[245px] h-[48px] text-[#B88E2F] bg-[#FFFFFF] border-2 border-[#B88E2F] hover:bg-[#B88E2F] hover:text-[#FFFFFF]'>SHOW MORE</button>
      </div>
      </div>
   
    </section>
  )
}

export default OurProducts
