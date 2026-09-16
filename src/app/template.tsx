/**
 * A template file is similar to a layout in that it wraps a layout or page. 
 * Unlike layouts that persist across routes and maintain state, templates are given a unique key, 
 * meaning children Client Components reset their state on navigation.
 * 
 * They are useful when you need to:
 * - Resynchronize useEffect on navigation.
 * - Reset the state of a child Client Components on navigation. For example, an input field.
 * - To change default framework behavior. For example, Suspense boundaries inside layouts only 
 * show a fallback on first load, while templates show it on every navigation.
 * 
 * https://nextjs.org/docs/app/api-reference/file-conventions/template
 * 
 * There's no need to import it: 
 * Next.js automatically detects it and inserts it between layout.tsx and each page.tsx file.
 */


"use client"

import { AnimatePresence, motion } from "motion/react"
import { usePathname } from "next/navigation"


export default function Template({ children }: { children: React.ReactNode; }){
    // Animation trigger
    const pathname = usePathname();
    
    return (
        // Animation - Pages transition animation 
        
        // When an element's key changes, the old element is decommissioned 
        // and the new one is treated as a completely separate component.
        // When the pathname changes, the key changes, and a new component is created. 
        // AnimatePresence detects the exit and triggers the exit event.
        <AnimatePresence mode="wait"> {/* Doesn't render new children until the previous has finished its animation. */}
            <motion.div 
            className="flex flex-col flex-1"
            key={pathname}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}>

                {children}

            </motion.div>
        </AnimatePresence>
    );
}