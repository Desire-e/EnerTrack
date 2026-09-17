"use client";

import { motion, type Variants } from "motion/react";
import TitledCard from "@/app/_components/TitledCard";
import { keyFeatures } from "@/app/_home/_data/features";


const containerVariants: Variants = {
  hidden: {},

  visible: {
    transition: {
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

            <motion.div 
            variants={containerVariants}    
            initial="hidden"    
            whileInView="visible" 
            viewport={{ once: true, amount: 0.2 }} 
            className="flex flex-wrap gap-5 md:gap-10 justify-end "
            >
              
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