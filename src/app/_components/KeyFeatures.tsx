import TitledCard from "@/app/_components/TitledCard";
import { keyFeatures } from "@/app/_data/features";


export default function KeyFeatures() {
    return (
          <section className="flex flex-col md:gap-15 gap-10 md:max-w-[70%] ml-auto">
            <div className="font-heading text-right">
              <h2 className="md:text-5xl text-4xl font-extrabold mb-2">
                Key Features
              </h2>
              <h3 className="text-teal-700 md:tracking-[0.25em] tracking-[0.1em]">
                EVERYTHING YOU NEED TO MONITOR ENERGY PERFORMANCE
              </h3>
              <p className="font-sans mt-5">
                A connected monitoring solution designed to give industrial teams greater control over their energy consumption.
              </p>
            </div>

            <div className="flex flex-wrap gap-5 md:gap-10 justify-end ">
              {keyFeatures.map((feature, i) => (
                <TitledCard key={`feature-${i}`} {...feature} />
              ))}
            </div>

          </section>
    );
}