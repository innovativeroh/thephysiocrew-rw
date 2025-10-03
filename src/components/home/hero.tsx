"use client";
import React, { useEffect, useState } from "react";
import { AnimatedTooltip } from "../ui/animated-tooltip";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const images = [
    "/Images/1.jpg",
    "/Images/2.jpg",
    "/Images/3.jpg",
    "/Images/4.jpg",
  ];
  const people = [
    {
      id: 1,
      name: "John Doe",
      designation: "Software Engineer",
      image:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
    },
    {
      id: 2,
      name: "Robert Johnson",
      designation: "Product Manager",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 3,
      name: "Jane Smith",
      designation: "Data Scientist",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 4,
      name: "Emily Davis",
      designation: "UX Designer",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 5,
      name: "Tyler Durden",
      designation: "Soap Developer",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    },
    {
      id: 6,
      name: "Dora",
      designation: "The Explorer",
      image:
        "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000); // Change every 4s

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="h-[850px] relative w-full flex items-center justify-start overflow-hidden">
      <div className="w-full h-full absolute top-0 left-0 HeroBackground z-[-2]"></div>
      {/* Start of Hero Slider */}
      <div className="hidden lg:block absolute top-0 right-0 w-[750px] h-[850px] z-[-2]">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={img}
              alt={`Slide ${index}`}
              className="w-full h-full rounded-bl-[500px] object-cover"
            />
          </div>
        ))}
      </div>
      <div className="container mx-auto px-5">
        <div className="flex flex-row mb-8">
          <AnimatedTooltip items={people} />
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-6xl text-white alan-semibold max-w-[700px]">
          Empowering you to live
          <br /> <span className="text-[#ee9325] alan-bold">
            pain-free
          </span>{" "}
          with expert hands-on care.
        </h1>
        <p className="text-xl max-w-[500px] text-white mont-medium mt-3">
          We provide personalised treatment & recovery
          plans to achieve your health goals
        </p>
        <div className="inline-block mt-5">
          <Link
            href={"#"}
            className="flex alan-semibold text-lg flex-wrap mt-5 gap-4 text-blue-950 bg-white py-3 px-6 rounded-2xl"
          >
            Book Now <ArrowRight />
          </Link>
        </div>
      </div>
      {/* <Image src="/element.png" alt="shape" width={800} height={800} className="absolute top-[280px] right-[550px] rotate-25 w-[500px]" /> */}
      {/* End of Hero Slider */}
    </div>
  );
};

export default Hero;
