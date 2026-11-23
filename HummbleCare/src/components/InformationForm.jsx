import { Send } from "lucide-react";
import RoundedIconBtn from "./RoundedIconBtn";
import { useState } from "react";
import emailjs from "@emailjs/browser";


function InformaionForm() {

const [open,setOpen] = useState(false);
const [selected,setSelected] = useState("");
const [fullName,setFullName] = useState("");
const [mobile, setMobile] = useState("");
const [email,setEmail] = useState("");
const [info,setInfo] = useState("");
const [isSending,setIsSending] = useState(false);
const [status,setStatus] = useState("");



const handleForm = async () => {

  console.log("Email: "+email)
  console.log("Mobile: "+mobile)
  console.log("Full Name: "+fullName)
  console.log("Info: "+info)
  console.log("Urgency: "+selected)
  const templateParams = {
      name: fullName,       // matches {{name}}
      user_email: email,    // matches {{user_email}}
      mobile: mobile,
      message: info,
      urgency: selected,
    };

     if (!fullName || !email || !mobile || !info || !selected) {
    alert("Please fill in all required fields.");
    return;
  }

  // Simple email regex validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  const mobileRegex = /^\d{8,15}$/;
  if (!mobileRegex.test(mobile)) {
    alert("Please enter a valid mobile number (8-15 digits).");
    return;
  }

  const serviceId = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    setStatus("Email service is not configured.");
    return;
  }

  setIsSending(true);
  setStatus("");

  try {
    await emailjs.send(serviceId, templateId, templateParams, publicKey);
    setStatus("Information request sent successfully.");
  } catch (error) {
    console.error("EmailJS failed:", error);
    if (error?.text?.includes("Gmail_API") || error?.status === 412) {
      setStatus("Email provider connection failed. Please reconnect the Gmail service in EmailJS.");
    } else {
      setStatus("Unable to send the request. Please try again.");
    }
  } finally {
    setIsSending(false);
  }
}

  return (
    <div className="bg-white shadow-xl border-[1.5px] border-green-200 w-full sm:w-7/12 p-5 sm:p-10 rounded-2xl">
      <p className="text-xl sm:text-2xl font-medium">Care Information Request</p>
      <div className="text-md sm:text-xl text-gray-800 font-medium">
        <div className="sm:flex justify-between">
          <div className="w-full sm:pr-10">
            <p className="mt-5 sm:mt-10">Full Name *</p>
            <div className="mt-1 sm:mt-2">
              <input
                type="text"
                onChange={(e)=>(
                   setFullName(e.target.value) 
                )}
                id="default-input"
                placeholder="Enter Full Name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm sm:text-lg rounded-lg focus:outline-none focus:border-[1.5px] focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
              />
            </div>
          </div>
          <div className="w-full">
            <p className="mt-3 sm:mt-10">Phone Number *</p>
            <div className="mt-1 sm:mt-2">
              <input
                type="text"
                id="default-input"
                onChange={(e)=>(
                   setMobile(e.target.value) 
                )}
                placeholder="Phone Number"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm sm:text-lg rounded-lg focus:outline-none focus:border-[1.5px] focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
              />
            </div>
          </div>
        </div>
        <div className="w-full">
          <p className="mt-4 sm:mt-8">Email Address *</p>
          <div className="mt-1 sm:mt-2">
            <input
              type="text"
              id="default-input"

                onChange={(e)=>(
                   setEmail(e.target.value) 
                )}
              placeholder="Please enter email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm sm:text-lg rounded-lg focus:outline-none focus:border-[1.5px] focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
            />
          </div>
<div className="w-full">
  <p className="mt-4 sm:mt-8">Urgency level *</p>
  
  <div className="relative mt-1 sm:mt-2">
    <button
      type="button"
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm sm:text-lg rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 block w-full px-4 py-2.5 text-left flex justify-between items-center"
      onClick={() => setOpen(!open)}
    >
      {selected || "Select urgency"}
      <svg
        className={`w-3 h-3 transition-transform ${open ? "rotate-180" : ""}`}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 10 6"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m1 1 4 4 4-4"
        />
      </svg>
    </button>

    {open && (
      <div className="absolute mt-1 z-10 w-full bg-white border border-gray-200 rounded-lg shadow-lg">
        <ul className="py-2 text-gray-700 text-sm sm:text-lg">
          {["Immediate (within 24 hours)", "Within a week", "Within a month", "Future Planning"].map((option) => (
            <li key={option}>
              <button
                type="button"
                className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded-lg"
                onClick={() => {
                  setSelected(option);
                  setOpen(false);
                }}
              >
                {option}
              </button>
            </li>
          ))}
        </ul>
      </div>
    )}
  </div>
</div>


          <div className="w-full">
            <p className="mt-4 sm:mt-8">Additional Information *</p>
            <div className="mt-1 sm:mt-2">
              <textarea
                id="message"
                rows="4"

                onChange={(e)=>(
                   setInfo(e.target.value) 
                )}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm sm:text-lg rounded-lg focus:outline-none focus:border-[1.5px] focus:ring-green-500 focus:border-green-500 block w-full p-2.5 resize-none"
                placeholder="Tell us about your specific care needs, schedule preferences, or any questions you have..."
              ></textarea>
            </div>
          </div>
          <div className="mt-5 sm:mt-10">
            <RoundedIconBtn onClick={handleForm} Icon={Send} label={isSending ? "Sending..." : "Send Information Request"} disabled={isSending}/>
          </div>
          {status && (
            <p className="mt-4 text-center text-sm sm:text-lg text-gray-700">{status}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default InformaionForm;
