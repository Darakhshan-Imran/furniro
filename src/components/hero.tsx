import Image from 'next/image';

const Hero = () => {
  return (
    <section
      className="relative mx-auto h-[400px] md:h-[500px] lg:h-[600px] 
      bg-cover bg-no-repeat overflow-x-hidden flex items-center w-full"
    >
      {/* Background Image */}
      <Image
        src="/herobackground.jpg"
        alt="hero"
        height={717}
        width={2000}
        className="absolute top-0 left-0 w-full h-full object-cover object-center -z-10"
        priority
      />

      {/* Content */}
      <div
        className="absolute top-1/2 right-7 transform -translate-y-1/2 
        w-full max-w-[90%] sm:max-w-[75%] md:max-w-[60%] lg:max-w-[50%] xl:max-w-[40%] 
        bg-[#FFF3E3] p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 z-10 mx-auto rounded-md shadow-md"
      >
        {/* Heading Section */}
        <div className="flex flex-col gap-4">
          <h1 className="text-[#333333] text-lg sm:text-xl md:text-2xl font-semibold">
            New Arrival
          </h1>
          <h1 className="font-bold text-[#B88E2F] text-3xl sm:text-4xl md:text-5xl">
            Discover Our New Collection
          </h1>
          <p className="font-medium text-[#333333] text-sm sm:text-base md:text-lg">
            Discover the latest additions to our exclusive furniture collection, where style meets functionality.
            Embrace the perfect balance of aesthetics and comfort with our newest furniture offerings.
          </p>
        </div>

        {/* Button */}
        <button
          className="bg-[#B88E2F] text-[#FFFFFF] font-medium text-lg sm:text-xl h-10 w-36 mt-6
          cursor-pointer hover:bg-[#e8cd8f] hover:text-[#333333] rounded transition-colors"
        >
          Buy Now
        </button>
      </div>
    </section>
  );
};

export default Hero;


