"use client";

import React, { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import { useParams } from "next/navigation";
import { groq } from "next-sanity";
import { client } from "../../../../sanity/lib/client";
import Link from "next/link";
import Footer from "@/components/core/footer";
import CoveredSection from "@/components/home/covered";

// Define animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
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

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const hoverVariants: Variants = {
  hover: {
    y: -2,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
};

interface Service {
  title: string;
  slug: { current: string };
  subDescription?: string;
  description: string;
  heroImage?: string;
  keyPoints?: Array<{
    title: string;
    description: string;
  }>;
  color: string;
}

export default function ServicePage() {
  const params = useParams();
  const slug = params?.slug as string;
  const [service, setService] = useState<Service | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const showCoveredSection = slug === "musculoskeletal-physiotherapy";

  useEffect(() => {
    if (!slug) {
      setError("No slug provided");
      setLoading(false);
      return;
    }

    const query = groq`*[_type == "service" && slug.current == $slug][0]{
      title,
      slug,
      subDescription,
      description,
      "heroImage": heroImage.asset->.url,
      keyPoints,
      color
    }`;

    client
      .fetch(query, { slug })
      .then((data: Service | null) => {
        if (!data) {
          setError("Service not found");
        } else {
          setService(data);
        }
        setLoading(false);
      })
      .catch((err: any) => {
        setError("Failed to load service data");
        console.error(err);
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return (
      <section className="min-h-screen flex items-center justify-center px-4">
        <div className="text-blue-600 text-lg">Loading...</div>
      </section>
    );
  }

  if (error || !service) {
    return (
      <section className="min-h-screen flex items-center justify-center px-4">
        <div className="text-red-600 text-lg">
          {error || "Service not found"}
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="min-h-screen">
        {/* 1. Hero Section */}
        <motion.div
          className="relative overflow-hidden"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <div
            className="relative h-screen sm:h-[70vh] md:h-[80vh] lg:h-screen max-h-[70vh] w-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${service.heroImage})`,
            }}
          >
            <div className="absolute inset-0 bg-black/40" />
            <div className="relative z-10 flex h-full flex-col justify-end px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 py-8 sm:py-12 md:py-16 lg:py-20">
              <motion.div
                className="w-full text-center sm:text-left max-w-4xl mx-auto sm:mx-0"
                variants={textVariants}
              >
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-josefin-semibold text-white mb-4 sm:mb-6 leading-tight">
                  {service.title}
                </h1>
                {service.subDescription && (
                  <p className="text-base sm:text-xl md:text-2xl lg:text-3xl font-brandon text-blue-100 mb-6 sm:mb-8 max-w-2xl leading-relaxed">
                    {service.subDescription}
                  </p>
                )}
                <Link
                  href={
                    "https://the-physio-crew-tullamarine-pty-ltd.au3.cliniko.com/bookings"
                  }
                  target="_blank"
                  className="inline-flex justify-center sm:justify-start"
                >
                  <motion.button
                    className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-white text-blue-600 font-josefin-semibold rounded-full shadow-xl hover:shadow-blue-500/20 transition-shadow duration-300 text-sm sm:text-base"
                    variants={hoverVariants}
                    whileHover="hover"
                    whileTap={{ scale: 0.98 }}
                  >
                    Book Your Assessment
                    <svg
                      className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* 2. Main Content Section */}
        <motion.div
          className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 py-8 sm:py-12 md:py-16 lg:py-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-12 lg:gap-16 items-start">
            {/* Left Column: Description */}
            <motion.div
              className="lg:col-span-2 space-y-6 sm:space-y-8"
              variants={textVariants}
            >
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-josefin-semibold text-blue-900 mb-4 sm:mb-6 leading-tight">
                  About the Service
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-gray-700 font-brandon leading-relaxed max-w-3xl">
                  {service.description}
                </p>
              </div>
              {showCoveredSection && (
                <motion.div
                  variants={textVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <CoveredSection />
                </motion.div>
              )}
            </motion.div>

            {/* Right Column: Key Points */}
            <motion.div
              className="space-y-4 sm:space-y-6"
              variants={textVariants}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-josefin-semibold text-blue-900 mb-6 sm:mb-8 leading-tight">
                Key Benefits
              </h2>
              <div className="space-y-3 sm:space-y-4">
                {(service.keyPoints || []).map((point, index) => (
                  <motion.div
                    key={index}
                    className="group relative rounded-2xl p-4 sm:p-6 border border-blue-100 shadow-sm hover:shadow-md transition-all duration-300 HeroBackground"
                    variants={cardVariants}
                    whileHover="hover"
                  >
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-white text-black font-josefin-semibold shrink-0 text-xs sm:text-sm">
                        {index + 1}
                      </div>
                      <div className="flex-1 pt-1">
                        <h3 className="text-lg sm:text-xl font-josefin-semibold text-white mb-2 transition-colors duration-300 leading-tight">
                          {point.title}
                        </h3>
                        <p className="text-white font-brandon-medium leading-relaxed text-sm sm:text-base">
                          {point.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>
      <Footer />
    </>
  );
}
