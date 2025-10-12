"use client";

import Image from "next/image";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Import motion and AnimatePresence

const ValdSection = () => {
  const mediaItems = [
    {
      type: "video",
      src: "https://techsolaceconnects.s3.ap-south-1.amazonaws.com/the-physio-crew/WhatsApp+Video+2025-10-05+at+22.11.27.mp4",
      thumbnail: "/Images/vald-video-thumbnail.png",
    },
    {
      type: "image",
      src: "/Images/vald.jpeg",
      thumbnail: "/Images/vald.jpeg",
    },
    {
      type: "image",
      src: "/Images/vald-2.png",
      thumbnail: "/Images/vald-2.png",
    },
    {
      type: "image",
      src: "/Images/vald-3.png",
      thumbnail: "/Images/vald-3.png",
    },
  ];

  const [activeMedia, setActiveMedia] = useState(mediaItems[0]);

  // Stagger animation variants for the thumbnail list
  const thumbnailContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const thumbnailItemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  return (
    <section className="bg-black px-5 py-20 mt-20 rounded-3xl overflow-hidden">
      <main className="container mx-auto">
        <div className=" w-full flex flex-col gap-16">
          {/* Animated Header */}
          <motion.div
            className="w-full flex-center flex-col gap-3"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: "easeOut" as const }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-josefin-semibold max-w-[600px] text-center text-white">
              Smarter Recovery with{" "}
              <span className="text-orange-500">VALD Technology</span>
            </h1>
            <p className="text-lg max-w-[700px] text-gray-300 font-brandon-medium text-center">
              At The Physio Crew, we go beyond traditional physiotherapy by using
              VALD performance technology—a world-leading system trusted by
              elite sports teams and medical professionals.
            </p>
          </motion.div>

          <div className="w-full flex-between flex-col lg:flex-row gap-10 max-w-[1250px] mx-auto">
            {/* Animated Media Display */}
            <motion.div
              className="w-full flex-center"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: "easeOut" as const }}
            >
              {/* AnimatePresence handles the exit/enter animations when media changes */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeMedia.src} // Crucial for AnimatePresence to detect changes
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="w-full"
                >
                  {activeMedia.type === "video" ? (
                    <video
                      src={activeMedia.src}
                      width={1920}
                      height={1080}
                      className="w-full h-auto rounded-xl"
                      autoPlay
                      muted
                      loop
                      controls
                    />
                  ) : (
                    <Image
                      src={activeMedia.src}
                      alt="VALD Technology in use"
                      width={1920}
                      height={1080}
                      className="w-full h-auto object-cover rounded-xl"
                      priority
                    />
                  )}
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* Animated & Staggered Thumbnail List */}
            <motion.div
              className="w-full max-w-[230px] flex lg:flex-col gap-5"
              variants={thumbnailContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {mediaItems.map((item, index) => (
                <motion.div
                  key={index}
                  variants={thumbnailItemVariants}
                  onClick={() => setActiveMedia(item)}
                  className={`relative w-full rounded-lg overflow-hidden cursor-pointer border-2 transition-all duration-300 ${
                    activeMedia.src === item.src
                      ? "border-orange-500"
                      : "border-transparent hover:border-gray-500"
                  }`}
                >
                  <Image
                    src={item.thumbnail}
                    alt={`VALD technology view ${index + 1}`}
                    width={1920}
                    height={1080}
                    className="w-full h-full object-cover"
                  />
                  {item.type === "video" && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 transition-opacity duration-300 group-hover:bg-opacity-20">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-10 w-10 text-white opacity-90"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default ValdSection;