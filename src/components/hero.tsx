
import Image from 'next/image'

const Hero = () => {
  return (

<section
      className="relative mx-6 sm:px-4 md:px-8 lg:mx-auto xl:px-4 h-[400px] md:h-[500px] lg:h-[600px] 
      bg-cover bg-no-repeat overflow-hidden flex items-center"
    >
      <Image 
        src="/herobackground.jpg" 
        alt="hero"
        height={717}
        width={2000}
        className="absolute top-0 left-0 w-full h-full object-cover object-center -z-10" 
        priority 
      />

      
      <div
        className="absolute top-1/2 right-0 transform -translate-y-1/2 
        w-full max-w-[90%] sm:max-w-[75%] md:max-w-[60%] lg:max-w-[50%] xl:max-w-[40%] 
        h-auto sm:h-[400px] bg-[#FFF3E3] 
        p-4 sm:p-8 md:p-10 lg:p-12 xl:p-14 z-10"
      >
        
        <div className="flex justify-start h-12 p-2">
          <h1 className="text-[#333333] text-lg sm:text-xl md:text-2xl font-semibold">New Arrival</h1>
        </div>

      
        <div className="flex flex-col p-2 space-y-4">
          <h1 className="font-bold text-[#B88E2F] text-3xl sm:text-4xl md:text-5xl">Discover Our New Collection</h1>
          <p className="font-medium text-[#333333] text-sm sm:text-base md:text-lg">
            Discover the latest additions to our exclusive furniture collection, where style meets functionality.
            Embrace the perfect balance of aesthetics and comfort with our newest furniture offerings.
          </p>

         
          <button className="bg-[#B88E2F] text-[#FFFFFF] font-medium text-lg sm:text-xl h-10 w-36 p-1 mt-4 cursor-pointer hover:bg-[#e8cd8f] hover:text-[#333333]">
            Buy Now
          </button>
        </div>
      </div>
    </section>


  )
}

export default Hero

