import Overview from "./_components/Overview";
import Mission from "./_components/Mission";
import Team from "./_components/Team";
import Image from "next/image";

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
