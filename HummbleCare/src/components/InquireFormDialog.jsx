import { Card, CardBody } from "@material-tailwind/react";
import { ShadowFormField } from "./ShadowFormField";
import { useState } from "react";
// import { Textarea } from "@material-tailwind/react";

export function InquireForm({ isDialogOpen, handleOpen }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [inquiry, setInquiry] = useState("");

  if (!isDialogOpen) {
    return null;
  }

  const handleContentClick = (e) => {
    e.stopPropagation();
  };
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50"
      onClick={handleContentClick}
    >
      <div className=" shadow-lg mx-7 w-full rounded-2xl">
        <Card className="mx-auto w-full max-w-[24rem] rounded-2xl">
          <CardBody className="flex flex-col gap-4 p-0">
            <div className="p-5 rounded-t-2xl  bg-logo-color">
              <div className="flex justify-between">
                <div className="">
                  <div className="text-3xl text-white font-roboto font-medium">
                    Contact Us
                  </div>
                  <div className="text-lg text-white font-roboto text-opacity-85 font-normal">
                    We are here to help you
                  </div>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2.5"
                    stroke="currentColor"
                    onClick={handleOpen}
                    className="size-7 text-white cursor-pointer"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="px-5">
              <ShadowFormField fieldName={"Full Name"} hintText={"John Doe"} setField={setFullName} />
              <div className="h-3" />
              <ShadowFormField
                fieldName={"Email"}
                hintText={"user@example.com"}
                setField={setEmail}
              />
              <div className="h-3" />
              <ShadowFormField
                fieldName={"Mobile"}
                hintText={"+610123456789"}
                setField={setMobile}
              />
              <div className="h-3" />
              <div className="text-lg" color="blue-gray">
                Inquiry
              </div>
              <textarea
                className="mt-1 w-full p-2 border border-gray-400 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-900 resize-none placeholder:font-normal text-base font-normal"
                rows="5"
                placeholder="Enter your text here..."
                onInputCapture={(e)=>{
                  setInquiry(e.target.value);
                }}
              />
              <div className="text-2xl mt-5 mb-5">
                <div className="cursor-pointer hover:bg-gray-600 flex rounded-lg bg-gray-700 p-2 text-base text-white font-roboto font-normal justify-center"
                onClick={()=>{
                  console.log("FULLNAME: "+fullName);
                  console.log("EMAIL: "+email);
                  console.log("Mobile: "+mobile);
                  console.log("Inquiry: "+inquiry);
                }}>
                  <div>Submit Inquiry</div>
                  <div className="w-2" />
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="size-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
