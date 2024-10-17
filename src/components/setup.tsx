import Image from "next/image";

const Setup = () => {
  return (
    <section className="h-[860px] w-full mt-7">
      <div className="flex justify-center flex-col items-center w-auto h-[86px]">
            <p className="font-semibold text-[#616161] text-xl mt-20">Share your setup with</p>
            <h1 className="font-bold text-[#3A3A3A] text-5xl mt-4">#Furniro Furniture</h1>
            
      </div>

        <div className='flex flex-col mt-11'>
          
          <div className="flex flex-col-5">
            <div className='flex justify-start w-[274px] h-[382px] mx-[-5rem] bg-white'>
                <Image src="/setup/Rectangle 36 (1).jpg" alt="rack"
                width={274}
                height={382}
                layout="intrinsic"
                className="object-fit"/>

            </div>

            <div className='flex w-[451px] h-[312px] mt-[68px] mx-[90px] bg-white'>
                <Image src="/setup/Rectangle 38.jpg" alt="rack"
                width={451}
                height={312}
                layout="intrinsic"
                className="object-fit  "/>

            </div>

            <div className='flex w-[295px] h-[392px] mt-[140px] mx-[-5rem] bg-white'>
                <Image src="/setup/Rectangle 40.jpg" alt="rack"
                width={295}
                height={392}
                layout="intrinsic"
                className="object-fit  "/>

            </div>

            <div className='flex w-[290px] h-[348px] mt-[80px] mx-[5.75rem] bg-white'>
                <Image src="/setup/Rectangle 43.jpg" alt="rack"
                width={290}
                height={290}
                layout="intrinsic"
                className="object-fit  "/>

            </div>

            <div className='flex w-[425px] h-[433px] mt-[1rem] mx-[-5rem] bg-white'>
                <Image src="/setup/Rectangle 45.jpg" alt="rack"
                width={425}
                height={433}
                layout="intrinsic"
                className="object-fit  "/>

            </div>

            
            </div>

            <div className='flex justify-start w-[381px] h-[323px] mt-[-8.5rem] mx-[-6rem] bg-white'>
                <Image src="/setup/Rectangle 37 (1).jpg" alt="rack"
                width={381}
                height={323}
                layout="intrinsic"
                className="object-fit  "/>

            </div>

            <div className='flex justify-start w-[344px] h-[242px] mt-[-20rem] mx-[18.5rem] bg-white'>
                <Image src="/setup/Rectangle 39.jpg" alt="rack"
                width={344}
                height={242}
                layout="intrinsic"
                className="object-fit  "/>

            </div>

            <div className='flex justify-start w-[178px] h-[242px] mt-[-12rem] mx-[59.5rem] bg-white'>
                <Image src="/setup/Rectangle 41.jpg" alt="rack"
                width={178}
                height={242}
                layout="intrinsic"
                className="object-fit  "/>

            </div>

            <div className='flex justify-start w-[258px] h-[196px] mt-[-14rem] mx-[71.5rem] bg-white'>
                <Image src="/setup/Rectangle 44.jpg" alt="rack"
                width={258}
                height={196}
                layout="intrinsic"
                className="object-fit  "/>

            </div>
        </div>
      
    </section>
  )
}

export default Setup
