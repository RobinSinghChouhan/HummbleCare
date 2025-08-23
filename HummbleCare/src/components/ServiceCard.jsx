import { Circle, CircleDot, CircleSmall } from "lucide-react";

function ServiceCard({Icon, title, description, points}) {
    return <div>
        <div className="group border-2 border-green-200 hover:border-green-300 hover:scale-102 hover:shadow-2xl transition-all duration-300 rounded-2xl p-10">
            <div className="bg-gradient-to-br from-green-400 to-green-700 w-16 h-16 group-hover:scale-110 transition-all duration-300 p-4 rounded-2xl">
                <Icon className="text-white w-full h-full"/>
            </div>
            <p className="mt-5 text-xl font-semibold">{title}</p>
            <p className="mt-2 text-xl text-gray-700">{description}</p>
            <div>
            {points.map((point)=>(
                <div className="flex items-center mt-5 text-lg text-gray-700">
                    <div className="w-2 h-2 bg-green-600 rounded-xl mr-3"/>
                    <p>{point}</p>
                </div>
            ))}
            </div>
        </div>
    </div>
}

export default ServiceCard;