import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu } from 'lucide-react'
import { navItems } from '@/constants'
import {iconsList} from '@/constants'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"






const Navbar = () => {
  return (
    <header className="flex flex-col sm:flex-row items-center justify-between h-auto sm:h-[140px] bg-[#FFFFFF] mx-6 sm:px-4 md:px-8 lg:mx-auto xl:px-4 py-4">
  
    {/* Logo and Title */}
    <div className="flex items-center space-x-2">
      <Image src="/logo.jpg" alt="Logo" width={50} height={32} />
      <span className="font-bold text-[24px] sm:text-[28px] md:text-[34px]">Furniro</span>
    </div>
  
    {/* Navigation Links - visible on all screens */}
    <nav className="flex h-[44.54px]">
      <ul className="flex items-center gap-4 lg:gap-8 text-[#000000] text-[16px] lg:text-[22px] font-medium">
        {navItems.map((item, index) => (
          <li key={index}>
            <Link href={item.link} className="hover:text-[#B88E2F]">
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  
    {/* Icons - Hidden on mobile, displayed in dropdown on mobile */}
    <div className="hidden md:flex space-x-4">
      {iconsList.map((icon, index) => (
        <Image
          key={index}
          src={icon.src}
          alt={icon.alt}
          width={icon.width}
          height={icon.height}
          className="cursor-pointer"
        />
      ))}
    </div>
  
    {/* Dropdown menu for mobile screens */}
    <div className="md:hidden flex items-center space-x-4">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Menu />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {/* Icons in dropdown for mobile */}
          {iconsList.map((icon, index) => (
            <DropdownMenuItem key={index} className="flex items-center">
              <Image src={icon.src} alt={icon.alt} width={icon.width} height={icon.height} className="cursor-pointer" />
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  
  </header>
  
  
  )
}

export default Navbar
