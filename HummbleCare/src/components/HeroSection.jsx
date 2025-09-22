import FilledIconLabel from "./FilledIconLabel";
import { ArrowRight, Heart, Shield } from "lucide-react";
import RoundedIconBtn from "./RoundedIconBtn";
import RoundedBtn from "./RoundedBtn";
import IconLabel from "./IconLabel";
import Carousel from "./Carousel";
function HeroSection() {
  return (
    <section className="sm:px-0 pt-15 sm:pt-25 relative bg-gradient-to-br from-green-50 via-white to-green-50 overflow-hidden overflow-x-hidden ">
    <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 sm:top-20 right-10 w-72 h-72 bg-green-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000" />
      </div>
      <div className="grid grid-rows-2 sm:grid-rows-1 sm:flex sm:justify-between">
<div className="mx-5 relative sm:px-10 pb-5 sm:pb-10 sm:w-2xl ">
     
      <FilledIconLabel Icon={Heart} label={"NDIS Registered Services"}/>
      <div className="mt-2 sm:mt-6 text-5xl sm:text-6xl font-semibold">
        <p className=""> Supporting Every</p>
        <p className="text-green-500 my-2 sm:my-4">Ability with Dignity</p>
        <p className="">at Home & Beyond</p>
      </div>
      <p className="  text-gray-800 mt-5 sm:mt-10 text-md sm:text-xl mb-5 sm:mb-10 ">
        Professional disability support services designed to empower individuals, promoting dignity, independence, and peace of mind for families.
      </p>
      <div className="flex gap-2 sm:gap-5 mr-5 sm:mr-0">
      <div className="w-full sm:w-xl">
      <RoundedIconBtn Icon={ArrowRight} label={"Get Care Information"}/>
      </div>
      <RoundedBtn/>
     
      </div>
 <div className="mt-5 sm:mt-7 gap-5 sm:gap-10 flex ">
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
