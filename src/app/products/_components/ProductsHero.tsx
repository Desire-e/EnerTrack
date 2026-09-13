import Image from "next/image";

export default function ProductsHero() {
  return (
          <section className="relative flex md:flex-row flex-col gap-3 bg-black text-white 
          md:max-h-[50vh] w-full place-content-between items-center
          md:px-20 py-10 px-8">
  
            {/* bg image */}
            <Image src="/images/hero-products-image.jpg" alt="" 
            fill priority className="object-cover object-[center_45%]" />

            {/* overlay bg image */}
            <div className="absolute inset-0 bg-black/80" />

            {/* Decorative chart */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <svg
                className="absolute bottom-0 left-0 w-full h-[70%] opacity-40"
                viewBox="0 0 1440 320"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="currentColor"
                  fillOpacity="0.15"
                  d="M0,320 L0,170.82922891559946 L160,169.65031920325268 L320,267.1355307032506 L480,286.35583709626627 L640,245.80903982989295 L800,165.16455079973872 L960,150.99129736062483 L1120,139.98010721841024 L1280,191.99456714696677 L1440,108.75166059507859 L1440,320 Z"
                />
                <path
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  vectorEffect="non-scaling-stroke"
                  d="M0,170.82922891559946 L160,169.65031920325268 L320,267.1355307032506 L480,286.35583709626627 L640,245.80903982989295 L800,165.16455079973872 L960,150.99129736062483 L1120,139.98010721841024 L1280,191.99456714696677 L1440,108.75166059507859"
                />
              </svg>
            </div>            

            {/* content */}
            <div className="relative z-10 flex flex-col md:gap-5 gap-3
            md:max-w-[50%] max-w-[90%] md:px-3 px-1">
  
              <div>
                <p className="font-heading md:text-base text-sm text-teal-300 mb-2 tracking-[0.35em]">
                  PRODUCTS
                </p>
                <h1 className="font-heading md:text-5xl text-3xl font-extrabold">
                  Solutions designed around your energy data
                </h1>
              </div>
            
              <div className='text-sm [text-underline-offset:4px]'>
                From real-time consumption monitoring to intelligent energy analysis, 
                our solutions give your organization the visibility it needs to make better energy decisions.
              </div>
            </div>

            <div className="relative z-10 flex flex-col flex-wrap md:gap-5 gap-3
            text-sm font-light md:max-w-sm max-w-[90%]">
              
              {/* cards */}
              
              <div className="flex gap-3 bg-white/10 p-3 rounded-sm border-opacity-0 text-sm">
                <svg className="size-6 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
                </svg>
                Real-time monitoring Track energy consumption as it happens.
              </div>

              <p className="flex gap-3 bg-white/10 p-3 rounded-sm border-opacity-0 text-sm">
                <svg className="size-6 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
                </svg>
                Data & analytics	Turn consumption data into actionable insights.
              </p>
              
              <p className="flex gap-3 bg-white/10 p-3 rounded-sm border-opacity-0 text-sm">
                <svg className="size-6 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                </svg>
                Energy optimization Identify inefficiencies and reduce unnecessary consumption. 
              </p>
            </div>

          </section>
  );
}
