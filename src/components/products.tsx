import React from "react";
import Image from "next/image";
import image1 from "../../public/Image1.jpg";
import image2 from "../../public/Image2.jpg";
import image3 from "../../public/Image3.jpg";
import image4 from "../../public/Image4.jpg";
import image5 from "../../public/Image5.jpg";
import image6 from "../../public/Image6.jpg";
import image7 from "../../public/Image7.jpg";
import image8 from "../../public/Image8.jpg";

const Products = [
  {
    name:"Syltherine",
    description:"Stylish corner table",
    price: "Rs 150,000",
    link: image1,
    alt: "wooden corner table",

  },
  {
    name:"Leviosa",
    description:"Stylish cafe chair",
    price:"Rs 100,000",
    link: image2,
    alt: "cafe chair",
  },
  {
    name:"Lolito",
    description:"Luxury big sofa",
    price:"Rs 175,000",
    link: image3,
    alt: "sofa",
  },
  {
    name:"Respira",
    description:"Center table and Six seater sofa",
    price:"Rs 500,000",
    link: image4,
    alt: "lounge set",
  },
  {
    name: "Grifo",
    description: "Night Lamp.",
    price: "Rs. 75000",
    link: image5,
    alt: "lamp",
  },
  {
    name: "Greyno",
    description: "Lounge Sofa.",
    price: "Rs 450,000",
    link: image6,
    alt: "lounge sofa",
  },
  {
    name: "Comfo",
    description: "Luxury comfortable sofa.",
    price: "Rs 500,000",
    link: image7,
    alt: "sofa set",
  },
  {
    name: "Choco",
    description: "Comfy two seater sofa.",
    price: "Rs 250,000",
    link: image8,
    alt: "two seater sofa",
  },
];
const OurProducts = () => {
  return (
    <section className="h-full sm:h-[1084px] w-full mt-30 flex flex-col justify-center items-center">
      <div className="flex justify-center mt-20">
        <h1 className=" font-bold text-xl sm:text-2xl md:text-4xl lg:text-4xl font-[#3A3A3A] mt-10">
          OUR PRODUCTS
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mt-10 gap-4">
        
        {
          Products.map((product, index)=>(

          <div className="w-[285px] h-[450px]  bg-[#F4F5F7]">
          <Image src={product.link} alt={product.alt}
                  key={index}
          
          width={285} height={301} />

          <p className="flex justify-start text-[#3A3A3A] font-semibold text-xl mt-5 mx-3 p-2">
           {product.name}
          </p>
          <p className=" text-[#3A3A3A] font-medium mx-3 p-2">
            {product.description}
          </p>
          <p className="flex justify-start text-[#3A3A3A] font-semibold text-l mx-3 p-2">
            {product.price}
            
          </p>
        </div>

          ))
          
        }

       <div className="flex items-center mt-8">
          <button className="flex items-center justify-center py-3 my-2 w-[245px] h-[48px] text-[#B88E2F] bg-[#FFFFFF] border-2 border-[#B88E2F] hover:bg-[#B88E2F] hover:text-[#FFFFFF]">
            SHOW MORE
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurProducts;
