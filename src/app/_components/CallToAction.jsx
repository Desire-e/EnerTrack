
export default function CallToAction() {
    return (
          <section className="cta text-white md:p-40 p-10">
            <div className="mt-20 grid md:grid-cols-2 grid-cols-1 gap-5 items-center">
              <div className="font-heading">
                <h2 className="md:text-5xl text-4xl font-bold mb-2">
                  Ready to take control of your energy consumption?
                </h2>

                <p className="font-sans mt-5">
                  Discover how intelligent energy monitoring can help your facility reduce costs, improve efficiency, and operate more sustainably.
                </p>
              </div>

              {/* <div className="relative overflow-hidden h-full justify-items-center content-center">
                {/* circle gradient 
                <div className="absolute w-20 h-20 rounded-full bg-cyan-200 blur-2xl opacity-60" />
                {/* content 
                <div className="relative z-10 ">
                  <button>Request a quote</button>
                </div>
              </div> */}

              {/* TODO. Route */}
              <div className="md:w-[70%] mx-auto">
                <button className='md:max-w-[50%] font-heading p-2 border-teal-300 border-2 rounded-sm
                hover:text-black hover:bg-teal-300 focus:text-black focus:bg-teal-300 
                transition duration-300 ease-in-out'>
                  Request a quote ->
                </button>
              </div>

            </div>
          </section>
    );
}
