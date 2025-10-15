"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Marquee } from "../ui/marquee";
import { TeamMember } from "./team";
import Link from "next/link";

export const TeamCarousel = ({
  teamMembers,
}: {
  teamMembers: TeamMember[];
}) => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="w-full flex-center flex-col gap-10 relative"
      >
        <Marquee pauseOnHover className="[--duration:20s]">
          {teamMembers.map((team) => (
            <div
              key={team._id}
              onClick={() => setSelectedMember(team)}
              className="cursor-pointer relative w-full max-w-[350px] rounded-3xl overflow-hidden group mx-2"
            >
              <Image
                src={team.image}
                alt={team.name}
                width={800}
                height={800}
                className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/80 to-transparent">
                <div className="text-white">
                  <h1 className="text-2xl font-josefin-semibold">
                    {team.name} {team.role && `- ${team.role}`}
                  </h1>
                  <p className="text-sm font-brandon-medium">
                    {team.education}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </motion.div>

      <AnimatePresence>
        {selectedMember && (
          <Modal
            member={selectedMember}
            onClose={() => setSelectedMember(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

const Modal = ({
  member,
  onClose,
}: {
  member: TeamMember;
  onClose: () => void;
}) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEsc);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "auto";
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="member-name"
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
    >
      <motion.div
        className="absolute inset-0 bg-neutral-900/70"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />

      <motion.div
        className="relative bg-white md:bg-white rounded-2xl shadow-lg md:shadow-2xl border border-slate-200 p-6 md:p-8 w-full max-w-[1000px] max-h-[90vh] overflow-y-auto mx-auto flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10"
        initial={{ opacity: 0, scale: 0.94, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 10 }}
        transition={{ duration: 0.32, ease: "easeInOut" }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-4 right-4 text-slate-500 hover:text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-full p-2 transition-all shadow-md hover:scale-110"
        >
          <X size={22} />
        </button>

        {/* Profile Image */}
        <div className="flex-shrink-0 shadow-xl border-2 border-slate-300 rounded-xl overflow-hidden w-[140px] h-[140px] md:w-[220px] md:h-[220px] flex items-center justify-center animate-fadeIn">
          <Image
            src={member.image}
            alt={member.name}
            width={220}
            height={220}
            className="object-cover object-top w-full h-full"
          />
        </div>

        {/* Details */}
        <div className="text-center md:text-left flex flex-col justify-between h-full gap-2">
          {member.role && (
            <p className="uppercase text-xs font-medium text-sky-700 mb-1 tracking-widest">
              {member.role}
            </p>
          )}
          <h2
            id="member-name"
            className="font-josefin-semibold text-2xl md:text-3xl text-slate-900 tracking-tight mb-2"
          >
            {member.name}
          </h2>
          {/* Location badge example */}
          {member.bookingLinks && member.bookingLinks.length > 0 && (
            <div className="flex gap-2 justify-center md:justify-start mb-2">
              {member.bookingLinks.map((link) => (
                <span
                  key={link.location}
                  className={`bg-sky-100 text-sky-800 px-3 py-1 rounded-full text-xs font-semibold`}
                >
                  {link.location === "tullamarine" ? "Tullamarine" : "Carlton"}
                </span>
              ))}
            </div>
          )}
          <p className="text-sm text-slate-500 mt-2 mb-3 font-brandon-medium">
            {member.education}
          </p>
          <p className="text-base text-slate-700 font-brandon whitespace-pre-line">
            {member.description}
          </p>
          {/* Booking Buttons Section */}
          {member.bookingLinks && member.bookingLinks.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-3 justify-center md:justify-start">
              {member.bookingLinks.map((link) => (
                <Link
                  key={link.location}
                  href={link.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-blue-500 text-white rounded-full text-sm font-medium flex items-center gap-2 shadow-md hover:scale-105 active:scale-100 transition-transform duration-150"
                >
                  {/* Example: add Lucide MapPin icon for location */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M12 21s-7-7.5-7-11a7 7 0 0 1 14 0c0 3.5-7 11-7 11z" />
                  </svg>
                  Book{" "}
                  {link.location === "tullamarine" ? "Tullamarine" : "Carlton"}
                </Link>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};
