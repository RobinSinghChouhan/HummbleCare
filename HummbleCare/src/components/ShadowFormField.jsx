import {
    Input,
  } from "@material-tailwind/react";
 
export function ShadowFormField({fieldName, hintText,setField, isValid}) {
  return (<div className="mb-1 flex flex-col">
    <div color="blue-gray" className="text-lg font-medium font-roboto">
            {fieldName}
          </div>
          <Input
            placeholder={hintText}
            className="p-3 border-gray-400 border rounded-lg mt-1 focus:outline-none focus:ring-1 focus:ring-gray-900 text-lg"
            onInputCapture={(e)=>{
              // console.log(e.target.value);
              setField(e.target.value);
            }}
          />
          </div>
  );
}