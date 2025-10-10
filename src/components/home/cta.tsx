"use client"; // Required for animations

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion"; // Import motion

const CtaSection = () => {
  // A single variant for the main container that will both animate itself
  // and orchestrate the staggered animation of its children.
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut" as const,
        staggerChildren: 0.2, // This will make the children animate one by one
      },
    },
  };

  // Variants for the child elements (h1, p, Link)
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
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
    <section>
      <main>
        <div className="px-5 pt-32 pb-20 w-full flex-center">
          {/* Main animated container */}
          <motion.div
            className="px-5 py-5 min-h-[70vh] w-full flex-center flex-col HeroBackground rounded-2xl gap-3 text-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h1
              variants={itemVariants}
              className="text-3xl md:text-4xl lg:text-6xl text-white font-josefin-semibold max-w-[1000px]"
            >
              Ready to Take Your Recovery to the Next Level with Expert
              Physiotherapy
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-lg text-neutral-100 max-w-[700px] font-brandon-medium mt-3"
            >
              With years of hands-on experience in sports injuries,
              post-operative rehab, and musculoskeletal care, we empower you to
              move pain-free, regain strength, and get back to the activities
              you love — faster and safer.
            </motion.p>

            <motion.div variants={itemVariants}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  href={"https://the-physio-crew-tullamarine-pty-ltd.au3.cliniko.com/bookings"}
                target="_blank"
                  className="inline-flex items-center font-josefin-semibold text-lg mt-5 gap-4 text-blue-950 bg-white py-3 px-6 rounded-2xl"
                >
                  Book Now <ArrowRight />
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </main>
    </section>
  );
};

export default CtaSection;
