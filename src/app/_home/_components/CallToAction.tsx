"use client"

import { motion, type Variants } from "motion/react";
import Link from "next/link";


const linkVariants: Variants = {
  rest: {
    color: "white",
    background: "transparent",

  },
  hover: {
    color: "black",
    background: "#46ecd5",
  },
};

const arrowVariants: Variants = {
  rest: {
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
  hover: {
    x: 5,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
};


const MotionLink = motion.create(Link);


export default function CallToAction() {

  return (
        <section className="cta text-white lg:p-40 p-10">
          <div className="mt-20 grid md:grid-cols-2 grid-cols-1 gap-15 items-center">
            
            <div className="font-heading col-span-1">
              <h2 className="md:text-5xl text-4xl font-bold mb-2">
                Ready to take control of your energy consumption?
              </h2>

              <p className="font-sans mt-5">
                Discover how intelligent energy monitoring can help your facility reduce costs, improve efficiency, and operate more sustainably.
              </p>
            </div>


            <div className="col-span-1 flex justify-end">
              <MotionLink
              initial="rest"
              whileHover="hover" whileFocus="hover" whileTap="hover"
              variants={linkVariants}
              href="/contact"
              className="flex items-center justify-center gap-2 p-3 w-[55%] 
              font-heading text-xl border-teal-300 border-2 rounded-sm
              text-white bg-transparent
              hover:text-black hover:bg-teal-300 
              transition-colors duration-300 ease-in-out"
              >
                Request a quote
                <motion.svg
                aria-hidden="true"
                variants={arrowVariants}
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </motion.svg>
              </MotionLink>
            
            </div>

          </div>
        </section>
  );
}
