"use client"

import Image from "next/image";
import Link from "next/link";

export default function HomeHero() {

  function handleScroll(e: React.MouseEvent<HTMLAnchorElement>): void {
    e.preventDefault();
    // if node #offer exists, scrolls to it 
    document.getElementById("offer")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
        <section className="relative flex flex-col min-h-screen bg-black text-white xl:p-20 lg:p-15 p-10">

          {/* Background image */}
          <Image 
          src="/images/hero-image.jpg" 
          alt="" 
          fill // the image will occupy the size of its parent container
          sizes="100vw" // indicates to Next which size should download approximately - this doesn't affect to style 
          priority // indicates this image has loading priority
          className="object-cover" />
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/20" />

          {/* Content */}
          <div className="relative z-10 flex flex-col xl:gap-10 gap-7 max-w-[100%] md:max-w-[55%] xl:p-20 p-1">

            <div>
              <p className="font-heading md:text-base text-sm text-teal-300 mb-2 tracking-[0.35em]">
                IOT ENERGY MONITORING SOLUTIONS
              </p>
              <h1 className="font-heading md:text-6xl text-4xl font-black">
                Intelligent Energy Management for Industry
              </h1>
            </div>
          
            <div className='text-sm [text-underline-offset:4px]'>
              Real-time IoT monitoring to 
              <span className='underline decoration-teal-300 decoration-solid'> optimize energy use</span>
              , 
              <span className='underline decoration-teal-300 decoration-solid'> reduce costs </span> 
              and drive 
              <span className='underline decoration-teal-300 decoration-solid'> sustainable operations </span>
              across your industrial facilities.
            </div>

            {/* Scroll to next section */}
            <Link
              onClick={ handleScroll }
              href="#offer"
              className="md:max-w-[50%] inline-block text-center font-heading text-white p-2 border-teal-300 border-2 rounded-sm hover:text-black hover:bg-teal-300 focus:text-black focus:bg-teal-300 transition duration-300 ease-in-out">
              See our offer
            </Link>
          
          </div>
        </section>
  );
}

