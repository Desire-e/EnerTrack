import { Value } from "@/app/_types/titled-card";


export default function TitledCard({ title, description }: Value ){
    return(
            <div className="w-full md:max-w-xs">
                <h3 className="font-heading md:text-3xl text-2xl font-semibold mb-2">
                    {title}
                </h3>
                {description}
            </div>
    );
}