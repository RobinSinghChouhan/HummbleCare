import { Mail, Map, Phone } from "lucide-react";
import FilledIconLabel from "./FilledIconLabel";
import InformaionForm from "./InformationForm";
import ContactComponent from "./ContactComponent";

const contactInfo = [
  {
    Icon: Phone,
    title: "Call Us",
    text: "Available 24/7 for emergencies",
    subtext: "(555) 123-CARE",
  },
  {
    Icon: Mail,
    title: "Email Us",
    text: "We'll respond within 2 hours",
    subtext: "info@hummblecare.com",
  },
  {
    Icon: Map,
    title: "Visit Us",
    text: "Main office location",
    subtext: "123 Healthcare Blvd Care City, CA 90210",
  },
];

function CareInformation() {
  return (
    <div>
      <div className="py-10 sm:py-20 bg-gradient-to-br from-green-50 via-50% to-green-100 px-5 sm:px-10">
        <div className="flex justify-center">
          <FilledIconLabel Icon={Mail} label={"Get Informaion"} />
        </div>
        <div className="text-center justify-items-center">
          <p className="text-3xl sm:text-5xl mt-5 sm:mt-10 font-semibold">
            Request Care Information
          </p>
          <p className="mt-4 sm:mt-8 text-md sm:text-xl text-gray-700 w-full">
            Let us know how we can help. Our care coordinators will create a
            personalized care plan for your loved one.
          </p>
        </div>
        <div className="sm:flex mt-5 sm:mt-10">
          <InformaionForm />
          <div className="mt-10 mx-5 sm:mx-0 sm:ml-10">
            <p className="text-lg sm:text-2xl font-semibold">Get in Touch</p>
            <div className="mt-5 sm:mt-10">
                {contactInfo.map((contact)=>(
                    <ContactComponent Icon={contact.Icon} title={contact.title} text={contact.text} subtext={contact.subtext}/>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CareInformation;
