

import HomeHero from '@/app/_home/_components/HomeHero'
import ValueProposition from '@/app/_home/_components/ValueProposition'
import KeyFeatures from '@/app/_home/_components/KeyFeatures'
import CallToAction from '@/app/_home/_components/CallToAction'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Intelligent Energy Management",
  description: "IoT-based energy monitoring solutions for industrial and commercial clients",
  
  // Open Graph metadata is inherited from the root layout.
};


export default function Home() {
  return (
      <main>

        <HomeHero />  

        <div id="offer" className="flex flex-col w-full max-w-[80%] mx-auto py-20 gap-25">
          <ValueProposition />
          <KeyFeatures />  
        </div>  
        
        <CallToAction />

      </main>
  );
}
