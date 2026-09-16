import Image from "next/image";
import { Product } from "@/app/products/_types/product"

export function ProductCard(
    { product }: //prop
    { product: Product} ) { // type of prop

    return (
        <div className="flex flex-col lg:w-[45%] md:w-[75%] gap-5 p-8 bg-white/30 border-transparent rounded shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">

            <div className="flex xl:flex-row flex-col gap-5">
                {/* Cover image */}
                <div className="xl:w-[50%] w-full relative aspect-[3/2] shrink-0 self-start">
                    <Image loading="lazy" fill sizes="50%" className="object-cover object-[center_45%]"
                    src={product.image === "" ? 
                        "/images/placeholder-image.png" : 
                        `/images/${product.image}` 
                    }
                    alt={`${product.title}`} />
                </div>

                <h2 className="font-heading font-extrabold md:text-3xl text-2xl mb-2">{product.title}</h2>
            </div>
            
            {/* Data */}
            <div className="flex flex-col gap-5">

                <p className="text-black/60 text-sm">{product.description}</p>

                <div>
                    <ul className="flex flex-col">
                        { product.features.map((feature, i) => (
                            <li className="flex items-center gap-2" key={`feature-${i}`}>
                                <svg aria-hidden="true" className="size-4 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                </svg>
                                {feature}
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h3 className="font-heading font-bold md:text-xl text-lg text-teal-700 border-b py-2 my-2">
                        Specifications
                    </h3>
                    <ul>
                        { product.specifications.map((specification, i) => (
                            <li key={`specification-${i}`}>{specification}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>  
  );
}

