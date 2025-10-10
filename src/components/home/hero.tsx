"use client";
import React, { useEffect, useState } from "react";
import { AnimatedTooltip } from "../ui/animated-tooltip";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
// Import motion from framer-motion for the text animations
import { motion } from "framer-motion";

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

  // Animation variants for the container to orchestrate animations of children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Stagger the animation of children
      },
    },
  };

  // Animation variants for child elements to fade in from below
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <div className="h-[850px] relative w-full flex items-center justify-start overflow-hidden">
      <div className="w-full h-full absolute top-0 left-0 HeroBackground z-[-2]"></div>

      {/* MODIFICATION: Simple Image Switch */}
      <div className="hidden lg:block absolute top-0 right-0 w-[750px] h-[850px] z-[-2]">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className="absolute inset-0 w-full h-full rounded-bl-[500px] object-cover transition-opacity duration-1000 ease-in-out"
            style={{
              opacity: index === currentIndex ? 1 : 0,
            }}
          />
        ))}
      </div>

      {/* Main content container with staggered animations */}
      <motion.div
        className="container mx-auto px-5"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="flex flex-row mb-8" variants={itemVariants}>
          <AnimatedTooltip items={people} />
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-3xl md:text-4xl lg:text-6xl text-white alan-semibold max-w-[900px]"
        >
          Melbourne’s trusted experts in{" "}
          <span className="text-orange-400">sports injuries,</span>{" "}
          <span className="text-orange-400">musculoskeletal</span> care,
          and <span className="text-orange-400">post-operative</span> rehab.
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl max-w-[650px] text-white mont-medium mt-3"
        >
          Our expert team of physiotherapists provide hands-on care and creates
          personalised treatment plans that help achieve your health goals.
        </motion.p>

        <motion.div variants={itemVariants} className="inline-block mt-5">
          <motion.div
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href={
                "https://the-physio-crew-tullamarine-pty-ltd.au3.cliniko.com/bookings"
              }
              target="_blank"
              className="flex alan-semibold text-lg flex-wrap mt-5 gap-4 text-blue-950 bg-white py-3 px-6 rounded-2xl"
            >
              Book Now <ArrowRight />
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
