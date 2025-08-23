import { Send } from "lucide-react";
import RoundedIconBtn from "./RoundedIconBtn";

function InformaionForm() {
  return (
    <div className="bg-white shadow-xl border-[1.5px] border-green-200 w-full sm:w-7/12 p-5 sm:p-10 rounded-2xl">
      <p className="text-xl sm:text-2xl font-medium">Care Information Request</p>
      <div className="text-lg sm:text-xl text-gray-800 font-medium">
        <div className="sm:flex justify-between">
          <div className="w-full sm:pr-10">
            <p className="mt-5 sm:mt-10">Full Name *</p>
            <div class="mt-1 sm:mt-2">
              <input
                type="text"
                id="default-input"
                placeholder="Robin Singh Chouhan"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:outline-none focus:border-[1.5px] focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
              />
            </div>
          </div>
          <div className="w-full">
            <p className="mt-3 sm:mt-10">Phone Number *</p>
            <div class="mt-1 sm:mt-2">
              <input
                type="text"
                id="default-input"
                placeholder="0449972775"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:outline-none focus:border-[1.5px] focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
              />
            </div>
          </div>
        </div>
        <div className="w-full">
          <p className="mt-4 sm:mt-8">Email Address *</p>
          <div class="mt-1 sm:mt-2">
            <input
              type="text"
              id="default-input"
              placeholder="email@gmail.com"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:outline-none focus:border-[1.5px] focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
            />
          </div>
          <div className="w-full">
            <p className="mt-4 sm:mt-8">Additional Information *</p>
            <div class="mt-1 sm:mt-2">
              <textarea
                id="message"
                rows="4"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:outline-none focus:border-[1.5px] focus:ring-green-500 focus:border-green-500 block w-full p-2.5 resize-none"
                placeholder="Write your thoughts here..."
              ></textarea>
            </div>
          </div>
          <div className="mt-5 sm:mt-10">
            <RoundedIconBtn IconLabel={Send} label={"Send Information Request"}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InformaionForm;
