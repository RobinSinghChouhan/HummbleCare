import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { SquibblyLines } from "./components/squibblyLines";
import { RoundedImgAbstract } from "./components/roundedImgAbstract";
import { RoundedButton } from "./components/roundedButton";
import { OutLinedButton } from "./components/outlinedButton";
import { RoundedImg } from "./components/roundedImg";
import { RoundedDiv } from "./components/RoundedDiv";
import { CareTile } from "./components/CareTile";
import { ButtonTile } from "./components/ButtonTile";
import ImageCarousel from "./components/RoundedImgCarousel";

function App() {
  const [count, setCount] = useState(0);
  const [imgCount, setImgCount] = useState(1);
  const [faq1, setFaq1] = useState("hidden");
  const [faq2, setFaq2] = useState("hidden");
  const [faq3, setFaq3] = useState("hidden");

  useEffect(()=>{
    const interval = setInterval( async()=>{
      await setImgCount(imgCount=>Math.floor((imgCount+1)%8));
      console.log(imgCount);
    },2000)
    return () => clearInterval(interval);
  },[imgCount])

  

  const services = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 stroke-green-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      ),
      title: "24/7 Care",
      description:
        "Our staff is available 24/7 to provide continuous care and support, ensuring your loved ones are never alone.",
    },
    {
      icon: (
        <svg
          viewBox="0 0 448 512"
          className="fill-green-500"
          fill="currentColor"
          height="1.3em"
          width="1.3em"
        >
          <path d="M96 128V70.2c0-13.3 8.3-25.3 20.8-30l96-36c7.2-2.7 15.2-2.7 22.5 0l96 36c12.5 4.7 20.8 16.6 20.8 30V128h-.3c.2 2.6.3 5.3.3 8v40c0 70.7-57.3 128-128 128s-128-57.3-128-128v-40c0-2.7.1-5.4.3-8H96zm48 48c0 44.2 35.8 80 80 80s80-35.8 80-80v-16H144v16zm-14.9 147.2l83.2 88.4c6.3 6.7 17 6.7 23.3 0l83.2-88.4c73.7 14.9 129.1 80 129.1 158.1 0 17-13.8 30.7-30.7 30.7H30.7C13.8 512 0 498.2 0 481.3c0-78.1 55.5-143.2 129.1-158.1zM208 48v16h-16c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h16v16c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8V96h16c4.4 0 8-3.6 8-8V72c0-4.4-3.6-8-8-8h-16V48c0-4.4-3.6-8-8-8h-16c-4.4 0-8 3.6-8 8z" />
        </svg>
      ),
      title: "Specialized Staff",
      description:
        "Our team consists of highly trained professionals who specialize in elderly and disability care, offering compassionate and skilled support.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 stroke-green-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
          />
        </svg>
      ),
      title: "Homely Space",
      description:
        "We create a homely and comfortable environment where residents feel safe and cared for, fostering a sense of belonging.",
    },
  ];

  const inquiries = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="size-10 bg-green-500 p-2 stroke-white rounded-lg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
          />
        </svg>
      ),
      title: "Service Inquiry",
      description:
        "Ask about our care services and how we can assist your needs.",
      buttonText: "Inquire Now",
      buttonLink: "",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="size-10 bg-green-500 p-2 stroke-white rounded-lg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
          />
        </svg>
      ),
      title: "Partnership opportunities",
      description:
        "Collaborate with us to enhance core services for the elderly and disabled.",
      buttonText: "Partner with Us",
      buttonLink: "",
    },
  ];

  const faqs = [
    {
      title: "Where are you located?",
      description:
        "HummbleCare operates from Point Cook in Victoria, Melbourne. You can fill up the google form in order to get more deatiled information.",
    },
    {
      title: "How do you ensure quality care?",
      description:
        "Our team of dedicated professionals is trained to provide compassionate and personalized care, ensuring the well-being of the elderly and disabled.",
    },
    {
      title: "What are your areas of specialization?",
      description:
        "We specialize in a range of care services, including daily living assistance, medical support, and emotional well-being for the elderly and disabled.",
    },
  ];

  const images = [
    "src/assets/nurse1.png",
    "src/assets/nurse2.png",
    "src/assets/nurse3.png",
    "src/assets/nurse4.png",
    "src/assets/nurse5.png",
    "src/assets/nurse6.png",
    "src/assets/nurse7.png",
    "src/assets/nurse8.png"
  ]

  // setInterval(()=>{
  //   // console.log("Hello");
  //   setImgCount(imgCount=>(imgCount+1))
  //   console.log(imgCount+"aaa");
  // },2000)

  return (
    <>
      <div className="m-5">
        <div className="text-3xl rounded-full w-16 h-16">
          <img
          src="src/assets/logo.png"/>
        </div>
        <div className="mt-5 flex justify-between">
          <div className="flex items-center">
            <div>
              <SquibblyLines />
              <div className="h-1"></div>
              <SquibblyLines />
            </div>
          </div>
          <RoundedImgAbstract imgLocation={"src/assets/nurse1.png"}/>
        </div>
        <div className="text-5xl mt-5 mb-5 text-start font-bold font-roboto">
          Caring for Your Loved Ones with Dedication
        </div>
        <RoundedImgAbstract imgLocation="src/assets/nurse_img.jpg"/>
        <div className="flex mt-14">
          <RoundedButton />
          <div className="w-2" />
          <OutLinedButton />
        </div>
        <div className="font-roboto mt-10 mb-10 text-start text-gray-700">
          At HummbleCare, we provide compassionate and professional care
          services for the elderly and disabled, ensuring they receive the
          attention and support they deserve.
        </div>
        <ImageCarousel/>
        
        <div className="mt-3" />
        <RoundedDiv />
        <div className="flex font-bold font-roboto mt-16 text-green-500">
          Dedicated Support
        </div>
        <div className="font-bold text-3xl text-start font-roboto mt-2">
          Comprehensive Care Services
        </div>
        <div className="text-start mt-5 text-gray-700 font-roboto">
          At HummbleCare, we provide unparalleled care services for the elderly
          and disabled, ensuring they receive the attention and support they
          deserve. Our dedicated team is here to offer personalized care around
          the clock.
        </div>
        <div className="mt-10">
          <CareTile
            icon={services[0].icon}
            title={services[0].title}
            description={services[0].description}
          />
          <div className="mt-8" />
          <CareTile
            icon={services[1].icon}
            title={services[1].title}
            description={services[1].description}
          />
          <div className="mt-8" />
          <CareTile
            icon={services[2].icon}
            title={services[2].title}
            description={services[2].description}
          />
        </div>
        <div className="text-3xl mt-16 font-bold text-start font-roboto">
          Reach Out to Us
        </div>
        <div className="text-start mt-4 text-gray-700">
          We're here to support you and your loved ones. Get in touch to learn
          more about our services.
        </div>
        <div className="mt-10">
          <ButtonTile
            icon={inquiries[0].icon}
            title={inquiries[0].title}
            description={inquiries[0].description}
            buttonText={inquiries[0].buttonText}
          />
          <div className="mt-10" />
          <ButtonTile
            icon={inquiries[1].icon}
            title={inquiries[1].title}
            description={inquiries[1].description}
            buttonText={inquiries[1].buttonText}
          />
        </div>

      <div className="mt-16"/>
      <RoundedImg imgLocation="src/assets/nurse_img.jpg"/>
        <div className="mt-8 text-start font-bold text-green-500">
          COMMON QUESTIONS
        </div>
        <div className="text-4xl font-bold text-start mt-2">
          Frequently Asked Questions
        </div>

        <div
          className="mt-5"
          id="accordion-flush"
          data-accordion="collapse"
          data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
          data-inactive-classes="text-gray-500 dark:text-gray-400"
        >
          <h2 id="accordion-flush-heading-1">
            <button
              type="button"
              class="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3"
              data-accordion-target="#accordion-flush-body-1"
              aria-expanded="true"
              aria-controls="accordion-flush-body-1"
              onClick={() => {
                if (faq1 == "hidden") {
                  setFaq1("");
                } else {
                  setFaq1("hidden");
                }
              }}
            >
              <span>{faqs[0].title}</span>
              <svg
                data-accordion-icon
                class="w-3 h-3 rotate-180 shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
          </h2>
          <div
            id="accordion-flush-body-1"
            className={faq1}
            aria-labelledby="accordion-flush-heading-1"
          >
            <div className="py-5 border-b border-gray-200 dark:border-gray-700">
              <p className="mb-2 text-gray-500 dark:text-gray-400 text-start">
                {faqs[0].description}
              </p>
            </div>
          </div>
          <h2 id="accordion-flush-heading-2">
            <button
              type="button"
              class="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3"
              data-accordion-target="#accordion-flush-body-2"
              aria-expanded="false"
              aria-controls="accordion-flush-body-2"
              onClick={() => {
                if (faq2 == "hidden") {
                  setFaq2("");
                } else {
                  setFaq2("hidden");
                }
              }}
            >
              <span>{faqs[1].title}</span>
              <svg
                data-accordion-icon
                class="w-3 h-3 rotate-180 shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
          </h2>
          <div
            id="accordion-flush-body-2"
            className={faq2}
            aria-labelledby="accordion-flush-heading-2"
          >
            <div class="py-5 border-b border-gray-200 dark:border-gray-700">
              <p class="mb-2 text-gray-500 dark:text-gray-400 text-start">
                {faqs[1].description}
              </p>
            </div>
          </div>
          <h2 id="accordion-flush-heading-3">
            <button
              type="button"
              class="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3"
              data-accordion-target="#accordion-flush-body-3"
              aria-expanded="false"
              aria-controls="accordion-flush-body-3"
              onClick={() => {
                if (faq3 == "hidden") {
                  setFaq3("");
                } else {
                  setFaq3("hidden");
                }
              }}
            >
              <span>{faqs[2].title}</span>
              <svg
                data-accordion-icon
                class="w-3 h-3 rotate-180 shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
          </h2>
          <div
            id="accordion-flush-body-3"
            className={faq3}
            aria-labelledby="accordion-flush-heading-3"
          >
            <div class="py-5 border-b border-gray-200 dark:border-gray-700">
              <p class="mb-2 text-gray-500 dark:text-gray-400 text-start">
                {faqs[2].description}
              </p>             
            </div>
          </div>
        </div>
        <div className=" bg-green-200 mt-16 -m-5 text-center p-10 ">
              <div className="text-gray-500 text-sm">
                2024 HummbleCare. All rights reserved.
              </div>
              <div className="mt-8 text-sm">
                Our Services
              </div>
              <div className="mt-5 text-sm">
                Support
              </div>
              <div className="flex items-center justify-center">
              <hr className="h-px my-5 bg-gray-300 border-0 w-24"/>
              </div>
              <div className="flex justify-center">
              <svg
      viewBox="0 0 512 512"
      fill="currentColor"
      height="1em"
      width="1em"
    >
      <path d="M496 109.5a201.8 201.8 0 01-56.55 15.3 97.51 97.51 0 0043.33-53.6 197.74 197.74 0 01-62.56 23.5A99.14 99.14 0 00348.31 64c-54.42 0-98.46 43.4-98.46 96.9a93.21 93.21 0 002.54 22.1 280.7 280.7 0 01-203-101.3A95.69 95.69 0 0036 130.4c0 33.6 17.53 63.3 44 80.7A97.5 97.5 0 0135.22 199v1.2c0 47 34 86.1 79 95a100.76 100.76 0 01-25.94 3.4 94.38 94.38 0 01-18.51-1.8c12.51 38.5 48.92 66.5 92.05 67.3A199.59 199.59 0 0139.5 405.6a203 203 0 01-23.5-1.4A278.68 278.68 0 00166.74 448c181.36 0 280.44-147.7 280.44-275.8 0-4.2-.11-8.4-.31-12.5A198.48 198.48 0 00496 109.5z" />
    </svg>
              <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1em"
      width="1em"
      className="mx-5"
    >
      <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0014.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z" />
    </svg>
    <svg
      viewBox="0 0 512 512"
      fill="currentColor"
      height="1em"
      width="1em"
    >
      <path d="M349.33 69.33a93.62 93.62 0 0193.34 93.34v186.66a93.62 93.62 0 01-93.34 93.34H162.67a93.62 93.62 0 01-93.34-93.34V162.67a93.62 93.62 0 0193.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32z" />
      <path d="M377.33 162.67a28 28 0 1128-28 27.94 27.94 0 01-28 28zM256 181.33A74.67 74.67 0 11181.33 256 74.75 74.75 0 01256 181.33m0-37.33a112 112 0 10112 112 112 112 0 00-112-112z" />
    </svg>
              </div>
        </div>
      </div>
    </>
  );
}

export default App;
