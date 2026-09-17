"use client"

import { AnimatePresence, motion } from "motion/react"
import { usePathname } from "next/navigation"


export default function Template({ children }: { children: React.ReactNode; }){
    // Animation trigger
    const pathname = usePathname();
    
    return (
        // Pages transition animation 
        
        <AnimatePresence mode="wait">
            <motion.div 
            className="flex flex-col flex-1"
            key={pathname}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
}