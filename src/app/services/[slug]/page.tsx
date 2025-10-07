"use client";

import React, { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import { useParams } from "next/navigation";
import Image from "next/image";
import { groq } from "next-sanity";
import { client } from "../../../../sanity/lib/client";

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
      <section className="min-h-screen flex items-center justify-center bg-blue-50/50">
        <div className="text-blue-600">Loading...</div>
      </section>
    );
  }

  if (error || !service) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-blue-50/50">
        <div className="text-red-600">{error || "Service not found"}</div>
      </section>
    );
  }

  return (
    <section className="min-h-screen font-sans bg-blue-50/50">
      {/* 1. Hero Section */}
      <motion.div
        className="relative overflow-hidden"
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <div
          className="relative h-screen max-h-[70vh] w-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${service.heroImage})`,
          }}
        >
          <div className="absolute inset-0" />
          <div className="relative z-10 flex h-full flex-col justify-end px-6 py-12 md:px-12 md:py-16 lg:px-24 lg:py-20">
            <motion.div
              className="max-w-4xl text-center md:text-left"
              variants={textVariants}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                {service.title}
              </h1>
              {service.subDescription && (
                <p className="text-xl md:text-2xl font-light text-blue-100 mb-8 max-w-2xl leading-relaxed">
                  {service.subDescription}
                </p>
              )}
              <motion.button
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-full shadow-xl hover:shadow-blue-500/20 transition-shadow duration-300"
                variants={hoverVariants}
                whileHover="hover"
                whileTap={{ scale: 0.98 }}
              >
                Book Your Assessment
                <svg
                  className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
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
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* 2. Main Content Section */}
      <motion.div
        className="container mx-auto px-6 md:px-12 lg:px-24 py-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-start">
          {/* Left Column: Description */}
          <motion.div
            className="lg:col-span-2 space-y-8"
            variants={textVariants}
          >
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-6 leading-tight">
                About the Service
              </h2>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl">
                {service.description}
              </p>
            </div>
            <motion.button
              className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:shadow-blue-600/50 transition-all duration-300"
              variants={hoverVariants}
              whileHover="hover"
              whileTap={{ scale: 0.98 }}
            >
              Learn More
            </motion.button>
          </motion.div>

          {/* Right Column: Key Points */}
          <motion.div className="space-y-6" variants={textVariants}>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8 leading-tight">
              Key Benefits
            </h2>
            <div className="space-y-4">
              {(service.keyPoints || []).map((point, index) => (
                <motion.div
                  key={index}
                  className="group relative rounded-2xl bg-white p-6 border border-blue-100 shadow-sm hover:shadow-md transition-all duration-300"
                  variants={cardVariants}
                  whileHover="hover"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white font-bold shrink-0 text-sm">
                      {index + 1}
                    </div>
                    <div className="flex-1 pt-1">
                      <h3 className="text-xl font-semibold text-blue-900 mb-2 group-hover:text-blue-700 transition-colors duration-300">
                        {point.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-sm">
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
  );
}
