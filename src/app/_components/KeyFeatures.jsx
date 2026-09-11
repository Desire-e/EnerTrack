export default function KeyFeatures() {
    return (
          <section className="flex flex-col md:gap-15 gap-10 md:max-w-[70%] ml-auto">
            <div className="font-heading text-right">
              <h2 className="md:text-5xl text-4xl font-bold mb-2">
                Key Features
              </h2>
              <h3 className="text-teal-700 md:tracking-[0.25em] tracking-[0.1em]">
                EVERYTHING YOU NEED TO MONITOR ENERGY PERFORMANCE
              </h3>
              <p className="font-sans mt-5">
                A connected monitoring solution designed to give industrial teams greater control over their energy consumption.
              </p>
            </div>


            {/* cards */}
            <div className="flex flex-wrap gap-5 md:gap-10 justify-end ">
              {/* card 1 */}
              <div className="w-full md:max-w-xs ">
                <h4 className="font-heading md:text-3xl text-2xl font-semibold mb-2">
                  Real-Time Monitoring
                </h4>
                  Track energy consumption and performance in real time across your industrial facilities.
              </div>

              <div className="w-full md:max-w-xs ">
                <h4 className=" font-heading md:text-3xl text-2xl font-semibold mb-2">
                  Centralized Data
                </h4>
                Access your energy data from a single, clear, and easy-to-use platform.
              </div>
              
              <div className="w-full md:max-w-xs ">
                <h4 className=" font-heading md:text-3xl text-2xl font-semibold mb-2">
                  Consumption Insights
                </h4>
                Identify consumption patterns, inefficiencies, and opportunities for optimization.
              </div>


              <div className="w-full md:max-w-xs ">
                <h4 className=" font-heading md:text-3xl text-2xl font-semibold mb-2">
                  Performance Tracking
                </h4>
                Monitor key energy indicators and measure the impact of your efficiency efforts over time.
              </div>
            </div>

          </section>
    );
}