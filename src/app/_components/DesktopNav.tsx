"use client"

import { type NavLink } from "@/app/_types/navlink"
import Link from 'next/link'

export default function DesktopNav(
    { navLinks, pathname }: 
    { navLinks: NavLink[]; pathname: string }){
    
    return(
        <nav aria-label="main" className="hidden md:flex gap-6">

            {navLinks.map(({ href, label }) => (
                <Link 
                key={href} 
                href={href}
                className={
                    `hover:text-teal-300 transition duration-300 ease-in-out 
                    ${pathname === href ? "text-teal-300" : ""}`
                }>
                    {label}
                </Link>
            ))}

        </nav> 
    );
}