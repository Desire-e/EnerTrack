"use client";

import { motion, type Variants } from "motion/react";
import Image from "next/image";


const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const paragraphVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const cardVariants = paragraphVariants;


export default function Mission(){
    return(
        <section className="flex flex-wrap lg:flex-row flex-col  w-full justify-between lg:divide-x-1 lg:divide-y-0 divide-y-1 divide-black/20">
            
            {/* Description */}
            
            {/* Animation - Each paragraph fades upwards as user scrolls */}
            
            <div className="relative flex flex-col w-full lg:max-w-[55%] lg:px-10 py-10 overflow-hidden">
                <div className="relative z-10 flex flex-col gap-3 text-sm">
                    <h2 className="font-heading md:text-5xl text-3xl font-extrabold mb-3">
                        Our Mission
                    </h2>
                    
                    <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}>
                        <motion.p variants={paragraphVariants}>
                            Our mission is to make energy consumption visible, understandable, and actionable.
                        </motion.p>
                        <motion.p variants={paragraphVariants}>                        
                            We believe that businesses should have the information they need to manage energy efficiently. By turning real-time consumption data into clear insights, we help industrial teams reduce waste, control costs, and build more sustainable operations.
                        </motion.p>
                    </motion.div>
                </div>
                
                {/* Decorative svg */}
                <div className="relative w-full h-[25vh] xl:mt-10 lg:mt-25 mt-10 lg:absolute lg:inset-0 lg:h-auto lg:mt-0 
                overflow-hidden pointer-events-none ">                            
                    <Image src="/images/earth-monoline.svg" alt="" width={2200} height={2200} loading="eager"
                    className=" absolute opacity-30 w-full h-auto lg:top-[30%] md:top-[-55%] top-[0%] md:scale-[1] scale-[1.28]" />
                </div>
                
            </div>

            {/* Company values - cards */}
            
            <motion.div className=" flex flex-col gap-5 w-full lg:max-w-[45%] lg:p-10 py-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}>

                <motion.div variants={cardVariants} className="flex gap-3 items-center xl:p-5 p-3 bg-teal-700/5">                        
                    <svg className="shrink-0 size-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                    </svg>

                    <div>
                        <h3 className="font-heading font-extrabold  md:text-lg">
                            <span className="font-accent">01 · </span>EFFICIENCY
                        </h3>
                        <p className="text-sm">Reduce unnecessary energy consumption through better visibility and control.</p>
                    </div>                
                </motion.div>

                <motion.div variants={cardVariants} className="flex gap-3 items-center xl:p-5 p-3 bg-teal-700/5">                        
                    <svg  className="shrink-0 size-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25M9 16.5v.75m3-3v3M15 12v5.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                    </svg>

                    <div>
                        <h3 className="font-heading font-extrabold md:text-lg">
                            <span className="font-accent">02 · </span>INTELLIGENCE
                        </h3>
                        <p className="text-sm">Turn complex energy data into clear, actionable insights.</p>
                    </div>                
                </motion.div>
                
                <motion.div variants={cardVariants} className="flex gap-3 items-center xl:p-5 p-3 bg-teal-700/5">                        
                    <svg className="shrink-0 size-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m20.893 13.393-1.135-1.135a2.252 2.252 0 0 1-.421-.585l-1.08-2.16a.414.414 0 0 0-.663-.107.827.827 0 0 1-.812.21l-1.273-.363a.89.89 0 0 0-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 0 1-1.81 1.025 1.055 1.055 0 0 1-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 0 1-1.383-2.46l.007-.042a2.25 2.25 0 0 1 .29-.787l.09-.15a2.25 2.25 0 0 1 2.37-1.048l1.178.236a1.125 1.125 0 0 0 1.302-.795l.208-.73a1.125 1.125 0 0 0-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 0 1-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 0 1-1.458-1.137l1.411-2.353a2.25 2.25 0 0 0 .286-.76m11.928 9.869A9 9 0 0 0 8.965 3.525m11.928 9.868A9 9 0 1 1 8.965 3.525" />
                    </svg>

                    <div>
                        <h3 className="font-heading font-extrabold md:text-lg">
                            <span className="font-accent">03 · </span>SUSTAINABILITY
                        </h3>
                        <p className="text-sm">Help businesses operate more efficiently while reducing their environmental impact.</p>
                    </div>                
                </motion.div>

            </motion.div>

        </section>

    );
}