"use client"; // Required for Framer Motion

import React from "react";
import { Marquee } from "../ui/marquee";
import { motion } from "framer-motion"; // Import motion

const ReelsSection = () => {
  const reels = [
    {
      url: "https://techsolaceconnects.s3.ap-south-1.amazonaws.com/the-physio-crew/WhatsApp+Video+2025-10-03+at+15.08.55+(1).mp4",
    },
    {
      url: "https://techsolaceconnects.s3.ap-south-1.amazonaws.com/the-physio-crew/WhatsApp+Video+2025-10-03+at+15.08.55.mp4",
    },
    {
      url: "https://techsolaceconnects.s3.ap-south-1.amazonaws.com/the-physio-crew/WhatsApp+Video+2025-10-03+at+15.08.56.mp4",
    },
    {
      url: "https://techsolaceconnects.s3.ap-south-1.amazonaws.com/the-physio-crew/WhatsApp+Video+2025-10-03+at+15.08.59+(1).mp4",
    },
    {
      url: "https://techsolaceconnects.s3.ap-south-1.amazonaws.com/the-physio-crew/WhatsApp+Video+2025-10-03+at+15.08.59.mp4",
    },
  ];

  // Variants for staggering the header text animations
  const headerContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const headerItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <section>
      <main>
        <div className="px-5 pt-32 w-full flex-center flex-col gap-16">
          {/* Animated Header Container */}
          <motion.div
            className="w-full flex-center flex-col gap-3 container mx-auto"
            variants={headerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <motion.h1
              variants={headerItemVariants}
              className="text-3xl md:text-4xl lg:text-5xl text-left font-josefin-semibold"
            >
              Our Reels
            </motion.h1>
            <motion.p
              variants={headerItemVariants}
              className="text-lg max-w-[600px] text-gray-900 font-brandon-medium text-center"
            >
              Meet The Physio Crew in action—behind-the-scenes moments, expert
              tips, and our passion for movement in quick, engaging videos.
            </motion.p>
          </motion.div>

          {/* Animated Marquee Container */}
          <motion.div
            className="w-full flex-center flex-col gap-3 relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" as const }}
          >
            <Marquee pauseOnHover className="[--duration:20s]">
              {reels.map((reel, index) => (
                // Added a container for each video for better styling and spacing
                <div key={index} className="w-[350px] h-auto mx-2.5 overflow-hidden rounded-2xl">
                  <video
                    src={reel.url}
                    width={1920}
                    height={1920}
                    autoPlay
                    loop
                    muted
                    playsInline // Important for autoplay on mobile
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </Marquee>
          </motion.div>
        </div>
      </main>
    </section>
  );
};

export default ReelsSection;