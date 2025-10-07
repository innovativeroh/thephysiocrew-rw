"use client"; // Required for Framer Motion animations

import {
  ClipboardList,
  CalendarCheck,
  ShieldCheck,
  Users,
} from "lucide-react";
import React from "react";
import lines from "../../../public/Images/lines.png";
import Image from "next/image";
import { motion } from "framer-motion"; // Import motion

const features = [
  {
    icon: ClipboardList,
    title:
      "Personalised treatment plans for sports injuries, back & neck pain, sciatica, and more.",
    highlighted: false,
  },
  {
    icon: CalendarCheck,
    title: "No referral needed – just book and come in!",
    highlighted: true,
  },
  {
    icon: ShieldCheck,
    title: "Option for No Gap physiotherapy with Medicare (EPC) referrals.",
    highlighted: true,
  },
  {
    icon: Users,
    title: "Trusted by thousands across Tullamarine, Carlton & Melbourne.",
    highlighted: false,
  },
];

const WhyChooseUs = () => {
  // Variants for the container to orchestrate staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Each child will animate 0.2s after the previous one
      },
    },
  };

  // Variants for each feature card
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section className="w-full relative py-20">
      <Image
        src={lines}
        alt=""
        width={1920}
        height={1080}
        className="absolute top-0 left-0 w-full opacity-10 z-[-1]"
      />
      <main className="container mx-auto">
        <div className="px-5 pt-12 md:pt-20 w-full flex-center flex-col gap-16">
          <div className="flex-[1] w-full flex-center text-center">
            {/* Animate the heading to fade in and slide down */}
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl lg:text-5xl alan-semibold"
            >
              Why choose us?
            </motion.h1>
          </div>

          {/* Motion container for the grid */}
          <motion.div
            className="flex-[1] w-full grid grid-cols-1 gap-5 md:grid-cols-4 md:place-items-start place-items-center place-content-center max-w-[1380px] mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }} // Start animation when 20% of the grid is visible
          >
            {features.map((feature, index) => (
              // Each card is now a motion component
              <motion.div
                key={index}
                variants={cardVariants}
                // Added a hover effect for better interactivity
                whileHover={{ scale: 1.03, y: -5 }}
                className={`flex w-full max-w-xs flex-col items-start justify-start rounded-xl p-6 shadow-md transition-colors duration-300 ease-in-out sm:p-8
                  ${
                    feature.highlighted
                      ? "HeroBackground text-white md:translate-y-20"
                      : "bg-white text-gray-900"
                  }`}
                style={{ minHeight: "180px" }}
              >
                <div
                  className={`mb-4 flex h-12 w-12 items-center justify-center rounded-full
                    ${
                      feature.highlighted
                        ? "bg-white text-[#0F62BB]"
                        : "bg-gray-100 text-gray-700"
                    }`}
                >
                  <feature.icon className="h-6 w-6" strokeWidth={1.5} />
                </div>
                <h3
                  className={`mb-2 text-base alan-bold
                    ${feature.highlighted ? "text-white" : "text-gray-900"}`}
                >
                  {feature.title}
                </h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </main>
    </section>
  );
};

export default WhyChooseUs;