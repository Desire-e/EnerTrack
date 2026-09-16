"use client";

import { ProductCard } from './ProductCard'
import { motion } from "motion/react";
import { useSearchParams, useRouter } from "next/navigation";
// Types
import { TabItem } from "@/app/products/_types/tab-item"
import { Product } from "@/app/products/_types/product"

/**
 * useSearchParams() lets you read the current URL's query string.
 * https://nextjs.org/docs/app/api-reference/functions/use-search-params
 * 
 * useRouter() allows you to programmatically change routes inside Client Components.
 * https://nextjs.org/docs/app/api-reference/functions/use-router
 */


export default function TabList(
{ items, products }: 
{ items: TabItem[], products: Product[];}) {

    /**
     * Current tabitem selected (via URL)
     */
    
    const router = useRouter();
    const searchParams = useSearchParams();
    
    // If there's no tabitem via URL, selects tabitem default
    const requestedTab = searchParams.get("tab") ?? items[0]?.id;

    // Validate search parameter
    const activeTab = items.some((item) => item.id === requestedTab)
    ? requestedTab
    : items[0].id;


    /**
     * Filter products, based on active tabitem
     */

    const filteredProducts = products.filter(p => p.categoryId === activeTab);

    /**
     * Handler change of active tabitem.
     * When an active tab changes, URL changes
     */

    function handleTabChange(tabId: string) {
        router.push(
            `/products?tab=${tabId}`, // href
            { scroll: false } // navigate options
        )      
    }


    return (
        <div className="w-full">
            {/* Tab list with Tab items */}

            {/* Animation - bar movement of the active tab item */}
            <div role="tablist" aria-label="Products navigation" 
            className="flex md:gap-20 md:place-content-center place-content-between border-b border-gray-200 font-heading">

                { items.map((item) => {
                    const isActive = item.id === activeTab;
                    
                    return (
                        <button key={item.id} id={`tab-${item.id}`} role="tab" aria-selected={isActive}
                        aria-controls={`panel-${item.id}`} // associated with its own Tab panel id
                        onClick={() => handleTabChange(item.id) }
                        className={`relative px-3 py-2 transition-colors
                            ${isActive 
                                ? "text-teal-700 font-bold" 
                                : "text-gray-500 hover:text-gray-700"
                            }`}
                        >
                            {item.label}

                            {isActive && (
                                <motion.div
                                className="absolute bottom-[-1px] left-0 right-0 h-0.5 bg-teal-700"
                                layoutId="active-tab" // prop on multiple components to animate transitions between different elements or UI states 
                                transition={{
                                    duration: 0.4,
                                    ease: "easeInOut",
                                }} /> 
                            )}

                        </button>
                    );
                })}
            </div>

                       

            {/* Tab panel (content) */}
            <div className="pt-4">
                <div key={activeTab} id={`panel-${activeTab}`} role="tabpanel"
                aria-labelledby={`tab-${activeTab}`} // associated with its own Tab item id
                >
                    {/* shows content if is active */}
                    <div className="flex lg:flex-row flex-col gap-10 justify-center lg:items-start md:items-center w-[90%] mx-auto">
                        {filteredProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}