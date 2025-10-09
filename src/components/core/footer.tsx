"use client"; // Required for animations

import Image from "next/image";
import type { FC } from "react";
import { FaFacebookF, FaInstagram, FaPhone, FaEnvelope } from "react-icons/fa";
import Logo from "../../../public/logo.png";
import { motion } from "framer-motion"; // Import motion
import Link from "next/link";

const footerNav = [
  { name: "About Us", href: "/about-us" },
  { name: "Our Services", href: "/#services" },
  { name: "News & Research", href: "/blogs" },
  { name: "Contact Us", href: "/contact-us" },
];

const locations = [
  { address: "1/191 Melrose Drive, Tullamarine 3043" },
  { address: "2/221 Drummond Street, Carlton 3053" },
];

const Footer: FC = () => {
  // Variants for the main grid container to stagger its children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Each column will animate 0.2s after the previous one
      },
    },
  };

  // Variants for each column in the grid
  const columnVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <footer className="text-gray-700">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }} // Animate when 20% of the footer is visible
        >
          {/* Logo and Mission Statement */}
          <motion.div className="lg:col-span-1" variants={columnVariants}>
            <Image
              src={Logo}
              alt="The Physio Crew Logo"
              width={160}
              height={80}
              className="h-20 w-auto mb-4"
            />
            <p className="text-sm alan-regular text-gray-600 leading-relaxed">
              A clinic & online space committed to treat every individual with
              honesty, respect, kindness & provide exceptional physiotherapy
              service to our community.
            </p>
          </motion.div>

          {/* Navigation Links */}
          <motion.div className="lg:col-span-1" variants={columnVariants}>
            <h3 className="alan-medium text-gray-900 text-base mb-4">
              Quick Links
            </h3>
            <nav className="space-y-3">
              {footerNav.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-sm alan-regular hover:text-gray-900 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </motion.div>

          {/* Find Us At - Locations */}
          <motion.div className="lg:col-span-1" variants={columnVariants}>
            <h3 className="alan-medium text-gray-900 text-base mb-4">
              Find Us At
            </h3>
            <div className="space-y-3">
              {locations.map((location, index) => (
                <div key={index} className="text-sm alan-regular text-gray-600">
                  <p>{location.address}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contact & Social */}
          <motion.div className="lg:col-span-1" variants={columnVariants}>
            <h3 className="alan-medium text-gray-900 text-base mb-4">
              Connect With Us
            </h3>
            <div className="space-y-4">
              {/* Tullamarine Contact */}
              <div>
                <h4 className="text-sm alan-medium text-gray-800 mb-2">
                  Tullamarine
                </h4>
                <div className="space-y-2">
                  <a
                    href="tel:0391168691"
                    className="flex items-center space-x-3 text-sm alan-regular text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <FaPhone className="w-4 h-4 text-gray-500" />
                    <span>03 9116 8691</span>
                  </a>
                  <a
                    href="mailto:admin@thephysiocrew.com.au"
                    className="flex items-center space-x-3 text-sm alan-regular text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <FaEnvelope className="w-4 h-4 text-gray-500" />
                    <span>admin@thephysiocrew.com.au</span>
                  </a>
                </div>
              </div>

              {/* Carlton Contact */}
              <div>
                <h4 className="text-sm alan-medium text-gray-800 mb-2">
                  Carlton
                </h4>
                <div className="space-y-2">
                  <a
                    href="tel:0391168693"
                    className="flex items-center space-x-3 text-sm alan-regular text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <FaPhone className="w-4 h-4 text-gray-500" />
                    <span>03 9116 8693</span>
                  </a>
                  <a
                    href="mailto:carlton@thephysiocrew.com.au"
                    className="flex items-center space-x-3 text-sm alan-regular text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <FaEnvelope className="w-4 h-4 text-gray-500" />
                    <span>carlton@thephysiocrew.com.au</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="mt-6">
              <h4 className="alan-medium text-gray-900 text-sm mb-3">
                Follow Us
              </h4>
              <div className="flex space-x-4">
                <Link
                  href="https://www.facebook.com/thephysiocrewofficial"
                  aria-label="Facebook"
                  className="hover:text-gray-900 transition-colors"
                >
                  <FaFacebookF className="w-5 h-5" />
                </Link>
                <Link
                  href="https://www.instagram.com/thephysiocrewofficial/"
                  aria-label="Instagram"
                  className="hover:text-gray-900 transition-colors"
                >
                  <FaInstagram className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Section - Fades in after the grid */}
        <motion.div
          className="mt-8 pt-6 border-t border-gray-200"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.5 }} // Delay ensures it animates after the columns
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm alan-regular text-gray-500 text-center md:text-left">
              <p>
                © {new Date().getFullYear()} The Physio Crew. All rights
                reserved.
              </p>
              <p className="mt-1">
                Committed to excellence in physiotherapy care.
              </p>
            </div>

            <div className="mt-4 md:mt-0 text-sm alan-regular text-gray-500">
              <Link
                href="/privacy-policy"
                className="hover:text-gray-900 transition-colors mr-4"
              >
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="hover:text-gray-900 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
