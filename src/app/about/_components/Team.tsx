import Image from "next/image";
import TeamCard from "./TeamCard";
import { teamAreas } from "@/app/about/_data/team-areas"

export default function Team(){
    return(
        <section className="flex flex-col md:gap-10 gap-10 w-full">

            {/* Brief decription */}
            <div className="flex flex-col md:flex-row md:gap-15 gap-10 text-sm w-full ">

                <div className="md:w-[60%] order-1 md:order-2"> 
                    <h2 className="font-heading md:text-5xl text-3xl font-extrabold mb-3">
                        Our Team
                    </h2>
                    <p>Our team brings together expertise in energy management, IoT technology, software, and data to create practical solutions for modern industrial operations.</p>
                </div>

                {/* gets smaller, or gets bigger */}
                <Image className="md:w-[30%] flex-1 order-2 md:order-1" src="/images/placeholder-image.png" 
                alt="Team picture" width={2200} height={2200} priority />

            </div>

            {/* Teams - cards */}
            <div className="flex xl:flex-row flex-col flex-wrap gap-5 w-full items-center justify-center gap-10">
                <h3 className="font-heading font-bold text-3xl text-center">
                    Built by People Who Understand Energy and Technology
                </h3>

                {/* Team - bento cards */}
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 xl:max-w-[50%] ">
                    {teamAreas.map((area) => (
                        <TeamCard key={area.title} {...area} />
                    ))}
                </div>

                <Image className="xl:w-[40%] lg:w-[70%] flex-1" src="/images/placeholder-image.png" alt="Team picture" 
                width={2200} height={2200} loading="lazy" />

            </div>

        </section>
    );
}