"use client";

import { motion, type Variants } from "motion/react";
import TitledCard from "@/app/_components/TitledCard";
import { keyFeatures } from "@/app/_data/features";


// Animation variants - defines states/animation states with names
const containerVariants: Variants = {
  // State hidden
  hidden: {},

  // State visible
  visible: {
    // transition hidden to visible 
    transition: {
      // every card starts animation 120 ms after previous sibbling card
      staggerChildren: 0.12,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0, y: 20,
  },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.4, ease: "easeOut",},
  },
};


export default function KeyFeatures() {

  return (
          <section className="flex flex-col md:gap-15 gap-10 md:max-w-[70%] ml-auto">
            <div className="font-heading text-right">
              <h2 className="md:text-5xl text-4xl font-extrabold mb-2">
                Key Features
              </h2>
              <p className="text-teal-700 md:tracking-[0.25em] tracking-[0.1em]">
                EVERYTHING YOU NEED TO MONITOR ENERGY PERFORMANCE
              </p>
              <p className="font-sans mt-5">
                A connected monitoring solution designed to give industrial teams greater control over their energy consumption.
              </p>
            </div>

            {/* Animation - cards appear from left to right when are 20% visible*/}
            <motion.div 
            variants={containerVariants}    // variants 
            initial="hidden"    // state hidden - defined in variants above
            whileInView="visible"   // when this element enters the viewport, visible state. 
            viewport={{   // how to detect the element is on viewport
              once: true,     // executes the animation only the first time it appears on screen
              amount: 0.2     // must have approximately 20% visible to be considered "in view" 
            }} 
            className="flex flex-wrap gap-5 md:gap-10 justify-end ">
              
              {/* the children motion nodes inherit the state of their father */}
              {keyFeatures.map((feature, i) => (
                <motion.div
                key={`feature-${i}`}
                variants={cardVariants}>
                  <TitledCard {...feature} />
                </motion.div>
              ))}
            </motion.div>

          </section>
  );
}