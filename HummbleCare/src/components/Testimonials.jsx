import { Star } from "lucide-react";
import FilledIconLabel from "./FilledIconLabel";
import ReviewCard from "./ReviewCard";

const reviews = [
    {
        stars: 5,
        description: "HummbleCare has been a blessing for our family. The caregivers are professional, compassionate, and truly care about my mother's wellbeing. I finally have peace of mind.",
        name: "Sarah Mitchell",
        subtext: "Daughter of care recipient"
    },
    {
        stars: 5,
        description: "The quality of care my father receives is exceptional. The staff is reliable, skilled, and treats him with dignity and respect. Highly recommend their services.",
        name: "Robert Chen",
        subtext: "Son of care recipient"
    },
    {
        stars: 5,
        description: "As a working daughter, HummbleCare has been invaluable. They provide the support my mother needs while keeping us informed every step of the way.",
        name: "Maria Rodriguez",
        subtext: "Family caregiver"
    }
]

function Testimonials() {
    return <div>
        <div className="py-10 sm:py-20 justify-items-center">
            <FilledIconLabel Icon={Star} label={"Testimonials"}/>
            <p className="text-3xl sm:text-5xl font-semibold mt-5 sm:mt-10">What Families Say About Us</p>
            <p className="text-center px-5 mt-4 sm:mt-8 text-lg sm:text-2xl text-gray-700">Real stories from families who trust us with their loved ones' care.</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-10 mt-10 w-full px-5 sm:px-10">
                {reviews.map((review)=>(
                    <ReviewCard stars={review.stars} description={review.description} name={review.name} subtext={review.subtext}/>
                ))}
            </div>
        </div>
    </div>
}

export default Testimonials;