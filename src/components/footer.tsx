import React from 'react'

const Footer = () => {
  return (

    <section className="flex flex-col items-center justify-center">
  <div className="flex flex-col md:flex-row w-full md:h-[505px] mt-11 border-t-2 border-t-[#D9D9D9]">
    
    {/* Brand Info */}
    <div className="flex flex-col md:w-1/5 md:h-[60%] md:mt-[6rem] mx-4 md:mx-[5rem]">
      <p className="text-xl sm:text-2xl font-semibold text-[#000000] sm:mx-14 py-3 sm:py-5">Furniro.</p>
      <p className="text-sm sm:text-base text-[#5b5a5a] justify-center sm:px-5 mt-2 sm:mt-3 sm:mx-10">
        University Road Suite 200, Karachi, PAKISTAN
      </p>
    </div>

    {/* Links Section */}
    <div className="flex flex-col justify-start items-start md:w-[90px] h-auto md:h-[312px] mt-8 md:mt-[6rem] mx-4 md:mx-[5rem]">
      <p className="text-[#000000] font-semibold mt-3">Links</p>
      <button className="font-medium text-[#5b5a5a] mt-6">Home</button>
      <button className="font-medium text-[#5b5a5a] mt-6">Shop</button>
      <button className="font-medium text-[#5b5a5a] mt-6">About</button>
      <button className="font-medium text-[#5b5a5a] mt-6">Contact</button>
    </div>

    {/* Help Section */}
    <div className="flex flex-col justify-start items-start w-auto md:w-[12rem] h-auto md:h-[312px] mt-8 md:mt-[6rem] mx-4 md:mx-[5rem]">
      <p className="text-[#000000] font-semibold mt-3">Help</p>
      <button className="font-medium text-[#5b5a5a] mt-6">Payment Options</button>
      <button className="font-medium text-[#5b5a5a] mt-6">Returns</button>
      <button className="font-medium text-[#5b5a5a] mt-6">Payment Policies</button>
    </div>

    {/* Newsletter Section */}
    <div className="flex flex-col md:flex-row items-start justify-start w-full max-w-[40rem] h-auto mt-8 md:mt-[6rem] px-4 md:px-2 space-y-4 md:space-y-0 md:space-x-4">
    <p className="text-[#000000] font-semibold">Newsletter</p>

    <button className="font-medium text-[#5b5a5a] underline underline-offset-4">
    Enter Your Email Address
    </button>

   <button className="font-semibold text-[#5b5a5a] underline underline-offset-4">
    SUBSCRIBE
    </button>
    </div>
    </div>

  {/* Footer */}
  <div className="flex flex-col md:flex-row items-center justify-center w-full md:w-[70rem] h-auto md:h-[5rem] mt-8 border-t-2 border-t-[#D9D9D9]">
    <p className="text-[#000000] mt-4 md:mt-5 text-center">2023 Furniro. All rights reserved</p>
  </div>
</section>

    
  )
}

export default Footer

