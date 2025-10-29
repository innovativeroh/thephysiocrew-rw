"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  Clock,
  MapPin,
  ArrowRight,
  Calendar,
  ChevronDown,
  User,
  AtSign,
  Briefcase,
  MessageSquare,
  Compass,
} from "lucide-react";
import Link from "next/link";
import Footer from "@/components/core/footer";

// Reusable component for form inputs with icons
const FormInput = ({ icon: Icon, ...props }: any) => (
  <div className="relative">
    <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
      <Icon className="h-5 w-5 text-slate-400" />
    </div>
    <input
      {...props}
      className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003B64]/50 focus:border-[#003B64] transition-colors placeholder:text-slate-500"
    />
  </div>
);

// Reusable component for clinic information items
const InfoItem = ({ icon: Icon, title, children }: any) => (
  <div className="flex items-start space-x-4 group">
    <div className="flex-shrink-0 mt-1">
      <Icon className="h-6 w-6 text-white group-hover:scale-110 transition-transform duration-300" />
    </div>
    <div>
      <h5 className="font-semibold text-white mb-1">{title}</h5>
      <div className="text-slate-600">{children}</div>
    </div>
  </div>
);

const ContactPage: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <>
      <div className="min-h-screen">
        {/* Hero Section */}
        <div className="relative pt-28 md:pt-40 pb-20 overflow-hidden">
          <div className="container mx-auto px-4 relative">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-6xl font-josefin-semibold text-slate-900 mb-4 tracking-tight">
                Get in Touch
              </h1>
              <h2 className="text-xl md:text-2xl font-brandon text-[#003B64] mb-6 font-brandon-medium">
                Your Path to Recovery Starts Here
              </h2>
              <p className="text-slate-600 text-lg max-w-3xl mx-auto mb-10 font-brandon-medium">
                We're here to help you on your journey to better health. Contact
                us to schedule an appointment or ask any questions you may have.
                Our team is ready to assist you.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="#locations"
                  className="font-brandon-medium flex items-center gap-2 whietspace-nowrap rounded-full bg-[#003B64] py-3 px-5 text-xl text-white transition hover:bg-[#3D6A89] sm:px-6 sm:text-sm"
                >
                  <MapPin className="w-5 h-5 mr-2" />
                  View Our Clinics
                </a>
                <Link
                  href="#booking-form"
                  className="inline-flex items-center justify-center px-8 py-3 font-josefin-semibold rounded-full border-2 border-slate-300 bg-white text-slate-700 hover:bg-slate-100 hover:border-slate-400 transition-all transform hover:-translate-y-1"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Appointment
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* --- LOCATIONS SECTION --- */}
        <div className="container mx-auto px-4 -mt-10" id="locations">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={itemVariants}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight font-brandon-medium">
              Our Clinic Locations
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto font-brandon-medium">
              Find the clinic nearest to you. Both our locations are staffed by
              expert physiotherapists ready to help.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
          >
            {/* Tullamarine Card */}
            <motion.div
              className="bg-white rounded-2xl shadow-2xl shadow-slate-200/50 border border-slate-100 overflow-hidden flex flex-col"
              variants={itemVariants}
            >
              <div className="w-full h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3156.681134069505!2d144.87238471583945!3d-37.70278787977114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad6500bd6596163%3A0x86735515332f1737!2s1%2F191%20Melrose%20Dr%2C%20Tullamarine%20VIC%203043%2C%20Australia!5e0!3m2!1sen!2sin!4v1668243632948!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Tullamarine Location Map"
                ></iframe>
              </div>
              <div className="p-8 flex-grow">
                <h3 className="text-2xl font-josefin-semibold text-slate-900 mb-4">
                  Tullamarine
                </h3>
                <div className="space-y-4 text-slate-600">
                  <p className="flex items-start font-brandon-medium">
                    <MapPin className="w-5 h-5 mr-3 mt-1 text-slate-400 flex-shrink-0" />
                    1/191 Melrose Drive, Tullamarine 3043
                  </p>
                  <p className="flex items-center font-brandon-medium">
                    <Mail className="w-5 h-5 mr-3 text-slate-400" />
                    <a
                      href="mailto:admin@thephysiocrew.com.au"
                      className="text-blue-600 hover:underline break-all"
                    >
                      admin@thephysiocrew.com.au
                    </a>
                  </p>
                </div>
              </div>
              <div className="p-8 pt-0 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href="tel:+61391168691"
                  target="_blank"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#003B64] text-white font-josefin-semibold hover:bg-[#3D6A89] transition-colors transform hover:scale-[1.03]"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Tullamarine
                </a>
                <Link
                  href="https://www.google.com/maps?ll=-37.701648,144.881209&z=15&t=m&hl=en&gl=IN&mapclient=embed&q=Unit+1/191+Melrose+Dr+Tullamarine+VIC+3043+Australia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-slate-100 text-slate-800 font-josefin-semibold hover:bg-slate-200 transition-colors"
                >
                  Get Directions <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </motion.div>

            {/* Carlton Card */}
            <motion.div
              className="bg-white rounded-2xl shadow-2xl shadow-slate-200/50 border border-slate-100 overflow-hidden flex flex-col"
              variants={itemVariants}
            >
              <div className="w-full h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.096951206103!2d144.9680323158416!3d-37.80918117975308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642d6a5c18227%3A0x2aeb049e782e423!2s2%2F221%20Drummond%20St%2C%20Carlton%20VIC%203053%2C%20Australia!5e0!3m2!1sen!2sin!4v1668243734444!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Carlton Location Map"
                ></iframe>
              </div>
              <div className="p-8 flex-grow">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Carlton
                </h3>
                <div className="space-y-4 text-slate-600">
                  <p className="flex items-start font-brandon-medium">
                    <MapPin className="w-5 h-5 mr-3 mt-1 text-slate-400 flex-shrink-0" />
                    2/221 Drummond Street, Carlton 3053
                  </p>
                  <p className="flex items-center font-brandon-medium">
                    <Mail className="w-5 h-5 mr-3 text-slate-400" />
                    <a
                      href="mailto:carlton@thephysiocrew.com.au"
                      className="text-blue-600 hover:underline break-all"
                    >
                      carlton@thephysiocrew.com.au
                    </a>
                  </p>
                </div>
              </div>
              <div className="p-8 pt-0 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href="tel:+61391168693"
                  target="_blank"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-josefin-semibold bg-[#003B64] text-white font-semibold hover:bg-[#3D6A89] transition-colors transform hover:scale-[1.03]"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Carlton
                </a>
                <Link
                  href="https://www.google.com/maps/place/2%2F221+Drummond+St,+Carlton+VIC+3053,+Australia/@-37.801156,144.968024,15z/data=!4m6!3m5!1s0x6ad642d140a55555:0x83aa7bc56d863b4!8m2!3d-37.8011558!4d144.9680243!16s%2Fg%2F11w1kt6jb9?hl=en&entry=ttu&g_ep=EgoyMDI1MTAwNy4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-josefin-semibold bg-slate-100 text-slate-800 font-semibold hover:bg-slate-200 transition-colors"
                >
                  Get Directions <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-24 md:py-32">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-5 gap-10 md:gap-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
          >
            {/* Form Section */}
            <motion.div
              className="lg:col-span-3 bg-white p-8 sm:p-10 rounded-2xl shadow-2xl shadow-slate-200/50 border border-slate-100"
              id="booking-form"
              variants={itemVariants}
            >
              <h3 className="text-3xl text-slate-900 mb-2 font-josefin-semibold">
                Book Your Appointment
              </h3>
              <p className="text-slate-500 mb-8 font-brandon-medium">
                Fill out the form below and we'll get back to you shortly.
              </p>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormInput
                    icon={User}
                    type="text"
                    required
                    placeholder="First Name"
                  />
                  <FormInput
                    icon={User}
                    type="text"
                    required
                    placeholder="Last Name"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormInput
                    icon={Phone}
                    type="tel"
                    required
                    placeholder="Phone Number"
                  />
                  <FormInput
                    icon={AtSign}
                    type="email"
                    required
                    placeholder="Email Address"
                  />
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                    <Briefcase className="h-5 w-5 text-slate-400" />
                  </div>
                  <select
                    required
                    className="w-full appearance-none pl-12 pr-10 py-3 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-colors text-slate-600"
                  >
                    <option value="">Select a service</option>
                    <option value="general">General Physiotherapy</option>
                    <option value="sports">Sports Physiotherapy</option>
                    <option value="rehabilitation">Rehabilitation</option>
                    <option value="massage">Therapeutic Massage</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 pointer-events-none" />
                </div>
                <div>
                  <div className="relative">
                    <div className="absolute top-3.5 left-0 flex items-center pl-4 pointer-events-none">
                      <MessageSquare className="h-5 w-5 text-slate-400" />
                    </div>
                    <textarea
                      placeholder="Tell us about your condition..."
                      rows={4}
                      className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-colors resize-none placeholder:text-slate-500"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#003B64] text-white py-4 px-6 rounded-lg font-josefin-semibold hover:bg-[#3D6A89] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 font-semibold text-lg transition-all transform hover:scale-[1.02] flex items-center justify-center shadow-lg hover:shadow-blue-300/50"
                >
                  <Calendar className="w-5 h-5 mr-3" />
                  Book Appointment
                </button>
              </form>
            </motion.div>

            {/* Info Section */}
            <motion.div
              className="lg:col-span-2 flex flex-col"
              variants={itemVariants}
            >
              {/* Opening Hours */}
              <div className="bg-[#003B64] p-8 rounded-2xl shadow-2xl h-full max-h-fit font-josefin-semibold">
                <InfoItem icon={Clock} title="Opening Hours">
                  <div className="space-y-1 text-white mt-2">
                    <p className="font-brandon-medium">
                      Mon - Fri: 7:00 AM - 8:00 PM
                    </p>
                    <p className="font-brandon-medium">
                      Saturday: 8:00 AM - 4:00 PM
                    </p>
                    <p className="font-brandon-medium">Sunday: Closed</p>
                  </div>
                </InfoItem>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
