import {
  Award,
  Handshake,
  HeartHandshake,
  ShieldCheck,
  StarIcon,
  Target,
} from "lucide-react";
import Image from "next/image";
import lines from "../../../public/Images/lines.png";
import React from "react";

const MainContant = () => {
  const statsData = [
    {
      value: "100%",
      label: "Patient satisfaction rate, reflecting our dedication to care.",
    },
    {
      value: "8+",
      label: "Years of trusted service to our community since 2017.",
    },
    {
      value: "2",
      label: "Welcoming clinics in Tullamarine and Carlton.",
    },
    {
      value: "1000+",
      label: "Lives improved on their journey to better health.",
    },
  ];

  // Data for Core Values
  const coreValues = [
    {
      name: "Respect",
      icon: Handshake,
      description: "Treating every individual with dignity and consideration.",
    },
    {
      name: "Integrity",
      icon: ShieldCheck,
      description:
        "Upholding the highest standards of professionalism and ethics.",
    },
    {
      name: "Compassion",
      icon: HeartHandshake,
      description: "Providing empathetic care that supports your well-being.",
    },
    {
      name: "Excellence",
      icon: Award,
      description:
        "Striving for the best outcomes through continuous learning.",
    },
  ];
  return (
    <section className="pt-32 relative">
      <Image
        src={lines}
        alt=""
        width={1920}
        height={1080}
        className="absolute top-0 left-0 w-full opacity-10 z-[-1]"
      />
      <main className="container mx-auto">
        <div className="px-5 w-full flex flex-col lg:flex-row gap-10 items-start justify-center">
          <div className="flex-[1] w-full flex flex-col items-start justify-center gap-3">
            <h2 className="text-4xl sm:text-5xl font-josefin-semibold tracking-tight text-gray-900 leading-tight">
              Empowering Your Health Journey with Confidence
            </h2>
            <p className="text-lg leading-8 text-gray-600 font-brandon-medium max-w-2xl">
              Our success is measured by the lives we help improve. Every
              patient who walks through our doors is treated with respect,
              empathy, and a personalised approach to their health and
              wellbeing. Our passion is people, and our greatest reward is
              seeing you achieve the health and quality of life you deserve
            </p>
          </div>
          <div className="flex-[1] w-full flex flex-col gap-5 items-start justify-start">
            <div className="flex items-center gap-4">
              <div className="text-[#3D6A89] rounded-full">
                <Target className="w-8 h-8" strokeWidth={2} />
              </div>
              <h3 className="text-3xl sm:text-4xl font-josefin-semibold text-gray-900">
                Our Purpose
              </h3>
            </div>
            <p className="text-lg leading-8 text-gray-700 font-brandon-medium max-w-xl">
              To display best practice by providing a bespoke care plan
              addressing patient goals through continued commitment to
              professional development.
            </p>
            <h3 className="text-3xl sm:text-4xl font-josefin-semibold text-gray-900 mt-10">
              Our Core Values
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {coreValues.map((value) => (
                <h1
                  key={value.name}
                  className="p-6 bg-[#003B64] rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-white text-[#003B64] p-2.5 rounded-full">
                      <value.icon className="w-6 h-6" strokeWidth={2} />
                    </div>
                    <h4 className="text-xl font-josefin-semibold text-white">
                      {value.name}
                    </h4>
                  </div>
                  <p className="mt-3 text-base font-brandon-medium text-white">
                    {value.description}
                  </p>
                </h1>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-full mt-16 sm:mt-24 max-w-[1380px] mx-auto">
          <dl className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 place-content-between place-items-between">
            {statsData.map((stat, index) => (
              <div
                key={index}
                className="px-5 h-full text-start border-r-2 border-[#003B64]"
              >
              <dt className="text-4xl sm:text-5xl font-josefin-semibold text-[#003B64]">
                  {stat.value}
                </dt>
                <dd className="mt-4 text-base font-brandon-medium text-gray-600 max-w-[200px]">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </main>
    </section>
  );
};

export default MainContant;
