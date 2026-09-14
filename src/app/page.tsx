

import HomeHero from '@/app/_components/HomeHero'
import ValueProposition from '@/app/_components/ValueProposition'
import KeyFeatures from '@/app/_components/KeyFeatures'
import CallToAction from '@/app/_components/CallToAction'
import Chatbot from '@/app/_components/Chatbot'

export default function Home() {
  return (
      <main>

        <HomeHero />  

        {/* Content */}
        <div id="offer" className="flex flex-col w-full max-w-[80%] mx-auto py-20 gap-25">
          <ValueProposition />
          <KeyFeatures />  
        </div>  
        
        <Chatbot />



        <CallToAction />

      </main>
  );
}
