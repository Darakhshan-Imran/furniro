import React from 'react'
import Image from 'next/image'
import { navItems } from '@/constants'





const Navbar = () => {
  return (
    
    <header className='flex flex-col-1 justify-between items-center h-[140px] bg-[#FFFFFF] mx-6 sm:px-4 md:px-8 lg:mx-auto xl:px-4'>
      <div className='flex flex-col-1 m-5'> 
        <Image src="/logo.jpg" alt="Logo"
        width={50}
        height={32}/>
        <span className='w-[130px] h-[41px] font-bold text-[34px] px-2'>Furniro</span>
      </div>

      <div>
      <nav className="h-[44.54px] " >
            <ul className="flex h-full w-full items-center justify-between gap-[46px]
                text-[#000000] text-[22px] font-medium text-wrap cursor-pointer hover:text-[#B88E2F]">
                {
                    navItems.map((item)=><li>{item.title}</li>)
                }
            </ul>
        </nav>
      </div>

      <div className='flex flex-col-1 justify-evenly items-center m-2 px-1 py-1 w-auto cursor-pointer'>
        
     
      <Image src="/user.jpg" alt="user"
      width={24}
      height={24}
      className='m-4'/>

      <Image src="/searchicon.jpg" alt="searchicon"
      width={24}
      height={24}
      className='m-4'/>

      <Image src="/wishlist.jpg" alt="wishlist" 
      width={23.33}
      height={20.81}
      className='m-4'/>

      <Image src="/cart.jpg" alt="cart"
      width={24.53}
      height={22.06}
      className='m-4'/>

      </div>

      
    </header>
  )
}

export default Navbar
