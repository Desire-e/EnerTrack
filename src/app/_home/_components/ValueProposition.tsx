"use client";

import { motion, type Variants } from "motion/react";
import TitledCard from "@/app/_components/TitledCard";
import { values } from "@/app/_home/_data/values";


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


export default function ValueProposition() {

  return (
        <section className='flex flex-col md:gap-15 gap-10 w-full md:max-w-[70%] mr-auto'>

          <div className="font-heading">
            <h2 className="md:text-5xl text-4xl font-extrabold mb-2">Built for industrial performance</h2>
            <p className="text-teal-700 md:tracking-[0.25em] tracking-[0.1em]">
              TURN ENERGY DATA INTO ACTIONABLE INSIGHTS
            </p>
            <p className="font-sans mt-5">
                We help industrial facilities understand, control, and optimize their energy consumption through real-time data and intelligent monitoring. Our solutions provide the visibility you need to reduce waste, control costs, and make better operational decisions.
            </p>
          </div>
          
          {/* Animation - cards appear from left to right when are 20% visible*/}

          {/* Cards */}
          <motion.div 
          variants={containerVariants} 
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,     
            amount: 0.2     
          }}
          className="flex flex-wrap gap-5 md:gap-10 justify-start">
            {values.map((val, i) => (
              <motion.div 
              variants={cardVariants}
              key={`value-${i}`}>
                <TitledCard {...val} />
              </motion.div>
            ))}
          </motion.div>

      </section>
  );
}