import FilledIconLabel from "./FilledIconLabel";
import { Heart, Shield } from "lucide-react";
import RoundedIconBtn from "./RoundedIconBtn";
import RoundedBtn from "./RoundedBtn";
import IconLabel from "./IconLabel";
import Carousel from "./Carousel";
function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-green-50 via-white to-green-50 overflow-hidden">
    <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-green-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000" />
      </div>
      <div className="flex justify-between">
<div className="relative px-10 py-16 min-w-fit  w-7/12">
      <FilledIconLabel Icon={Heart} label={"Trusted Healthcare"}/>
      <div className="mt-10 text-7xl font-medium">
        <p>Compassionate</p>
        <p className="text-green-500 my-4">Elderly Care</p>
        <p>at Home</p>
      </div>
      <p className="text-gray-800 mt-10 text-xl max-w-2xl mb-10">
        Professional healthcare services designed specifically for seniors, providing dignity, comfort, and peace of mind for families.
      </p>
      <div className="flex gap-5">

      <RoundedIconBtn/>
      <RoundedBtn/>
     
      </div>
 <div className="mt-14 gap-10 flex">
        <IconLabel Icon={Shield} label={"License & Insured"}/>
        <IconLabel Icon={Heart} label={"24/7 Support"}/>
      </div>
    </div>
<div className="flex w-5/12  items-center">
        <Carousel/>
    </div>
      </div>
    
    
    </section>
  );
}

export default HeroSection;
