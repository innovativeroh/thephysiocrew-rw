"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Marquee } from "../ui/marquee";
import { Team } from "./team";

export const TeamCarousel = ({ teamMembers, }: { teamMembers: Team[] }) => {
  const [selectedMember, setSelectedMember] = useState<Team | null>(null);

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
                src={team.imageUrl}
                alt={team.name}
                width={800}
                height={800}
                className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/80 to-transparent">
                <div className="text-white">
                  <h1 className="text-2xl alan-medium">
                    {team.name} {team.role && `- ${team.role}`}
                  </h1>
                  <p className="text-sm mont-regular">{team.education}</p>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </motion.div>

      <AnimatePresence>
        {selectedMember && (
          <Modal member={selectedMember} onClose={() => setSelectedMember(null)} />
        )}
      </AnimatePresence>
    </>
  );
};

const Modal = ({ member, onClose }: { member: Team; onClose: () => void }) => {
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
        className="absolute inset-0 bg-black/70"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      ></motion.div>

      <motion.div
    className="relative bg-white rounded-2xl shadow-2xl p-6 md:p-8 w-full max-w-[1000px] max-h-[90vh] overflow-y-auto mx-auto flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8"
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 10 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-4 right-4 text-slate-500 hover:text-slate-800 transition-colors rounded-full p-1.5 bg-slate-100 hover:bg-slate-200 z-10"
        >
          <X size={20} />
        </button>

        <div className="flex-shrink-0">
          <Image
            src={member.imageUrl}
            alt={member.name}
            width={128}
            height={128}
            className="rounded-xl w-full max-h-[450px] h-full object-cover object-top"
          />
        </div>

        <div className="text-center md:text-left">
          {member.role && (
            <p className="text-sm mont-semibold text-sky-600 mb-1">
              {member.role}
            </p>
          )}
          <h2
            id="member-name"
            className="text-2xl md:text-3xl alan-semibold text-slate-900"
          >
            {member.name}
          </h2>
          <p className="text-sm text-slate-500 mt-2 mb-3 mont-medium">
            {member.education}
          </p>
          <p className="text-base text-slate-700 mont-medium">
            {member.description}
          </p>
        </div>
      </motion.div>
    </div>
  );
};