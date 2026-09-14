import Link from "next/link";

export default function CallToAction() {
    return (
          <section className="cta text-white lg:p-40 p-10">
            <div className="mt-20 grid md:grid-cols-2 grid-cols-1 gap-15 items-center">
              
              <div className="font-heading col-span-1">
                <h2 className="md:text-5xl text-4xl font-bold mb-2">
                  Ready to take control of your energy consumption?
                </h2>

                <p className="font-sans mt-5">
                  Discover how intelligent energy monitoring can help your facility reduce costs, improve efficiency, and operate more sustainably.
                </p>
              </div>

              <div className="col-span-1">
                <Link href="/contact"
                className="flex items-center gap-2 font-heading p-2 w-fit
                border-teal-300 border-2 rounded-sm
                hover:text-black hover:bg-teal-300 focus:text-black focus:bg-teal-300
                transition duration-300 ease-in-out">
                  Request a quote
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>

            </div>
          </section>
    );
}
