import Image from "next/image";
import React from "react";
import Icon1 from "../../../public/icons/physiotherapy.png";
import Icon2 from "../../../public/icons/exercise.png";
import Icon3 from "../../../public/icons/home-care.png";
import Icon4 from "../../../public/icons/massage.png";

const ServicesSection = () => {
  const services = [
    {
      title: "Physiotherapy",
      description: "Expert care for musculoskeletal issues.",
      buttonText: "Learn More",
      icon: Icon1,
    },
    {
      title: "Clinical Exercise",
      description: "Tailored programs for optimal fitness.",
      buttonText: "Learn More",
      icon: Icon2,
    },
    {
      title: "Home Care Physio",
      description: "Comfortable care in your own home.",
      buttonText: "Learn More",
      icon: Icon3,
    },
    {
      title: "Remedial Massage",
      description: "Therapeutic massage for pain relief.",
      buttonText: "Learn More",
      icon: Icon4,
    },
  ];
  return (
    <section>
      <main className="max-w-[1440px] mx-auto">
        <div className="px-5 py-20 w-full flex flex-col gap-10 items-center justify-center">
          <div className="w-full flex flex-col gap-3 items-center justify-center text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-black alan-bold">
              Our Services
            </h1>
            <p className="text-lg text-gray-500 max-w-[800px] mont-medium">
              Dedicated to your health and well-being.
            </p>
          </div>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-[1100px]">
            {services.map((card, index) => (
              <div
                // Use justify-between to push the button to the bottom
                className="px-5 py-5 h-full w-full bg-gradient-to-br from-[#C1E1F0] to-[#c1e1f0ad] flex flex-col items-start justify-between rounded-lg max-w-[250px] mx-auto"
                key={index}
              >
                {/* Wrapper for the top content */}
                <div className="flex flex-col gap-5 items-start">
                  <div className="w-full flex flex-col gap-3 items-start justify-center">
                    <Image
                      src={card.icon}
                      alt={`${card.title} icon`}
                      width={1920}
                      height={1080}
                      className="w-auto h-10"
                    />
                    <h1 className="text-3xl text-[#14293B] alan-medium max-w-[200px]">
                      {card.title}
                    </h1>
                  </div>
                  <p className="text-sm text-[#14293B]/75 mont-regular">
                    {card.description}
                  </p>
                </div>
                <button className="px-5 py-2 mont-bold bg-white text-[#14293B] text-sm rounded-full mt-3">
                  {card.buttonText}
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>
    </section>
  );
};

export default ServicesSection;