import {
    Input,
  } from "@material-tailwind/react";
 
export function ShadowFormField({fieldName, hintText,register,errors,label}) {
  return (<div className="mb-1 flex flex-col">
    <div color="blue-gray" className="text-lg font-medium font-roboto">
            {fieldName}
          </div>
          <Input
            {...register(label,{required: true})}
            // aria-invalid={errors ? "true" : "false"}
            placeholder={hintText}
            className={`p-3 border rounded-lg mt-1 focus:outline-none focus:ring-1 text-lg ${errors?.type ? "focus:ring-red-600 border-red-600 placeholder:text-red-600" : "focus:ring-gray-900 border-gray-400" }`}/>
          {errors?.type === "required" && (
            <p className="mt-1 ml-1 font-medium text-red-600 text-sm">{fieldName} is required</p>
          )} 
          </div>
          
  );
}