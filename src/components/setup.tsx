import Image from "next/image";

const Setup = () => {
  return (
    <section className="w-full mt-7 px-4">
    {/* Heading */}
    <div className="flex flex-col items-center text-center mb-10">
      <p className="font-semibold text-[#616161] text-xl mt-20">Share your setup with</p>
      <h1 className="font-bold text-[#3A3A3A] text-5xl mt-4">#Furniro Furniture</h1>
    </div>

    {/* Responsive Image Grid */}
    <div className="grid gap-4 sm:gap-6 md:gap-8 lg:gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 items-start justify-items-center">
      
      {/* Image 1 */}
      <div className="w-full max-w-[274px] bg-white">
        <Image 
          src="/setup/Rectangle 36 (1).jpg" 
          alt="rack" 
          width={274} 
          height={382} 
          layout="responsive" 
          className="object-cover" 
        />
      </div>

      {/* Image 2 */}
      <div className="w-full max-w-[451px] bg-white">
        <Image 
          src="/setup/Rectangle 38.jpg" 
          alt="rack" 
          width={451} 
          height={312} 
          layout="responsive" 
          className="object-cover" 
        />
      </div>

      {/* Image 3 */}
      <div className="w-full max-w-[295px] bg-white">
        <Image 
          src="/setup/Rectangle 40.jpg" 
          alt="rack" 
          width={295} 
          height={392} 
          layout="responsive" 
          className="object-cover" 
        />
      </div>

      {/* Image 4 */}
      <div className="w-full max-w-[290px] bg-white">
        <Image 
          src="/setup/Rectangle 43.jpg" 
          alt="rack" 
          width={290} 
          height={290} 
          layout="responsive" 
          className="object-cover" 
        />
      </div>

      {/* Image 5 */}
      <div className="w-full max-w-[425px] bg-white">
        <Image 
          src="/setup/Rectangle 45.jpg" 
          alt="rack" 
          width={425} 
          height={433} 
          layout="responsive" 
          className="object-cover" 
        />
      </div>

      {/* Additional Images */}
      <div className="w-full max-w-[381px] bg-white">
        <Image 
          src="/setup/Rectangle 37 (1).jpg" 
          alt="rack" 
          width={381} 
          height={323} 
          layout="responsive" 
          className="object-cover" 
        />
      </div>

      <div className="w-full max-w-[344px] h-[450px] bg-white relative">
        <Image 
          src="/setup/Rectangle 39.jpg" 
          alt="woodentables" 
          layout="fill" 
          objectFit="cover" 
        />
      </div>

      <div className="w-full max-w-[500px] h-[400px] bg-white relative">
        <Image 
          src="/setup/Rectangle 41.jpg" 
          alt="Vase" 
          layout="fill" 
          objectFit="cover" 
        />
      </div>

      <div className="w-full max-w-[258px] h-[300px] bg-white relative"> {/* Set a custom height */}
      <Image 
        src="/setup/Rectangle 44.jpg" 
        alt="kitchen" 
        layout="fill"
        objectFit="cover" 
 
      />
    </div>
    </div>
  </section>
  )
}

export default Setup

{/* <div className="w-full max-w-[258px] bg-white">
        <Image 
          src="/setup/Rectangle 44.jpg" 
          alt="rack" 
          width={258} 
          height={296} 
          layout="responsive" 
          className="object-cover" 
        />
      </div> */}