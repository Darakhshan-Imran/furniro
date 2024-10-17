
import Image from 'next/image'

const Hero = () => {
  return (

    <section className='mx-6 sm:px-4 md:px-8 lg:mx-auto xl:px-4'>

      
    <Image src="/herobackground.jpg" alt ="hero"
      height={716.83}
      width={2000}
      className="w-full h-auto object-cover"/>
    <div className= 'absolute top-1/2 right-0 transform -translate-y-[120px] -translate-x-[120px] flex flex-col w-[643px] h-[443px] bg-[#FFF3E3] mt-6 sm:px-4 md:px-8 lg:mx-auto xl:px-4' >
      <div className='flex justify-start h-12 wx-3 p-2 mt-3 mx-4 '>
        <h1 className="text-[#333333] text-lg font-semibold p-4">New Arrival</h1>
      </div>

      <div className='h-4 w-2px mx-4 p-2'>
        <h1 className='font-bold text-[#B88E2F] text-5xl mt-4 p-2'>Discover Our New Collection</h1>
        <p className='font-medium justify-evenly text-[#333333] mt-5 mx-2 p-2'>Discover the latest additions to our exclusive furniture collection, where style meets functionality.
        Embrace the perfect balance of aesthetics and comfort with our newest furniture offerings. </p>

        <button className='bg-[#B88E2F] text-[#FFFFFF] text-center justify-center font-medium text-xl h-10 w-36 p-1 mt-5 mx-4 cursor-pointer hover:bg-[#e8cd8f] hover:text-[#333333]'>Buy Now</button>
      </div>
    </div>
     
     <div>
      
     </div>
      
    </section>
  )
}

export default Hero

// 'relative sm:absolute sm:top-1/2 sm:right-0 sm:transform sm:-translate-y-1/2 sm:translate-x-0 lg:-translate-x-[120px] flex flex-col w-full sm:w-[95%] max-w-[400px] sm:max-w-[500px] md:max-w-[643px] h-auto bg-[#FFF3E3] p-6'>

// relative absolute top-1/2 right-0 transform -translate-y-[120px] -translate-x-[120px] flex flex-col w-[643px] h-[443px] bg-[#FFF3E3] mt-6 sm:px-4 md:px-8 lg:mx-auto xl:px-4' >