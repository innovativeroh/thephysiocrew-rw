"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion"; // Import Variants type
import arrowRightUp from "../../../public/icons/arrow-right-up-line.svg";

export interface Service {
  _id: string;
  slug: string;
  title: string;
  description: string;
  imageUrl: string;
  alt: string;
  color: string;
}

interface ServicesClientProps {
  services: Service[];
}

// Define animation variants with the explicit "Variants" type
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const textVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut", // TypeScript now understands this is a valid Easing type
    },
  },
};

const cardGridVariants: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut", // TypeScript now understands this is a valid Easing type
    },
  },
};

const ServicesClient: React.FC<ServicesClientProps> = ({ services }) => {
  return (
    <section id="services">
      <main className="container mx-auto">
        <motion.div
          className="px-5 pt-32 md:pt-48 w-full flex-center flex-col gap-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="w-full flex flex-col md:flex-row items-start justify-between gap-4">
            <motion.h1
              className="text-3xl md:text-3xl lg:text-4xl text-black font-josefin-semibold max-w-[700px]"
              variants={textVariants}
            >
              Sport and Spinal Rehab Expert care. Personalised Treatment. Proven
              Results.
            </motion.h1>
            <motion.p
              className="text-xl max-w-[500px] text-gray-900 font-brandon-medium"
              variants={textVariants}
            >
              We provide a wide range of health services. Covering all of your
              healthcare needs.
            </motion.p>
          </div>

          <motion.div
            className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 place-items-center place-content-center"
            variants={cardGridVariants}
          >
            {services.map((service) => (
              <motion.div key={service._id} variants={cardVariants}>
                <Link href={`/services/${service.slug}`}>
                  <div className="group relative h-[500px] w-full rounded-3xl bg-neutral-200 overflow-hidden">
                    <img
                      src={service.imageUrl}
                      alt={service.alt}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:opacity-0 transition-opacity duration-500 ease-in-out" />
                    <div
                      className="absolute inset-0 mix-blend-multiply opacity-60 group-hover:opacity-0 transition-opacity duration-500 ease-in-out"
                      style={{ backgroundColor: service.color }}
                    />
                    <div className="relative z-10 h-full w-full p-7 flex flex-col justify-between">
                      <h1 className="text-2xl text-white font-josefin-semibold">
                        {service.title}
                      </h1>
                      <div className="relative h-[120px] overflow-hidden">
                        <p className="absolute top-0 text-lg font-brandon-medium text-white transition-all duration-500 ease-in-out opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">
                          {service.description}
                        </p>
                        <div className="absolute bottom-0 bg-white rounded-full p-3 shadow-lg max-w-fit transition-all duration-500 ease-in-out opacity-100 translate-y-0 group-hover:opacity-0 group-hover:translate-y-8">
                          <Image
                            src={arrowRightUp}
                            alt="Go to service details"
                            width={30}
                            height={30}
                            className="h-7 w-auto"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </main>
    </section>
  );
};

export default ServicesClient;
