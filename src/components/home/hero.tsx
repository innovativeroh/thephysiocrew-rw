"use client";
import React, { useEffect, useState } from "react";
import { AnimatedTooltip } from "../ui/animated-tooltip";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  const images = [
    "/Images/1.jpg",
    "/Images/2.jpg",
    "/Images/3.jpg",
    "/Images/4.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000); // Change every 4s

    return () => clearInterval(interval);
  }, [images.length]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

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
      <div className="w-full h-full absolute top-0 left-0 bg-[#003B64] z-[-2]"></div>
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

      <motion.div
        className="container mx-auto px-5"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={itemVariants}
          className="text-3xl md:text-4xl lg:text-5xl text-white font-josefin-semibold max-w-[900px]"
        >
          Melbourne’s trusted physio team for sports injuries, pain relief, and
          recovery. Personalised care to help you move better and feel stronger.
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-2xl max-w-[700px] text-white mt-3 font-brandon-medium"
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
              className="flex text-lg flex-wrap mt-5 gap-4 text-blue-950 bg-white hover:bg-[#EE9423] hover:text-white duration-300 py-3 px-6 rounded-2xl font-josefin-semibold"
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
