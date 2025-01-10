
import React from 'react';
import Image from 'next/image';


const ProductsGrid = [
  {
    name: 'Syltherine',
    description: 'Stylish corner table',
    price: 'Rs 125,000',
    oldPrice: 'Rs 150,000',
    image: '/image1.jpg',
    alt: 'Stylish corner table',
  },
  {
    name: 'Leviosa',
    description: 'Stylish cafe chair',
    price: 'Rs 100,000',
    image: '/image2.jpg',
    alt: 'Stylish cafe chair',
  },
  {
    name: 'Lolito',
    description: 'Luxury big sofa',
    price: 'Rs 175,000',
    oldPrice: 'Rs 200,000',
    image: '/image3.jpg',
    alt: 'Luxury big sofa',
  },
  {
    name: 'Respira',
    description: 'Center table and six-seater sofa',
    price: 'Rs 500,000',
    image: '/image4.jpg',
    alt: 'Center table and six-seater sofa',
  },
  {
    name: 'Grifo',
    description: 'Night lamp',
    price: 'Rs 75,000',
    image: '/image5.jpg',
    alt: 'Night lamp',
  },
  {
    name: 'Greyno',
    description: 'Lounge sofa',
    price: 'Rs 550,000',
    image: '/image6.jpg',
    alt: 'Lounge sofa',
  },
  {
    name: 'Comforty',
    description: 'Luxury comfortable sofa',
    price: 'Rs 550,000',
    oldPrice: 'Rs 600,000',
    image: '/image7.jpg',
    alt: 'Luxury comfortable sofa',
  },
  {
    name: 'Choco',
    description: 'Comfy two-seater',
    price: 'Rs 500,000',
    image: '/image8.jpg',
    alt: 'Comfy two-seater',
  },
]


const Shop = () => {
  return (
    <main className="overflow-x-hidden w-full mx-auto">
      {/* Hero Section */}
      <div className="w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[316px] relative">
        <Image
          src="/shop/shop.png"
          alt="shopimage"
          height={0}
          width={0}
          sizes="100vw"
          className="w-full h-auto"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="font-bold text-neutral-900 text-3xl sm:text-3xl md:text-4xl lg:text-5xl">
            SHOP
          </h1>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-[3rem] sm:mt-[4rem] md:mt-[5rem] lg:mt-[7rem] px-4 sm:px-8 lg:px-16">
        {/* Product Card */}
        {ProductsGrid.map((product, index) => (
          <div
            key={index}
            className="bg-[#F4F5F7] flex flex-col items-center rounded-lg shadow-md overflow-hidden"
          >
            <Image
              src={product.image}
              alt={product.alt}
              width={285}
              height={301}
              className="w-full h-auto"
            />
            <div className="p-4 w-full">
              <p className="text-xl font-semibold text-[#3A3A3A]">{product.name}</p>
              <p className="text-[#3A3A3A] font-medium text-sm">{product.description}</p>
              <p className="text-lg font-semibold text-[#3A3A3A]">
                {product.price}
                {product.oldPrice && (
                  <span className="text-sm font-medium text-[#3A3A3A] ml-2 line-through">
                    {product.oldPrice}
                  </span>
                )}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Show More Button */}
      <div className="flex justify-center items-center mt-8">
        <button className="py-3 px-6 text-[#B88E2F] bg-[#FFFFFF] border-2 border-[#B88E2F] hover:bg-[#B88E2F] hover:text-[#FFFFFF] transition rounded-lg">
          SHOW MORE
        </button>
      </div>
    </main>
  );
};

export default Shop;

