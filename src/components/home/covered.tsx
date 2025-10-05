"use client"; // Required for Framer Motion

import {
  Activity,
  User,
  Zap,
  Shield,
  Heart,
  Brain,
  Baby,
  Wind,
} from "lucide-react";
import React from "react";
import { motion } from "framer-motion"; // Import motion

const CoveredSection = () => {
  const cards = [
    {
      icon: Activity,
      title: "Back & Neck Pain",
      description:
        "Targeted therapies to alleviate chronic and acute pain, restoring mobility and comfort.",
      bg: "from-red-50 to-red-100",
      iconColor: "text-red-500",
    },
    {
      icon: User,
      title: "Sports/Work Injuries",
      description:
        "Specialized rehab for strains, sprains, and overuse injuries to get you back in action.",
      bg: "from-blue-50 to-blue-100",
      iconColor: "text-blue-500",
    },
    {
      icon: Zap,
      title: "Sciatica",
      description:
        "Relief from nerve pain through decompression techniques and strengthening exercises.",
      bg: "from-amber-50 to-amber-100",
      iconColor: "text-amber-500",
    },
    {
      icon: Shield,
      title: "Whiplash",
      description:
        "Gentle mobilization and soft tissue work to reduce stiffness and headaches post-accident.",
      bg: "from-green-50 to-green-100",
      iconColor: "text-green-500",
    },
    {
      icon: Heart,
      title: "Post-Op Rehab",
      description:
        "Guided recovery programs to rebuild strength and prevent complications after surgery.",
      bg: "from-pink-50 to-pink-100",
      iconColor: "text-pink-500",
    },
    {
      icon: Brain,
      title: "Osteoarthritis",
      description:
        "Joint protection strategies and pain management to maintain daily function.",
      bg: "from-violet-50 to-violet-100",
      iconColor: "text-violet-500",
    },
    {
      icon: Baby,
      title: "Tendon Issues",
      description:
        "Eccentric loading and manual therapy for tendinopathies like Achilles or rotator cuff.",
      bg: "from-cyan-50 to-cyan-100",
      iconColor: "text-cyan-500",
    },
    {
      icon: Wind,
      title: "Neurological Conditions",
      description:
        "Neuroplasticity-focused exercises for stroke, MS, and Parkinson's to improve coordination.",
      bg: "from-indigo-50 to-indigo-100",
      iconColor: "text-indigo-500",
    },
  ];

  // A reusable variant for containers that stagger their children's animations
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Time delay between each child animating in
      },
    },
  };

  // A reusable variant for child items that fade in and slide up
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
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
    <section className="pt-20">
      <main className="container mx-auto">
        <div className="px-5 pt-10 w-full flex flex-col items-center gap-16">
          {/* Animated Header */}
          <motion.div
            className="w-full flex flex-col items-center gap-5 max-w-4xl"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <motion.h1
              variants={itemVariants}
              className="text-3xl md:text-4xl lg:text-5xl alan-semibold text-gray-900 text-center leading-tight"
            >
              What We Treat
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg text-gray-600 mont-medium text-center leading-relaxed"
            >
              We treat back & neck pain, sports/work injuries, sciatica,
              whiplash, post-op rehab, osteoarthritis, tendon issues,
              neurological conditions, pre/post-natal pain, balance/vertigo, and
              more. Personalised care to help you move better.
            </motion.p>
          </motion.div>

          {/* Animated Grid of Cards */}
          <motion.div
            className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }} // Start animation when 10% of the grid is visible
          >
            {cards.map((treatment, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group p-6 w-full h-full flex flex-col items-start justify-center border border-gray-200 rounded-xl hover:shadow-lg hover:border-gray-300 transition-all duration-300 bg-white"
              >
                <div
                  className={`p-3 bg-gradient-to-br ${treatment.bg} rounded-lg group-hover:scale-105 transition-transform duration-300`}
                >
                  <treatment.icon
                    size={24}
                    className={treatment.iconColor}
                  />
                </div>
                <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mt-5 mb-3 leading-tight">
                  {treatment.title}
                </h2>
                <p className="text-base text-gray-600 font-medium leading-relaxed flex-1">
                  {treatment.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </main>
    </section>
  );
};

export default CoveredSection;