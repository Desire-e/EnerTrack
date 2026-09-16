import ProductsHero from '@/app/products/_components/ProductsHero'
import TabList from "@/app/products/_components/TabList"
import { products } from "@/app/products/_data/products";
import { tabItems } from "@/app/products/_data/tab-items";


export default function Products() {

    return (
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
  );
}

