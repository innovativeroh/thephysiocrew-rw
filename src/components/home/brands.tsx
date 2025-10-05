"use client"; 

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion"; 

const BrandsSection = () => {
  const logo = [
    {
      img: "/asset/1logo.png",
    },
    {
      img: "/asset/2logo.jpg",
    },
    {
      img: "/asset/3logo.png",
    },
    {
      img: "/asset/4logo.jpeg",
    },
    {
      img: "/asset/5logo.jpg",
    },
    {
      img: "/asset/6logo.png",
    },
    {
      img: "/asset/7logo.png",
    },
  ];

  // Variants for the header text container to stagger animations
  const headerContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Small delay between h1 and p
      },
    },
  };

  const headerItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  // Variants for the logos container to stagger their entry
  const logosContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Stagger each logo
      },
    },
  };

  // Variants for each individual logo
  const logoItemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section>
      <main className="container mx-auto">
        <div className="px-5 pt-32 w-full flex-center flex-col gap-10">
          {/* Animated Header Section */}
          <motion.div
            className="w-full flex-center flex-col gap-3"
            variants={headerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <motion.h1
              variants={headerItemVariants}
              className="text-3xl md:text-4xl lg:text-5xl alan-semibold text-center"
            >
              Local Community Partners
            </motion.h1>
            <motion.p
              variants={headerItemVariants}
              className="text-sm max-w-[600px] text-gray-900 mont-medium text-center"
            >
              We are deeply committed to the health of the communities we serve.
              We build strong relationships with local sports teams.
            </motion.p>
          </motion.div>

          {/* Animated Logos Grid */}
          <motion.div
            className="w-full flex-center flex-wrap gap-8"
            variants={logosContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }} // Animate when 20% of the container is in view
          >
            {logo.map((logo, index) => (
              <motion.div
                key={index}
                variants={logoItemVariants}
                // Add a slight hover effect to each logo
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                className="flex-center"
              >
                <Image
                  src={logo.img}
                  alt={`Partner logo ${index + 1}`}
                  width={1920}
                  height={1080}
                  className="w-auto h-24 object-contain" // Use object-contain for logos
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </main>
    </section>
  );
};

export default BrandsSection;