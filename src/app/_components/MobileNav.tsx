"use client"

import Link from 'next/link'
import { type  Dispatch, type SetStateAction } from 'react';

import { AnimatePresence, motion, type Variants } from "motion/react";

import { type NavLink } from '@/app/_types/navlink';


/**
 * Animation Variants of hamburger menu
 */

// Dropdown panel
const panelVariants: Variants = {
    closed: { height: 0 },
    open: { height: "auto" },
};

// Links container (stagger)
const listVariants: Variants = {
    closed: {},
    open: {
        transition: { staggerChildren: 0.06, delayChildren: 0.1 },
    },
};

// Links
const itemVariants: Variants = {
    closed: { opacity: 0, y: -8 },
    open: { opacity: 1, y: 0 },
};


export function MobileNavPanel(
    { navLinks, pathname, open, setOpen }: 
    { navLinks: NavLink[]; pathname: string, open: boolean, setOpen: Dispatch<SetStateAction<boolean>>}) {
    
    return(
        <AnimatePresence>
            {open && (
                // Panel
                <motion.div className="absolute left-0 right-0 bg-black md:hidden overflow-hidden border-t border-white/10"
                key="mobile-panel"
                initial="closed"
                animate="open"
                exit="closed"
                variants={panelVariants}
                transition={{ duration: 0.3, ease: "easeInOut" }}>
                    
                    {/* Links container */}
                    <motion.nav className="flex flex-col gap-1 px-4 py-4"
                    variants={listVariants}
                    initial="closed"
                    animate="open"
                    exit="closed">

                        {/* Link */}
                        {navLinks.map(({ href, label }) => (
                        <motion.div key={href} variants={itemVariants}>
                            
                            <Link href={href} onClick={() => setOpen(false)}>
                                <p className={`py-3 text-lg transition duration-300 ease-in-out
                                ${pathname === href ? "text-teal-300" : "hover:text-teal-300"}`}>
                                    {label}
                                </p>
                            </Link>
                        </motion.div>
                        ))}

                    </motion.nav>

                </motion.div>
                
            )}
        </AnimatePresence>
    );
}

export function ButtonMobileNav(
    {open, setOpen}: 
    {open: boolean, setOpen: Dispatch<SetStateAction<boolean>>}) {
    
    return(
        <button
        onClick={() => setOpen(!open)}
        className="md:hidden relative p-3 flex items-center justify-center"
        aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
            {/* Lines */}
            <motion.span
            className="absolute w-6 h-0.5 bg-white rounded-full"
            animate={open ? { rotate: 45, y: 0 } : { rotate: 0, y: -6 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            />
            <motion.span
            className="absolute w-6 h-0.5 bg-white rounded-full"
            animate={open ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.15 }}
            />
            <motion.span
            className="absolute w-6 h-0.5 bg-white rounded-full"
            animate={open ? { rotate: -45, y: 0 } : { rotate: 0, y: 6 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            />
        </button>
    );
}