"use client";
import React, { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import { useParams } from "next/navigation";
import { groq } from "next-sanity";
import { client } from "../../../../sanity/lib/client";
import Link from "next/link";
import Footer from "@/components/core/footer";
import CoveredSection from "@/components/home/covered";
import Image from "next/image";

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

export interface Service {
  title: string;
  slug: { current: string };
  subDescription?: string;
  description: string;
  heroImage?: string;
  heroImageAlt?: string;
  serviceVideo?: string;

  keyPoints?: Array<{
    title: string;
    description: string;
    image?: string;
    imageAlt?: string;
    video?: string;
  }>;

  color: string;
}

const ServicePage = () => {
  const params = useParams();
  const slug = params?.slug as string;
  const [service, setService] = useState<Service | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const showCoveredSection = slug === "musculoskeletal-physiotherapy";

  // State for selected key point (default: first item)
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

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
      "heroImage": heroImage.asset->url,
      "heroImageAlt": heroImage.alt,
      "serviceVideo": serviceVideo.asset->url,
      keyPoints[]{
        title,
        description,
        "image": image.asset->url,
        "imageAlt": image.alt,
        "video": video.asset->url
      },
      color
    }`;

    client
      .fetch(query, { slug })
      .then((data: Service | null) => {
        if (!data) {
          setError("Service not found");
        } else {
          setService(data);
          setSelectedIndex(0); // Reset to first item
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

  const selectedPoint = service.keyPoints?.[selectedIndex];

  return (
    <section>
      {/* HERO SECTION */}
      <motion.div
        className="relative overflow-hidden"
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="relative h-screen sm:h-[70vh] md:h-[80vh] lg:h-screen max-h-[90vh] w-full">
          {service.serviceVideo ? (
            <video
              src={service.serviceVideo}
              width={1920}
              height={1080}
              autoPlay
              muted
              loop
              className="w-full h-full object-cover absolute top-0 left-0 z-[-1]"
            />
          ) : (
            service.heroImage && (
              <Image
                src={service.heroImage}
                alt={service.heroImageAlt || service.title}
                width={1920}
                height={1080}
                className="w-full h-full object-cover absolute top-0 left-0 z-[-1]"
              />
            )
          )}
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 flex h-full flex-col justify-end px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 py-8 sm:py-12 md:py-16 lg:py-20">
            <motion.div
              className="w-full text-center sm:text-left max-w-4xl mx-auto sm:mx-0"
              variants={textVariants}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-josefin-semibold text-white leading-tight">
                {service.title}
              </h1>
              {service.subDescription && (
                <p className="text-base sm:text-xl md:text-2xl font-brandon text-neutral-300 max-w-2xl leading-relaxed">
                  {service.subDescription}
                </p>
              )}
              <Link
                href="https://the-physio-crew-tullamarine-pty-ltd.au3.cliniko.com/bookings"
                target="_blank"
                className="inline-flex justify-center sm:justify-start"
              >
                <motion.button
                  className="flex text-lg flex-center mt-5 gap-2 text-blue-950 bg-white hover:bg-[#EE9423] hover:text-white duration-300 py-3 px-6 rounded-2xl font-josefin-semibold"
                  variants={hoverVariants}
                  whileHover="hover"
                  whileTap={{ scale: 0.98 }}
                >
                  Book Now
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

      {/* MAIN CONTENT */}
      <motion.div
        className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 py-8 sm:py-12 md:py-16 lg:py-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="w-full flex flex-col gap-6 sm:gap-8 md:gap-12 lg:gap-16 items-start justify-center">
          {/* ABOUT THE SERVICE */}
          <motion.div
            className="w-full space-y-6 sm:space-y-8"
            variants={textVariants}
          >
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-josefin-semibold text-[#003B64] mb-4 sm:mb-6 leading-tight">
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

          {/* KEY BENEFITS: TITLES + DESCRIPTION + MEDIA */}
          <motion.div className="w-full" variants={textVariants}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-josefin-semibold text-[#003B64] mb-8 sm:mb-12 leading-tight">
              Key Benefits
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16">
              {/* LEFT: List of titles + description under active */}
              <div className="space-y-8">
                {service.keyPoints?.map((point, i) => {
                  const isActive = selectedIndex === i;

                  return (
                    <motion.div
                      key={i}
                      className="space-y-3"
                      initial={{ opacity: 0.7 }}
                      animate={{ opacity: isActive ? 1 : 0.7 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Title + Separator */}
                      <button
                        onClick={() => setSelectedIndex(i)}
                        className="w-full text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#003B64] focus-visible:ring-offset-2 rounded-md"
                      >
                        <h3 className="text-xl sm:text-2xl font-brandon-medium text-[#003B64] leading-tight pb-2">
                          {point.title}
                        </h3>
                        <div className="h-px bg-gray-300 w-full" />
                      </button>

                      {/* Description (only for active) */}
                      {isActive && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="mt-3 text-base sm:text-lg text-gray-600 font-brandon leading-relaxed max-w-xl"
                        >
                          {point.description}
                        </motion.p>
                      )}
                    </motion.div>
                  );
                })}
              </div>

              {/* RIGHT: Selected Media */}
              <motion.div
                className="relative aspect-video lg:aspect-auto lg:h-full min-h-80 lg:min-h-96 rounded-xl overflow-hidden shadow-lg bg-gray-100"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                key={selectedIndex}
              >
                {selectedPoint ? (
                  <>
                    {selectedPoint.video ? (
                      <video
                        src={selectedPoint.video}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    ) : (
                      selectedPoint.image && (
                        <Image
                          src={selectedPoint.image}
                          alt={selectedPoint.imageAlt || selectedPoint.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                      )
                    )}
                  </>
                ) : (
                  <div className="flex items-center justify-center h-full text-gray-400">
                    <p>Select a feature</p>
                  </div>
                )}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
      <Footer />
    </section>
  );
};

export default ServicePage;