import ProductsHero from '@/app/products/_components/ProductsHero'
import TabList from "@/app/products/_components/TabList"
import { products } from "@/app/products/_data/products";
import { tabItems } from "@/app/products/_data/tab-items";
import { Suspense } from "react";


export default function Products() {
    /**
     * If a component that's part of a prerendered page tree uses useSearchParams(), 
     * that component must be wrapped in a <Suspense> tag.
     * This will allow any parent client components to be prerendered and sent as 
     * part of the initial HTML.
     */
    return (
        // <Suspense> will cause the interface to pause until it's pre-rendered.
        // In the meantime, another interface can be displayed using fallback={...}.        
        <Suspense fallback={null}>
        <main>
            <ProductsHero />

            {/* Content */}
            <div className="flex flex-col w-full max-w-[95%] mx-auto py-20 gap-25">
                <section className='flex flex-col md:gap-15 gap-10 w-full'>
                    <TabList 
                    items={tabItems} // every section - Tab items 
                    // tabId={tabId} // default Tab item selected
                    products={products} // every product
                    />
                </section>
            </div>  
        </main>
        </Suspense>
  );
}

