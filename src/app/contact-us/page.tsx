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
} from "lucide-react";

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 pt-24 md:pt-32 pb-24">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Let's Connect
          </h1>
          <h2 className="text-2xl font-medium text-blue-600 mb-6">
            Book Your Physiotherapy Session Today
          </h2>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto mb-8">
            Experience expert physiotherapy care at The Physio Crew. Our
            dedicated team is ready to help you achieve optimal health and
            wellness. Reach out to us via phone, email, or our online booking
            form.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="tel:+61123456789"
              className="inline-flex items-center px-6 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </a>
            <a
              href="#booking-form"
              className="inline-flex items-center px-6 py-3 rounded-full border-2 border-blue-600 text-blue-600 font-semibold hover:bg-blue-50 transition-colors"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Book Online
            </a>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-5 gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.2 }}
        >
          {/* Form Section */}
          <motion.div
            className="lg:col-span-3 bg-white p-8 sm:p-10 rounded-2xl shadow-xl border border-slate-100"
            id="booking-form"
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
            }}
          >
            <h3 className="text-3xl font-bold text-slate-900 mb-6">
              Book Your Appointment
            </h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-600 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. John"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-600 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Doe"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-colors"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-600 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Your contact number"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-600 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-colors"
                  />
                </div>
              </div>
              <div className="relative">
                <label className="block text-sm font-medium text-slate-600 mb-2">
                  Service Type *
                </label>
                <select
                  required
                  className="w-full appearance-none px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-colors"
                >
                  <option value="">Select a service</option>
                  <option value="general">General Physiotherapy</option>
                  <option value="sports">Sports Physiotherapy</option>
                  <option value="rehabilitation">Rehabilitation</option>
                  <option value="massage">Therapeutic Massage</option>
                </select>
                <ChevronDown className="absolute right-4 top-10 h-5 w-5 text-slate-400 pointer-events-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-600 mb-2">
                  Additional Notes
                </label>
                <textarea
                  placeholder="Tell us about your condition or any specific requirements..."
                  rows={4}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3.5 px-6 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 font-semibold text-lg transition-all transform hover:scale-[1.02] flex items-center justify-center"
              >
                <Calendar className="w-5 h-5 mr-3" />
                Book Appointment
              </button>
            </form>
          </motion.div>

          {/* Info Section */}
          <motion.div
            className="lg:col-span-2 flex flex-col gap-8"
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
            }}
          >
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Clinic Information
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-4 group">
                  <Phone className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">Phone</h4>
                    <a
                      href="tel:+61123456789"
                      className="text-blue-600 hover:text-blue-800 transition-colors text-lg"
                    >
                      (03) 1234 5678
                    </a>
                  </div>
                </li>
                <li className="flex items-start space-x-4 pt-4 border-t border-slate-100 group">
                  <Mail className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">Email</h4>
                    <a
                      href="mailto:info@thephysiocrew.com.au"
                      className="text-blue-600 hover:text-blue-800 transition-colors text-lg break-all"
                    >
                      info@thephysiocrew.com.au
                    </a>
                  </div>
                </li>
                <li className="flex items-start space-x-4 pt-4 border-t border-slate-100 group">
                  <Clock className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">
                      Opening Hours
                    </h4>
                    <div className="space-y-1 text-slate-600">
                      <p>Mon - Fri: 7:00 AM - 8:00 PM</p>
                      <p>Saturday: 8:00 AM - 4:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Our Location
              </h3>
              <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden mb-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.83543450937!2d144.9537353159042!3d-37.81720997975179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce7e0!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1664456742551!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-8 w-8 text-blue-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-800">
                      The Physio Crew
                    </h4>
                    <p className="text-slate-600">
                      123 Health Street, Melbourne VIC 3000
                    </p>
                  </div>
                </div>
                <a
                  href="https://goo.gl/maps/xxxxx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-5 py-2.5 bg-slate-100 text-slate-700 font-semibold rounded-lg hover:bg-slate-200 transition-colors flex-shrink-0"
                >
                  Get Directions
                  <ArrowRight className="h-4 w-4 ml-2" />
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;
