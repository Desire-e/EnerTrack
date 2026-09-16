"use client"

import Link from 'next/link'
import { useState } from "react";
// hook that allows you to read the pathname of the current URL.
import { usePathname } from 'next/navigation'

import { navLinks } from "@/app/_data/navlinks"
import DesktopNav from '@/app/_components/DesktopNav';
import { MobileNavPanel, ButtonMobileNav } from '@/app/_components/MobileNav';

export default function Header() {

    /**
     * Manage current page 
     */
    const pathname = usePathname();
        

    /**
     * Open/close state of hamburger menu
     */
    const [open, setOpen] = useState(false);

  
    return (
    
    <header className="sticky top-0 z-50 bg-black text-white">
        
        <div className="flex items-center justify-between px-4 py-4 md:px-10 md:py-6">
            {/* Logo */} 
            <Link href="/">
                <div className="flex items-center gap-x-2">
                    <svg className="text-teal-200 size-5 md:size-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                    </svg>
                    <p className="font-bold font-heading text-2xl md:text-3xl">EnerTrack</p>
                </div>
            </Link>


            {/* Navigation (Desktop) */}
            <DesktopNav 
            navLinks={navLinks} 
            pathname={pathname} 
            />


            {/* Dropdown panel button (mobile) */}
            <ButtonMobileNav 
            open={open} 
            setOpen={setOpen} 
            />
        </div>


        {/* Dropdown panel (mobile) */}
        <MobileNavPanel 
        navLinks={navLinks} 
        pathname={pathname} 
        open={open} 
        setOpen={setOpen} 
        /> 

    </header>
  );
}
