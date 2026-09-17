import ProductsHero from '@/app/products/_components/ProductsHero'
import TabList from "@/app/products/_components/TabList"
import { products } from "@/app/products/_data/products";
import { tabItems } from "@/app/products/_data/tab-items";
import { Suspense } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Energy Management Products",
    description: "Explore EnerTrack's IoT-based energy monitoring products designed for industrial and commercial facilities.",
    openGraph: {
        title: "Energy Management Products",
        description: "Explore EnerTrack's IoT-based energy monitoring products designed for industrial and commercial facilities.",
        images: [
            {
                url: "/images/open-graphs/og-image-global.png",
                width: 960,
                height: 480,
                alt: "EnerTrack energy management products",
            }
        ],
    }
}


export default function Products() {
    /**
     * A component part of a prerendered page tree using useSearchParams() 
     * must be wrapped in <Suspense>. Will allow any parent client component 
     * to be prerendered and sent as part of the initial HTML.
     */
    return (
        <Suspense fallback={null}>
        <main>
            <ProductsHero />

            <div className="flex flex-col w-full max-w-[95%] mx-auto py-20 gap-25">
                <div className='flex flex-col md:gap-15 gap-10 w-full'>
                    <TabList 
                    items={tabItems} 
                    products={products} 
                    />
                </div>
            </div>  
        </main>
        </Suspense>
  );
}

