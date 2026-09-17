"use client"

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react"

export default function HomeHero() {

  /**
   * Smooth scroll handler. 
   * Link to scroll next section (#offer) will always work 
   */
  function handleScroll(e: React.MouseEvent<HTMLAnchorElement>): void {
    e.preventDefault();
    document.getElementById("offer")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
        <section className="relative flex flex-col min-h-screen bg-black text-white xl:p-20 lg:p-15 p-10">

          {/* Background image */}
          <Image src="/images/hero-image.jpg" alt="" fill sizes="100vw" priority className="object-cover" />
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/20" />


          <div className="relative z-10 flex flex-col xl:gap-10 gap-7 max-w-[100%] md:max-w-[55%] xl:p-20 p-1">
            <div>
              <motion.p 
              initial={{opacity:0, y:20}}
              animate={{opacity:1, y:0}}
              transition={{duration:0.6, delay:0.2}}
              className="font-heading md:text-base text-sm text-teal-300 mb-2 tracking-[0.35em]"
              >
                IOT ENERGY MONITORING SOLUTIONS
              </motion.p>

              <motion.h1 
              initial={{opacity:0, y:20}}
              animate={{opacity:1, y:0}}
              transition={{duration:0.6, delay:0.4}}
              className="font-heading md:text-6xl text-4xl font-black"
              >
                Intelligent Energy Management for Industry
              </motion.h1>
            </div>
          
            <motion.div 
            initial={{opacity:0, y:20}}
            animate={{opacity:1, y:0}}
            transition={{duration:0.6, delay:0.6}}
            className='text-sm [text-underline-offset:4px]'
            >
              Real-time IoT monitoring to 
              <span className='underline decoration-teal-300 decoration-solid'> optimize energy use</span>
              , 
              <span className='underline decoration-teal-300 decoration-solid'> reduce costs </span> 
              and drive 
              <span className='underline decoration-teal-300 decoration-solid'> sustainable operations </span>
              across your industrial facilities.
            </motion.div>


            {/* Link scroll to next section */}
            <motion.div
            initial={{opacity:0, y:20}}
            animate={{opacity:1, y:0}}
            transition={{duration:0.6, delay:0.8}} 
            className="md:max-w-[50%]"
            >
              <Link
                onClick={ handleScroll }
                href="#offer"
                className="inline-block text-center font-heading p-2 border-teal-300 border-2 rounded-sm w-full text-white hover:text-black hover:bg-teal-300 focus:text-black focus:bg-teal-300 transition duration-300 ease-in-out">
                See our offer
              </Link>
            </motion.div>
          </div>
        </section>
  );
}

