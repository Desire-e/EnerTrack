import Overview from "@/app/about/_components/Overview";
import Mission from "@/app/about/_components/Mission";
import Team from "@/app/about/_components/Team";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About EnerTrack",
    description: "Learn about EnerTrack, our mission, and how we help businesses improve energy visibility and performance.",
    openGraph: {
        title: "About",
        description: "Learn about EnerTrack, our mission, and how we help businesses improve energy visibility and performance.",
        images: [
            {
                url: "/images/open-graphs/og-image-global.png",
                width: 941,
                height: 470,
                alt: "About EnerTrack",
            },
        ],
    },
};


export default function AboutUs() {

    return (
      <main>
            {/* Content */}
            <div className="flex flex-col w-full max-w-[85%] mx-auto py-20 lg:gap-30 gap-15">
                <Overview />
                <Mission />
                <Team />
            </div>
      </main>
  );
}
