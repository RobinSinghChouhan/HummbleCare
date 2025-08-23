import { Circle, CircleDot, CircleSmall } from "lucide-react";

function ServiceCard({Icon, title, description, points}) {
    return <div>
        <div className="group border-[1.5px] border-green-200 hover:border-green-300 hover:scale-102 hover:shadow-2xl transition-all duration-300 rounded-2xl p-5 sm:p-10">
            <div className="bg-gradient-to-br from-green-400 to-green-700 w-10 h-10 sm:w-16 sm:h-16 group-hover:scale-110 transition-all duration-300 p-2 sm:p-4 rounded-2xl">
                <Icon className="text-white w-full h-full"/>
            </div>
            <p className="mt-5 text-lg sm:text-xl font-semibold">{title}</p>
            <p className="mt-2 text-lg sm:text-xl text-gray-700">{description}</p>
            <div>
            {points.map((point)=>(
                <div className="flex items-center mt-2 sm:mt-5 text-md sm:text-lg text-gray-700">
                    <div className="w-1 h-1 sm:w-2 sm:h-2 bg-green-600 rounded-xl mr-3"/>
                    <p>{point}</p>
                </div>
            ))}
            </div>
        </div>
    </div>
}

export default ServiceCard;