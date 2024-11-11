import Carousel from "./carousel"

const Inspiration = () => {
  return (

    <section className="flex flex-col-reverse sm:flex-row md:flex-row lg:flex-row items-center mt-[8rem] 
                        w-full h-[670px] bg-[#dfcda7] bg-cover bg-no-repeat overflow-x-hidden">


    <div className="mx-auto w-full sm:w-[90%] md:w-[700px] lg:w-[1000px] h-auto text-wrap text-center sm:text-left p-4">
        <h1 className="text-5xl font-bold text-[#3A3A3A] ">50+ Beautiful rooms inspiration</h1>
        <p className="font-medium text-lg text-[#616161] mt-3 text-justify">Our designer already made a lot of beautiful prototype of rooms that inspire you</p>

       <button className="mt-16 w-[176px] h-[48px] bg-[#B88E2F] text-[#FFFFFF] text-m font-normal py-2
        hover:bg-[#FFFFFF] hover:text-[#B88E2F] hover:border-2 border-[#B88E2F]">EXPLORE MORE</button>
    </div>

    <div className="relative w-full h-[500px] flex justify-center mt-8 sm:mt-10 md:mt-20">
    <Carousel/>
    </div>
    
    </section>
  )
}

export default Inspiration
