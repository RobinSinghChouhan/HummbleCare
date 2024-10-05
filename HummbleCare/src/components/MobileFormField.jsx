import {
    Input,
  } from "@material-tailwind/react";
 
export function MobileFormField({register,errors}) {
    return (<div className="mb-1 flex flex-col">
        <div color="blue-gray" className="text-lg font-medium font-roboto">
                {"Mobile"}
              </div>
              <div className="flex items-center">
                <div className="absolute flex ">
                    
              <div
          className={`h-full text-sm flex justify-center mt-1 ml-2 items-center bg-transparent ${errors.mobile?.type ? "text-red-500" : "text-slate-600"}`}>
          <span>+61</span>
        </div>
        <div className="h-6 border border-slate-300 ml-1 "></div>
      
        </div>
              <Input
                {...register('mobile', {required: true})}
                placeholder={"342-234-489"}
                type="tel"
                maxLength={9}
                className={`py-3 pl-11 border rounded-lg mt-1 focus:outline-none focus:ring-1 ${errors.mobile?.type ? "focus:ring-red-600 border-red-600 placeholder:text-red-600" : "focus:ring-gray-900 border-gray-400"} text-lg`}/>
              </div>
              {errors.mobile?.type === "required" && (
            <p className="mt-1 ml-1 font-medium text-red-600 text-sm">Mobile is required</p>
          )}
              </div>
      );
}


{/* <div className="relative mt-2">
      <div className="absolute top-2 left-0 flex items-center pl-3">
        <div
          className="h-full text-sm flex justify-center items-center bg-transparent text-slate-700 focus:outline-none"
        >
          <span id="dropdownSpan">+61</span>
        </div>
        <div className="h-6 border-l border-slate-200 ml-2"></div>
      </div>
      <input
        type="tel"
        // className="p-3 border-gray-400 border rounded-lg mt-1 focus:outline-none focus:ring-1 focus:ring-gray-900 text-lg"
        className="w-full border-gray-400 border rounded-lg mt-1 focus:outline-none focus:ring-1 focus:ring-gray-900 text-lg pr-3 pl-14 py-2"
        placeholder="324-456-2323"
        pattern="[0-9]*"
        inputmode="numeric"
        maxlength="12"
        id="phoneNumberInput"
      />
    </div> */}