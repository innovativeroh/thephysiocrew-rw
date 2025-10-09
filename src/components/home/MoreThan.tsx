"use client"; // Required for Framer Motion

import React from "react";
import { ArrowRight, Dumbbell, Zap, HeartPulse } from "lucide-react";
import Image from "next/image";
import GYM from "../../../public/Images/gym-2.jpeg";
import { motion } from "framer-motion"; // Import motion
import Link from "next/link";

const ValdSection = () => {
  // Variants for the text content container to stagger the animation of its children
  const textContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Creates a cascade effect
      },
    },
  };

  // Variants for each individual text item (h1, p, ul, button)
  const textItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <div>
      <section className="container mx-auto px-4 pt-24 sm:px-6 lg:px-8">
        <main className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Right Column: Image with animation */}
          <motion.div
            className="relative h-full w-full"
            initial={{ opacity: 0, x: 100, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] }} // A smooth cubic-bezier ease
          >
            <Image
              src={GYM}
              alt="Modern gym with workout equipment"
              className="relative z-10 h-full w-full rounded-2xl object-cover shadow-2xl"
            />
          </motion.div>

          {/* Left Column: Text Content with staggered animations */}
          <motion.div
            className="flex flex-col items-start text-left"
            variants={textContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h1
              variants={textItemVariants}
              className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl alan-semibold"
            >
              Free Gym Access to <span className="text-blue-600">Empower</span>{" "}
              Your Recovery
            </motion.h1>

            <motion.p
              variants={textItemVariants}
              className="mt-6 max-w-2xl text-lg leading-8 text-slate-700 mont-medium"
            >
              True healing happens beyond the treatment room. That's why we
              offer complimentary access to our state-of-the-art rehabilitation
              gyms, providing the perfect space to put your personalized rehab
              plan into action.
            </motion.p>

            {/* Feature List */}
            <motion.ul
              variants={textItemVariants}
              className="mt-8 space-y-4 text-slate-600"
            >
              <li className="flex items-center gap-3">
                <Dumbbell className="h-6 w-6 flex-shrink-0 text-blue-500" />
                <span className="alan-medium">
                  Rebuild strength after an injury.
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Zap className="h-6 w-6 flex-shrink-0 text-blue-500" />
                <span className="alan-medium">
                  Fine-tune your athletic performance.
                </span>
              </li>
              <li className="flex items-center gap-3">
                <HeartPulse className="h-6 w-6 flex-shrink-0 text-blue-500" />
                <span className="alan-medium">
                  Stay active, healthy, and pain-free.
                </span>
              </li>
            </motion.ul>

            <motion.div variants={textItemVariants} className="mt-10">
              <Link
                href="https://the-physio-crew-tullamarine-pty-ltd.au3.cliniko.com/bookings"
                target="_blank"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-lg font-bold text-white shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
              >
                Book Your Session
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </motion.div>
        </main>
      </section>
    </div>
  );
};

export default ValdSection;
