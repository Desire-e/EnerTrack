"use client";

import { useState } from "react";
import { ProductCard } from './ProductCard'

// -----------------------
// Types 
// -----------------------

import { TabItem } from "@/app/products/_types/tab-item"
import { Product } from "@/app/products/_types/product"

// interface that defines properties received by Tab List
interface TabListProps {
  items: TabItem[];
  defaultTabId?: string; 
  products: Product[];
}

// -----------------------
// Component
// -----------------------

export default function TabList({ items, defaultTabId, products }: TabListProps) {
  
    // State - current tabitem selected
    const [activeTab, setActiveTab] = useState<string>(defaultTabId ?? items[0]?.id);
    // const [value, setValue] = useState<Type>(initialValue);

    // Obtains products to show
    const filteredProducts = products.filter(p => p.categoryId === activeTab);


    return (
        <div className="w-full">
            {/* Tab list with Tab items */}
            <div role="tablist" aria-label="Products navigation" 
            className="flex md:gap-20 md:place-content-center place-content-between border-b border-gray-200 font-heading">

                { items.map((item) => {
                    const isActive = item.id === activeTab;
                    
                    return (
                        <button key={item.id} id={`tab-${item.id}`} role="tab" aria-selected={isActive}
                        aria-controls={`panel-${item.id}`} // associated with its own Tab panel id
                        onClick={() => setActiveTab(item.id) }
                        className={`px-3 py-2 transition-colors border-b-2
                            ${isActive 
                                ? "border-teal-700 text-teal-700 font-bold" 
                                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                            }`
                        }>
                            {item.label}
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