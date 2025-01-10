import React from "react";
import Image from "next/image";

const ProductsRange = () => {
  return (
    <section className="h-full w-full mt-28 bg-white">
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col gap-4 justify-center items-center px-4 sm:px-6 md:px-8 lg:px-12 text-center">
          <h1 className="font-semibold text-xl sm:text-2xl md:text-3xl text-[#333333]">
            BROWSE THE RANGE
          </h1>
          <p className="font-medium text-sm sm:text-base md:text-lg lg:text-xl text-[#666666] max-w-2xl">
            Each piece is thoughtfully designed to elevate your living spaces
            with timeless elegance and modern comfort.
          </p>
        </div>

        <div className="grid grid-rows-1 sm:grid-cols-3 justify-between items-center gap-6">
          <div className="mt-16 border-r-3">
            <Image src="/dining.jpg" alt="dining" height={480} width={381} />

            <h1 className="text-center text-2xl text-[#333333] font-semibold mt-6 ">
              Dining
            </h1>
          </div>

          <div className="mt-16 border-r-2">
            <Image src="/living.jpg" alt="dining" height={480} width={381} />

            <h1 className="text-center text-2xl text-[#333333] font-semibold mt-6 ">
              Living
            </h1>
          </div>

          <div className="mt-16 border-r-2">
            <Image src="/room.jpg" alt="dining" height={480} width={381} />

            <h1 className="text-center text-2xl text-[#333333] font-semibold mt-6">
              Bedroom
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsRange;
