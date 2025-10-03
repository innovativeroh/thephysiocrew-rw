import { Diamond, Truck, Umbrella } from "lucide-react";
import React from "react";
import lines from '../../../public/Images/lines.png'
import Image from "next/image";

const features = [
  {
    icon: Truck,
    title: "FAST & FREE SHIPPING",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    highlighted: false,
  },
  {
    icon: Umbrella,
    title: "WARRANTY PROTECTION",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint velit.",
    highlighted: true,
  },
  {
    icon: Diamond,
    title: "PREMIUM MATERIALS",
    description: "Amet minim mollit non deserunt ullamco est sit aliqua.",
    highlighted: false,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="w-full relative">
        <Image src={lines} alt="" width={1920} height={1080} className="absolute top-0 left-0 w-full opacity-10 z-[-1]" />
      <main className="container mx-auto">
        <div className="px-5 pt-32 w-full flex-center flex-col gap-16">
          <div className="flex-[1] w-full flex-center text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl alan-semibold">
              Why choose us?
            </h1>
          </div>
          {/* --- MODIFIED GRID CONTAINER --- */}
          <div className="flex-[1] w-full grid grid-cols-1 gap-5 md:grid-cols-3 md:place-items-start max-w-[1200px] place-items-center place-content-center">
            {features.map((feature, index) => (
              <div
                key={index}
                // --- MODIFIED CARD CLASSNAME ---
                className={`flex w-full max-w-sm flex-col items-start justify-start rounded-xl p-6 shadow-md transition-all duration-300 ease-in-out sm:p-8
                  ${
                    feature.highlighted
                      ? "HeroBackground text-white md:translate-y-20"
                      : "bg-white text-gray-900"
                  }`}
                style={{ minHeight: "180px" }}
              >
                <div
                  className={`mb-4 flex h-12 w-12 items-center justify-center rounded-full
                    ${feature.highlighted ? "bg-white text-[#0F62BB]" : "bg-gray-100 text-gray-700"}`}
                >
                  <feature.icon className="h-6 w-6" strokeWidth={1.5} />
                </div>
                <h3
                  className={`mb-2 text-base alan-bold
                    ${feature.highlighted ? "text-white" : "text-gray-900"}`}
                >
                  {feature.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed mont-medium
                    ${feature.highlighted ? "text-white" : "text-gray-600"}`}
                >
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </section>
  );
};

export default WhyChooseUs;