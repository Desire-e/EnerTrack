import TitledCard from "@/app/_components/TitledCard";
import { values } from "@/app/_data/values";


export default function ValueProposition() {
    return (
          <section className='flex flex-col md:gap-15 gap-10 w-full md:max-w-[70%] mr-auto'>

            <div className="font-heading">
              <h2 className="md:text-5xl text-4xl font-extrabold mb-2">Built for industrial performance</h2>
              <h3 className="text-teal-700 md:tracking-[0.25em] tracking-[0.1em]">
                TURN ENERGY DATA INTO ACTIONABLE INSIGHTS
              </h3>
              <p className="font-sans mt-5">
                  We help industrial facilities understand, control, and optimize their energy consumption through real-time data and intelligent monitoring. Our solutions provide the visibility you need to reduce waste, control costs, and make better operational decisions.
              </p>
            </div>
            

            {/* Cards */}
            <div className="flex flex-wrap gap-5 md:gap-10 justify-start">
              {values.map((val, i) => (
                <TitledCard key={`value-${i}`} {...val} />
              ))}
            </div>

        </section>
    );
}