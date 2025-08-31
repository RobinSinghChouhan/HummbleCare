import { Heart, Home, Phone, Shield, Stethoscope } from "lucide-react";
import IconLabel from "./IconLabel";
import FilledIconLabel from "./FilledIconLabel";
import ServiceCard from "./ServiceCard";

const services = [
  {
    icon: Heart,
    title: "Personal Care",
    description:
      "Assistance with daily activities, medication, and health monitoring.",
    points: [
      "Medication reminders",
      "Personal hygiene",
      "Mobility assistance",
      "Health monitoring",
    ],
  },
  {
    icon: Home,
    title: "Home Care",
    description:
      "Comprehensive in-home care services to help seniors live independently.",
    points: [
      "Light housekeeping",
      "Meal preparation",
      "Transportation",
      "Companionship",
    ],
  },
  {
    icon: Stethoscope,
    title: "Medical Care",
    description:
      "Professional medical services and health assessments by licensed professionals.",
    points: [
      "Health assessments",
      "Wound care",
      "Physical therapy",
      "Medical coordination",
    ],
  },
  {
    icon: Phone,
    title: "24/7 Support",
    description:
      "Round-the-clock availability for emergencies and peace of mind.",
    points: [
      "Emergency response",
      "Family updates",
      "Care coordination",
      "Health alerts",
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
          loved ones need to live comfortably and safely at home
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-4 mt-7 sm:mt-14 px-10 gap-2 sm:gap-5 ">
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
