import { Card, CardBody } from "@material-tailwind/react";
import { ShadowFormField } from "./ShadowFormField";
import { useState } from "react";
import { MobileFormField } from "./MobileFormField";
import { useForm } from "react-hook-form";
import { stringify } from "postcss";
// import { Textarea } from "@material-tailwind/react";

export function InquireForm({ isDialogOpen, handleOpen }) {
  const {register, formState: {errors} ,handleSubmit} = useForm()
  const onSubmit = (data) => console.log("DATA:"+JSON.stringify(data)+"Errors"+errors);
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
            <div className="p-5 rounded-t-2xl  bg-green-500">
              <div className="flex justify-between">
                <div>
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
                    strokeWidth="2.5"
                    stroke="currentColor"
                    onClick={
                    handleOpen
                    }
                    className="size-7 text-white cursor-pointer"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="px-5">
              <form onSubmit={handleSubmit(onSubmit)}>
              <ShadowFormField
                register={register}
                // pattern={"/^[a-zA-Z]+(?: [a-zA-Z]+)+$/"}
                fieldName={"Full Name"}
                label="fullName"
                hintText={"John Doe"}
                errors = {errors.fullName}
              />
              <div className="h-3" />
              <ShadowFormField
                register={register}
                fieldName={"Email"}
                label="email"
                errors = {errors.email}
                // pattern={"/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/"}
                hintText={"user@example.com"}
              />
              <div className="h-3" />
              <MobileFormField register={register} errors={errors}/>
              <div className="h-3" />
              <div className="text-lg" color="blue-gray">
                Inquiry
              </div>
              <textarea
                {...register("inquiry",{required: true})}
                // aria-invalid={errors.fullName ? "true" : "false"}
                className={`mt-1 w-full p-2 border rounded-md focus:outline-none focus:ring-1 ${errors.inquiry?.type ? "focus:ring-red-600 border-red-600 placeholder:text-red-600" : "focus:ring-gray-900 border-gray-400"} resize-none placeholder:font-normal text-base font-normal`}
                rows="5"
                placeholder="Enter your text here..."
              />
              {errors.inquiry?.type === "required" && (
            <p className="ml-1 font-medium text-red-600 text-sm">Inquiry is required</p>
          )}
              {/* {validFullName && validEmail && validMobile && validInquiry ? (
                <div></div>
              ) : (
                <div>Error</div>
              )} */}
              <div className="text-2xl mt-5 mb-5">
                <div
                  className="cursor-pointer hover:bg-gray-600 flex rounded-lg bg-gray-700 p-2 text-base text-white font-roboto font-normal justify-center"
                  // onClick={() => {
                  //   setValidFullName(true);
                  //   setValidEmail(true);
                  //   setValidMobile(true);
                  //   setValidInquiry(true);
                  //   console.log("FULLNAME: " + fullName);
                  //   console.log("EMAIL: " + email);
                  //   console.log("Mobile: " + mobile);
                  //   console.log("Inquiry: " + inquiry);
                  //   if (fullName.length == 0) {
                  //     setValidFullName(false);
                  //   }
                  //   if (!email.includes("@")) {
                  //     setValidEmail(false);
                  //   }
                  //   if (inquiry.length == 0) {
                  //     setValidInquiry(false);
                  //   }
                  // }}
                  onClick={
                    handleSubmit(onSubmit)
                  }
                >
                  <div>Submit Inquiry</div>
                  <div className="w-2" />
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              
              </form>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
