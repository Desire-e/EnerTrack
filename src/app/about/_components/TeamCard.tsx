import { TeamArea } from "@/app/about/_types/team-area";

export default function TeamCard({title, description, wide}: TeamArea){
    return(
        
        <div className={`${wide ? 
        "lg:col-span-2" : 
        ""} 
        p-4 bg-teal-700/20`}>
            <h3 className="font-heading font-medium md:text-lg text-teal-700 md:tracking-[0.15em] tracking-[0.1em]">
                {title.toUpperCase()}
            </h3>
            <p className="text-sm">
                {description}    
            </p>
        </div>
    );
}