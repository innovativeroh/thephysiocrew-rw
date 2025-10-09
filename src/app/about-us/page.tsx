"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import Team from "../../../public/Images/team.jpg";
import {
  StarIcon,
  Target,
  Handshake,
  ShieldCheck,
  HeartHandshake,
  Award,
} from "lucide-react";
import { motion } from "framer-motion";
import CoveredSection from "@/components/home/covered";
import TeamsSections from "@/components/home/team";
import Footer from "@/components/core/footer";
import AdministrationSection from "@/components/home/administration";
import { client } from "../../../sanity/lib/client";

const AboutUsSection = () => {
  const [isImage, setIsImage] = useState<any>();

  useEffect(() => {
    const fetchTeamImage = async () => {
      setIsImage(null);
      const query = `*[_type == "team-Image"][0] {
      _id,
      "imageUrl": image.asset->url,
    }`;
      const data = await client.fetch(query);
      setIsImage(await data.imageUrl);
    };
    fetchTeamImage();
  }, []);

  // Stats relevant to The Physio Crew
  const statsData = [
    {
      value: "100%",
      label: "Patient satisfaction rate, reflecting our dedication to care.",
    },
    {
      value: "8+",
      label: "Years of trusted service to our community since 2017.",
    },
    {
      value: "2",
      label: "Welcoming clinics in Tullamarine and Carlton.",
    },
    {
      value: "1000+",
      label: "Lives improved on their journey to better health.",
    },
  ];

  // Data for Core Values
  const coreValues = [
    {
      name: "Respect",
      icon: Handshake,
      description: "Treating every individual with dignity and consideration.",
    },
    {
      name: "Integrity",
      icon: ShieldCheck,
      description:
        "Upholding the highest standards of professionalism and ethics.",
    },
    {
      name: "Compassion",
      icon: HeartHandshake,
      description: "Providing empathetic care that supports your well-being.",
    },
    {
      name: "Excellence",
      icon: Award,
      description:
        "Striving for the best outcomes through continuous learning.",
    },
  ];

  // Reusable variant for items that fade in and slide up
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  // Reusable variant for containers that stagger their children's animations
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  // Variant for individual list items
  const itemVariant = {
    hidden: { opacity: 0, y: 20 },
    // FIX APPLIED HERE: Added 'as const' to the ease property
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  return (
    <section>
      <main className="max-w-[1440px] mx-auto overflow-hidden">
        {/* Top Section: Header & Team Image */}
        <motion.div
          className="px-5 pt-28 w-full flex-center flex-col gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <motion.div
            className="w-full flex flex-col lg:flex-row gap-5 items-center lg:items-end justify-between"
            variants={fadeIn}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl alan-semibold max-w-[700px] text-center lg:text-left">
              Discover Our Journey and What Drives Us
            </h1>
            <p className="text-sm lg:text-lg max-w-[600px] text-gray-700 text-center lg:text-left mont-medium">
              Founded in 2017, The Physio Crew is the heart of a lifelong dream
              to serve our community with genuine care, expert knowledge, and a
              deep commitment to patient wellbeing.
            </p>
          </motion.div>
          <motion.div
            className="w-full flex-center h-auto lg:h-[600px] rounded-2xl overflow-hidden"
            variants={fadeIn}
          >
            <img
              src={isImage}
              alt="The Physio Crew Team"
              width={1920}
              height={1080}
              className="w-full h-full object-cover object-top"
            />
          </motion.div>
        </motion.div>

        {/* Bottom Section: Mission & Stats */}
        <motion.div
          className="bg-white pt-16 sm:pt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <div className="mx-auto max-w-[1440px] px-6 lg:px-8">
            <motion.div
              className="flex flex-col items-start gap-x-8 gap-y-10 lg:flex-row"
              variants={fadeIn}
            >
              <div className="lg:w-0 lg:flex-1">
                <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl max-w-[800px]">
                  Empowering you to achieve your health goals with confidence.
                </h2>
                <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600">
                  Our success is measured by the lives we help improve. Every
                  patient who walks through our doors is treated with respect,
                  empathy, and a personalised approach to their health and
                  wellbeing. Our passion is people, and our greatest reward is
                  seeing you achieve the health and quality of life you deserve.
                </p>
              </div>
              <div className="flex-shrink-0">
                <div className="flex items-center gap-x-3 rounded-full bg-gray-50 px-3 py-1.5">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, index) => (
                      <StarIcon
                        key={index}
                        className="h-5 w-5 text-yellow-400"
                        fill="currentColor"
                      />
                    ))}
                  </div>
                  <p className="text-sm leading-6 text-gray-900">
                    <span className="font-semibold">5/5</span> Patient Rating
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Purpose and Core Values Section */}
            <motion.div
              className="mt-16 sm:mt-24 py-16 sm:py-20 rounded-2xl"
              variants={fadeIn}
            >
              <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                  {/* Our Purpose Card */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className=" text-blue-600 p-3 rounded-full flex-shrink-0">
                        <Target className="w-8 h-8" strokeWidth={2} />
                      </div>
                      <h3 className="text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
                        Our Purpose
                      </h3>
                    </div>
                    <p className="text-lg leading-8 text-gray-700">
                      To display best practice by providing a bespoke care plan
                      addressing patient goals through continued commitment to
                      professional development.
                    </p>
                  </div>

                  {/* Our Core Values Grid */}
                  <div className="space-y-6">
                    <h3 className="text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
                      Our Core Values
                    </h3>
                    <motion.ul
                      className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                      variants={staggerContainer}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.3 }}
                    >
                      {coreValues.map((value) => (
                        <motion.li
                          key={value.name}
                          variants={itemVariant}
                          className="p-6 rounded-xl shadow-sm transition-all hover:shadow-md hover:-translate-y-1"
                        >
                          <div className="flex items-center gap-4">
                            <div className="bg-blue-100 text-blue-600 p-2.5 rounded-full flex-shrink-0">
                              <value.icon className="w-6 h-6" strokeWidth={2} />
                            </div>
                            <h4 className="text-xl font-semibold text-gray-900">
                              {value.name}
                            </h4>
                          </div>
                          <p className="mt-3 text-base text-gray-600">
                            {value.description}
                          </p>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Stats section */}
            <motion.div className="mt-16 sm:mt-20" variants={fadeIn}>
              <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
                {statsData.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <dt className="text-5xl font-bold leading-10 tracking-tight text-gray-900">
                      {stat.value}
                    </dt>
                    <dd className="mt-4 text-base leading-7 text-gray-500">
                      {stat.label}
                    </dd>
                  </motion.div>
                ))}
              </dl>
            </motion.div>
          </div>
        </motion.div>
      </main>
      <TeamsSections />
      <AdministrationSection />
      <Footer />
    </section>
  );
};

export default AboutUsSection;
