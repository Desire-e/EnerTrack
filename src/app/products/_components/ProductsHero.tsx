"use client"

import Image from "next/image";
import { motion } from "motion/react"

export default function ProductsHero() {
  return (
          <section className="relative flex md:flex-row flex-col gap-3 bg-black text-white h-fit w-full place-content-between items-center xl:p-20 lg:p-15 p-7">
  
            {/* Background image */}
            <Image 
            src="/images/hero-products-image.jpg" 
            alt="" fill sizes="100vw" priority 
            className="object-cover object-[center_45%]" 
            />

            {/* Overlay background image */}
            <div className="absolute inset-0 bg-black/80" />      

            <div className="relative z-10 flex flex-col md:gap-5 gap-3 md:max-w-[50%] max-w-[90%] md:px-3 px-1">
              
              <div>
                <motion.p 
                initial={{opacity:0, y:20}}
                animate={{opacity:1, y:0}}
                transition={{duration:0.6, delay:0.2}}
                className="font-heading md:text-base text-sm text-teal-300 mb-2 tracking-[0.35em]"
                >
                  PRODUCTS
                </motion.p>

                <motion.h1 
                initial={{opacity:0, y:20}}
                animate={{opacity:1, y:0}}
                transition={{duration:0.6, delay:0.4}}
                className="font-heading md:text-5xl text-3xl font-extrabold"
                >
                  Solutions designed around your energy data
                </motion.h1>
              </div>
            
              <motion.div 
              initial={{opacity:0, y:20}}
              animate={{opacity:1, y:0}}
              transition={{duration:0.6, delay:0.6}}
              className='text-sm [text-underline-offset:4px]'
              >
                From real-time consumption monitoring to intelligent energy analysis, 
                our solutions give your organization the visibility it needs to make better energy decisions.
              </motion.div>
            </div>

            {/* Hero cards */}
            <div className="relative z-10 flex flex-col flex-wrap md:gap-5 gap-3 text-sm font-light md:max-w-sm max-w-[90%]">              
              
              <motion.div 
              initial={{opacity:0, y:20}}
              animate={{opacity:1, y:0}}
              transition={{duration:0.6, delay:1.2}}
              className="flex gap-3 bg-white/10 p-3 rounded-sm border-opacity-0 text-sm"
              >
                <svg className="size-6 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
                </svg>
                Real-time monitoring · Track energy consumption as it happens.
              </motion.div>

              <motion.div 
              initial={{opacity:0, y:20}}
              animate={{opacity:1, y:0}}
              transition={{duration:0.6, delay:1.4}}
              className="flex gap-3 bg-white/10 p-3 rounded-sm border-opacity-0 text-sm"
              >
                <svg className="size-6 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
                </svg>
                Data & analytics · Turn consumption data into actionable insights.
              </motion.div>
              
              <motion.div 
              initial={{opacity:0, y:20}}
              animate={{opacity:1, y:0}}
              transition={{duration:0.6, delay:1.4}}
              className="flex gap-3 bg-white/10 p-3 rounded-sm border-opacity-0 text-sm"
              >
                <svg className="size-6 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                </svg>
                Energy optimization · Identify inefficiencies and reduce unnecessary consumption. 
              </motion.div>
            </div>

          </section>
  );
}
