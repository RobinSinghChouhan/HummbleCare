import { useEffect, useState } from "react";

const labels = [
  {
    title: "Professional Medical Staff",
    description:
      "Licensed nurses and therapists for expert in-home medical care.",
    image: "nurse0.png",
  },
  {
    title: "Active & Healthy Lifestyle",
    description: "Encouraging mobility and activities for a fulfilling life.",
    image: "nurse1.png",
  },
  {
    title: "Compassionate Companionship",
    description:
      "Dedicated caregivers providing personal and engaging support.",
    image: "nurse2.png",
  },
];

function Carousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden rounded-3xl bg-green-50 mx-5 sm:mx-10 w-full h-full">
      <div className="absolute inset-0 justify-center">
        
            {labels.map((item, i) => (
          <img
            key={item.image}
            src={`src/assets/${item.image}`}
            alt={item.title}
            className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ease-in-out
              ${i === index ? "opacity-100" : "opacity-0"}`}
            draggable={false}
          />
        ))}
        
        
      </div>

      <div className="bg-gradient-to-b from-transparent to-gray-900/70 z-10 absolute inset-0 justify-between h-full" />

      <div className="z-20 absolute inset-0 justify-between h-9/12 sm:h-11/12 px-5 sm:px-10">
        
        <div className="h-14/15 sm:h-13/15"></div>
        <div className="z-20 h-0/15 sm:h-2/15 text-white">
        
            <div className="absolute transition-opacity duration-1000 ease-in-out">
          <p className="text-2xl sm:text-4xl font-medium opacity-80 ">
            {labels[index].title}
          </p>
          <p className="text-xl sm:text-2xl mt-2 opacity-80 text-green-100 pr-5 sm:pr-0">
            {labels[index].description}
          </p>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Carousel;
