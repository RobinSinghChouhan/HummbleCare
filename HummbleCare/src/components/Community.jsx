import { Clock, Shield, Star, Users } from "lucide-react";

const metrics = [
    // {
    //     icon: Users,
    //     heading: "250+",
    //     title: "Families Served",
    //     description: "Trusted by hundreds of families"
    // },

    // {
    //     icon: Star,
    //     heading: "4.9",
    //     title: "Average Rating",
    //     description: "Based on family feedback"
    // },

    {
        icon: Clock,
        heading: "10+",
        title: "Years Experience",
        description: "Dedicated to senior care"
    },

    {
        icon: Shield,
        heading: "100%",
        title: "Licensed Staff",
        description: "Fully certified professionals"
    }
]

function Community() {
    return <div>
        <div className="px-5 py-10 sm:py-20 bg-gradient-to-br from-0 to-green-100 justify-items-center text-center">
            <p className="text-2xl sm:text-5xl font-semibold">Trusted by Families across the Community</p>
            <p className="mt-5 sm:mt-10 text-md sm:text-2xl text-gray-600">Our Commitment to excellence shows in every aspect of our care services.</p>
            <div className="grid grid-cols-2 sm:grid-cols-2 mt-5 sm:mt-14 gap-8 sm:gap-18">
                {metrics.map((metric,i)=>(
                    <div key={i} className="py-2 sm:py-5 px-5 sm:px-10 flex flex-col items-center">
                        <div className="shadow-xl bg-white h-12 w-12 sm:h-18 sm:w-18 rounded-2xl p-2 sm:p-5 justify-items-center">
                            <metric.icon className="text-green-700 w-full h-full"/>
                        </div>
                        <p className="text-xl sm:text-3xl mt-5 font-semibold">{metric.heading}</p>
                        <p className="text-lg sm:text-2xl text-gray-800">{metric.title}</p>
                        <p className="text-md sm:text-xl text-gray-700 text-center">{metric.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
}

export default Community;