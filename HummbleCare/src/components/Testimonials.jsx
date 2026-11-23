import { useEffect, useRef, useState } from "react";
import { Star } from "lucide-react";
import FilledIconLabel from "./FilledIconLabel";
import ReviewCard from "./ReviewCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
    },
    {
        stars: 5,
        description: "The team listens carefully and adapts their support as Mum's needs change. Communication is clear, warm, and consistently reliable.",
        name: "Daniel Wilson",
        subtext: "Son of care recipient"
    },
    {
        stars: 5,
        description: "Our support worker is kind, punctual, and encourages Dad to stay independent. We feel supported as a family, not just Dad.",
        name: "Priya Sharma",
        subtext: "Daughter of care recipient"
    },
    {
        stars: 5,
        description: "HummbleCare helped me feel confident in my daily routine and gave me more opportunities to join activities in my community.",
        name: "James Taylor",
        subtext: "NDIS participant"
    },
    {
        stars: 5,
        description: "The nursing team is knowledgeable and respectful. They explain every step and make sure my father is comfortable and included in decisions.",
        name: "Helen Nguyen",
        subtext: "Family caregiver"
    },
    {
        stars: 5,
        description: "Appointments are easy to arrange, carers arrive on time, and there is always a helpful person to answer our questions.",
        name: "Anthony Davis",
        subtext: "Brother of care recipient"
    },
    {
        stars: 5,
        description: "They have brought real independence into my life. The service feels personal, flexible, and genuinely focused on my goals.",
        name: "Rebecca Jones",
        subtext: "NDIS participant"
    }
]

function Testimonials() {
    const [activeIndex, setActiveIndex] = useState(0);
    const trackRef = useRef(null);
    const cardRefs = useRef([]);

    const scrollToReview = (index) => {
        const nextIndex = (index + reviews.length) % reviews.length;
        const track = trackRef.current;
        const card = cardRefs.current[nextIndex];
        if (!track || !card) return;

        setActiveIndex(nextIndex);
        track.scrollTo({
            left: card.offsetLeft - (track.clientWidth - card.clientWidth) / 2,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        scrollToReview(activeIndex);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            scrollToReview(activeIndex + 1);
        }, 5000);
        return () => clearInterval(interval);
    }, [activeIndex]);

    return <div>
        <div className="py-10 sm:py-20 flex flex-col items-center">
            <FilledIconLabel Icon={Star} label={"Testimonials"}/>
            <p className="text-2xl sm:text-5xl font-semibold mt-5 sm:mt-10">What Families Say About Us</p>
            <p className="text-center px-5 mt-4 sm:mt-8 text-md sm:text-xl text-gray-700">Real stories from families who trust us with their loved ones' care.</p>
            <div className="relative mt-10 w-full">
            <button
                type="button"
                aria-label="Previous review"
                onClick={() => scrollToReview(activeIndex - 1)}
                className="absolute left-2 sm:left-6 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white border border-green-200 p-2 sm:p-3 shadow-lg text-green-700 hover:bg-green-50"
            >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            <button
                type="button"
                aria-label="Next review"
                onClick={() => scrollToReview(activeIndex + 1)}
                className="absolute right-2 sm:right-6 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white border border-green-200 p-2 sm:p-3 shadow-lg text-green-700 hover:bg-green-50"
            >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            <div ref={trackRef} className="flex items-stretch gap-5 sm:gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory px-[9vw] sm:px-[34vw] py-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {reviews.map((review,i)=>(
                    <div
                        ref={(element) => { cardRefs.current[i] = element; }}
                        key={i}
                        className="w-[82vw] sm:w-[32vw] shrink-0 snap-center transition-transform duration-500"
                        onClick={() => scrollToReview(i)}
                    >
                        <ReviewCard
                            stars={review.stars}
                            description={review.description}
                            name={review.name}
                            subtext={review.subtext}
                            focused={i === activeIndex}
                        />
                    </div>
                ))}
            </div>
            </div>
            <div className="flex gap-2 mt-6">
                {reviews.map((_, i) => (
                    <button
                        key={i}
                        type="button"
                        aria-label={`Show review ${i + 1}`}
                        onClick={() => scrollToReview(i)}
                        className={`h-2 rounded-full transition-all ${i === activeIndex ? "w-8 bg-green-600" : "w-2 bg-green-200"}`}
                    />
                ))}
            </div>
        </div>
    </div>
}

export default Testimonials;