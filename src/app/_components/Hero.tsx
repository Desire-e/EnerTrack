import Image from "next/image";

export default function Hero() {
  return (
        <section className="relative flex flex-col min-h-screen bg-black text-white
         md:p-20 p-8">

          {/* bg image */}
          <Image src="/images/hero-image.jpg" alt="" fill priority className="object-cover" />
          
          {/* gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/20" />

          {/* content */}
          {/* <div className='flex flex-col md:max-w-[50%] max-w-[80%] gap-10'> */}
          <div className="relative z-10 flex flex-col gap-10 
          max-w-[100%] md:max-w-[55%] md:p-20 p-1">

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

            {/* TODO. Route to next section */}
            <button className='md:max-w-[50%] font-heading text-white p-2 border-teal-300 border-2 rounded-sm
            hover:text-black hover:bg-teal-300 focus:text-black focus:bg-teal-300 
            transition duration-300 ease-in-out'>
              See our offer
            </button>
          </div>
        </section>
  );
}

