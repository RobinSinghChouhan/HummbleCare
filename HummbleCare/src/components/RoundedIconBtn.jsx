import {
  ArrowRight,
} from "lucide-react";

function RoundedIconBtn({IconLabel, label}) {
  return (
    <div onClick={()=>(
      alert("hi")
    )} className="group border border-green-700 flex shadow-2xl justify-center rounded-4xl px-3 sm:px-7 transition-all py-1 sm:py-3 bg-green-600  hover:cursor-pointer hover:bg-green-700 w-full items-center">
      <p className="text-md sm:text-2xl font-medium text-white">{label}</p>
      <IconLabel className="text-white w-3 h-3 sm:w-5 sm:h-5 ml-1 sm:ml-5 mr-1 sm:mr-5 font-semibold transform transition-transform group-hover:translate-x-2" />
    </div>
  );
}

export default RoundedIconBtn;
