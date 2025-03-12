import { ArrowRight } from "lucide-react"

export function LearnMore(){
    return (
        <>
            <div className="flex gap-2 border border-white bg-white w-10/12 justify-center items-center py-3 opacity-0 group-hover:opacity-100 scale-100 group-hover:scale-100 transition-all duration-500 ease-in-out hover:bg-gray-200" >
                <span className="text-lg font-bold">Learn More</span>
                <ArrowRight className=" transform -rotate-40"  size={24}/>
            </div>
        </>
    )
}