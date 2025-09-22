import { Activity, Briefcase, ClipboardCheck, Heart, Home, Phone, Shield, Stethoscope, Users } from "lucide-react";
import FilledIconLabel from "./FilledIconLabel";
import ServiceCard from "./ServiceCard";


const services = [
  {
    icon: Heart,
    title: "Personal Care",
    description: "Support for personal daily routines, including high-intensity needs.",
    points: [
      "Assist Personal Activities High",
      "Assist Personal Activities",
    ],
  },
  {
    icon: Activity,
    title: "Life Skills & Transitions",
    description: "Guidance for major life stages and development of independent living skills.",
    points: [
      "Assist Life Stage, Transition",
      "Development – Life Skills",
    ],
  },
  {
    icon: Stethoscope,
    title: "Health & Nursing Care",
    description: "Professional nursing and health-related supports.",
    points: [
      "Community Nursing Care",
    ],
  },
  {
    icon: Home,
    title: "Daily Living & Household",
    description: "Practical help for shared living and household management.",
    points: [
      "Daily Tasks / Shared Living",
      "Household Tasks",
    ],
  },
  {
    icon: Users,
    title: "Community Participation",
    description: "Support to engage in community, social, and group activities.",
    points: [
      "Innovative Community Participation",
      "Participate Community",
      "Group / Centre Activities",
    ],
  },
  {
    icon: Briefcase,
    title: "Employment Support",
    description: "Help with accessing and maintaining employment opportunities.",
    points: [
      "Assist Access / Maintain Employment",
      "Specialised Supported Employment",
    ],
  },
];


function Services() {
  return (
    <div className="py-5 sm:py-20 h-fit">
      <div className="flex flex-col items-center justify-items-center">
        <FilledIconLabel Icon={Shield} label={"Our Services"} />

        <p className="mt-4 sm:mt-8 text-2xl sm:text-5xl font-semibold">
          Comprehensive Care Solutions
        </p>
        <p className="px-5 mt-4 sm:mt-8 text-md sm:text-xl w-full sm:w-200 text-center text-gray-700">
          From personal care to medical support, we provide everything your
          loved ones need to live comfortably and safely at home and community.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 mt-7 sm:mt-14 px-10 gap-2 sm:gap-5 ">
          {services.map((service,i) => (
            <ServiceCard
            key={i}
              Icon={service.icon}
              title={service.title}
              description={service.description}
              points={service.points}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
