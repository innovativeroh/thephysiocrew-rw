"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import arrowRightUp from "../../../public/icons/arrow-right-up-line.svg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

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

// Only keep necessary variants for text and container
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
      ease: "easeOut",
    },
  },
};

const ServicesClient: React.FC<ServicesClientProps> = ({ services }) => {
  return (
    <section id="services">
      <main className="container mx-auto">
        <motion.div
          className="px-1 pt-10 md:pt-32 w-full flex-center flex-col gap-16"
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
          </div>

          {/* Carousel without per-card animation */}
          <div className="w-full flex-center gap-5 place-items-center place-content-center">
            <Carousel  opts={{ align: "start", loop: true }}>
              <CarouselContent>
                {services.map((service) => (
                  <CarouselItem key={service._id} className="w-full basis-1/3">
                    <Link href={`/services/${service.slug}`}>
                      <div className="group relative h-[650px] w-full rounded-lg bg-neutral-200 overflow-hidden">
                        <img
                          src={service.imageUrl}
                          alt={service.alt}
                          className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                        />
                        <div className="absolute inset-0 bg-black/10" />
                        <div className="relative z-10 h-full w-full flex flex-col items-center justify-end pb-5">
                          <div className="w-[95%] p-4 flex flex-col gap-3 bg-white/10 backdrop-blur-md rounded-lg">
                            <h1 className="text-2xl text-white font-josefin-semibold">
                              {service.title}
                            </h1>
                            <div className="relative h-[50px] overflow-hidden">
                              <p className="text-lg font-brandon-medium text-white">
                                {service.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </motion.div>
      </main>
    </section>
  );
};

export default ServicesClient;
