import { Clock, Shield, Star, Users } from "lucide-react";

const metrics = [
    {
        icon: Users,
        heading: "2500+",
        title: "Families Served",
        description: "Trusted by thousands of families"
    },

    {
        icon: Star,
        heading: "4.9",
        title: "Average Rating",
        description: "Based on family feedback"
    },

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
        <div className="py-20 bg-gradient-to-br from-green-50 to-green-300 justify-items-center">
            <p className="text-5xl font-semibold">Trusted by Families across the Community</p>
            <p className="mt-10 text-2xl text-gray-600">Our Commitment to excellence shows in every aspect of our care services.</p>
            <div className="grid grid-cols-4 mt-14 gap-18">
                {metrics.map((metric)=>(
                    <div className="py-5 px-10  justify-items-center">
                        <div className="shadow-xl bg-white h-18 w-18 rounded-2xl p-5 justify-items-center">
                            <metric.icon className="text-green-700 w-full h-full"/>
                        </div>
                        <p className="text-3xl mt-5 font-semibold">{metric.heading}</p>
                        <p className="text-2xl text-gray-800">{metric.title}</p>
                        <p className="text-xl text-gray-700 text-center">{metric.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
}

export default Community;