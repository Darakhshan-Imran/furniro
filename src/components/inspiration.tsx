import Carousel from "./carousel"

const Inspiration = () => {
  return (

    <section className=" flex items-center flex-col-2 mt-[80px] w-full h-[670px] bg-[#FCF8F3]">


    <div className="mx-52 w-[1000px] h-[151px]">
        <h1 className="text-5xl font-bold text-[#3A3A3A] ">50+ Beautiful rooms inspiration</h1>
        <p className="font-medium text-lg text-[#616161] mt-3 text-justify">Our designer already made a lot of beautiful prototype of rooms that inspire you</p>

       <button className="mt-16 w-[176px] h-[48px] bg-[#B88E2F] text-[#FFFFFF] text-m font-normal py-2
        hover:bg-[#FFFFFF] hover:text-[#B88E2F] hover:border-2 border-[#B88E2F]">EXPLORE MORE</button>
    </div>

    <div className="relative w-full h-[500px] flex justify-center mt-20">
    <Carousel/>
    </div>
    
    </section>
  )
}

export default Inspiration
