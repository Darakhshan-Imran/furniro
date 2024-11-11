import Image from "next/image";

const About = () => {
  return (
    <section className="flex flex-col-reverse sm:flex-row md:flex-row lg:flex-row items-center mt-[2rem] 
      w-full h-[670px] bg-[#dfcda7] bg-cover bg-no-repeat overflow-x-hidden">


      <div className="mx-auto w-full sm:w-[90%] md:w-[700px] lg:w-[1000px] h-auto text-wrap text-center sm:text-left p-4">
    
      <h1 className="text-5xl font-bold text-[#3A3A3A] mx-6">{`Crafting Spaces You’ll Love to Live In`}</h1>
      <p className="font-medium text-base sm:text-lg md:text-xl lg:text-2xl text-[#616161] text-justify italic leading-relaxed sm:leading-normal px-4 sm:px-0 mx-6 mt-12">{`We believe that furniture is more than just decor; it’s a reflection of who you are and how you live. Our mission is to bring you beautifully crafted, high-quality furniture that transforms every space into a sanctuary of comfort, style, and functionality. With a blend of timeless designs and modern trends, our collections cater to a variety of tastes, 
      ensuring you find the perfect pieces to make your house feel like home.`}</p>

      <button className="mt-16 mx-6 w-[176px] h-[48px] bg-[#B88E2F] text-[#FFFFFF] text-m font-normal py-2
      hover:bg-[#FFFFFF] hover:text-[#B88E2F] hover:border-2 border-[#B88E2F]">SHOP NOW</button>
      </div>
      <div className="flex space-x-0 mt-8 sm:mt-10 md:mt-20 mx-36 shrink-0 py-8">
      <Image src="/slider1.jpg" alt="aboutimage"
      width={350}
      height={450}/>
      </div>
    </section>
  )
}

export default About
