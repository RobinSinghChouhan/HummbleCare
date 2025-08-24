import FilledIconLabel from "./FilledIconLabel";
import { ArrowRight, Heart, Shield } from "lucide-react";
import RoundedIconBtn from "./RoundedIconBtn";
import RoundedBtn from "./RoundedBtn";
import IconLabel from "./IconLabel";
import Carousel from "./Carousel";
function HeroSection() {
  return (
    <section className="sm:px-10 pt-10 sm:pt-20 relative bg-gradient-to-br from-green-50 via-white to-green-50 overflow-hidden overflow-x-hidden ">
    <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top10 sm:top-20 right-10 w-72 h-72 bg-green-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000" />
      </div>
      <div className="grid grid-rows-2 sm:grid-rows-1 sm:flex sm:justify-between">
<div className="mx-5 relative sm:px-10 py-8 sm:py-16 sm:w-3xl ">
     
      <FilledIconLabel Icon={Heart} label={"Trusted Healthcare"}/>
      <div className="mt-5 sm:mt-10 text-5xl sm:text-7xl font-medium">
        <p>Compassionate</p>
        <p className="text-green-500 my-2 sm:my-4">Elderly Care</p>
        <p>at Home</p>
      </div>
      <p className="  text-gray-800 mt-5 sm:mt-10 text-md sm:text-xl mb-5 sm:mb-10 ">
        Professional healthcare services designed specifically for seniors, providing dignity, comfort, and peace of mind for families.
      </p>
      <div className="flex gap-2 sm:gap-5 mr-5 sm:mr-0">
      <div className="w-full sm:w-xl">
      <RoundedIconBtn IconLabel={ArrowRight} label={"Get Care Information"}/>
      </div>
      <RoundedBtn/>
     
      </div>
 <div className="mt-5 sm:mt-14 gap-5 sm:gap-10 flex ">
        <IconLabel Icon={Shield} label={"License & Insured"}/>
        <IconLabel Icon={Heart} label={"24/7 Support"}/>
      </div>
    
    </div>
<div className="flex flex-col items-center sm:w-5/12 pb-10 px-4">
        <Carousel/>
    </div>
      </div>
    
    
    </section>
  );
}

export default HeroSection;
