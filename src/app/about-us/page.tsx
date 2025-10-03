"use client";

import Image from "next/image";
import React from "react";
import Team from "../../../public/Images/team.jpg"; // Remember to replace this with an actual team photo
import { StarIcon } from "lucide-react";
import { motion } from "framer-motion";

const AboutUsSection = () => {
  // Stats relevant to The Physio Crew
  const statsData = [
    {
      value: "95%",
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

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section>
      <main className="max-w-[1440px] mx-auto overflow-hidden">
        <motion.div
          className="px-5 pt-28 w-full flex-center flex-col gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
          }}
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
            <Image
              src={Team}
              alt="The Physio Crew Team"
              width={1920}
              height={1080}
              className="w-full h-full object-cover object-center"
            />
          </motion.div>
        </motion.div>

        <motion.div
          className="bg-white py-16 sm:py-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
          }}
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
                    <span className="font-semibold">4.9/5</span> Patient Rating
                  </p>
                </div>
              </div>
            </motion.div>
            <div className="mt-16 sm:mt-20">
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
            </div>
          </div>
        </motion.div>
      </main>
    </section>
  );
};

export default AboutUsSection;