import {
  ArrowBigRight,
  ArrowBigRightDash,
  ArrowRight,
  ArrowRightFromLine,
} from "lucide-react";

function RoundedIconBtn() {
  return (
    <div className="border border-green-700 flex shadow-2xl justify-between rounded-4xl pl-7 pr-7 hover:pr-5 transition-all py-3 bg-green-600  hover:cursor-pointer hover:bg-green-700 w-[330px] items-center">
      <p className="text-2xl font-medium text-white">Get Care Information</p>
      <ArrowRight className="text-white w-5 h-5 ml-5 font-semibold" />
    </div>
  );
}

export default RoundedIconBtn;
