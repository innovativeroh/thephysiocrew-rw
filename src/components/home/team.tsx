"use client";

import Image, { StaticImageData } from "next/image";
import React, { useState, useEffect, Fragment } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

import director1 from "../../../public/Images/director-1.png";
import director2 from "../../../public/Images/director-2.png";
import TeamMember1 from "../../../public/Images/team-1.png";
import TeamMember2 from "../../../public/Images/team-2.png";
import TeamMember3 from "../../../public/Images/team-3.png";
import TeamMember4 from "../../../public/Images/team-4.png";
import TeamMember5 from "../../../public/Images/team-5.png";
import { Marquee } from "../ui/marquee";

export interface Team {
  imageUrl: StaticImageData;
  name: string;
  role?: string;
  education: string;
  description: string;
}

export const TeamList: Team[] = [
  {
    imageUrl: director1,
    name: "Amardeep Sran",
    role: "Director & Principal",
    education: "Physiotherapist | B.Physio (La Trobe) | APAM",
    description:
      "Amardeep is the Director and Principal Physiotherapist at The Physio Crew, with over a decade of experience in musculoskeletal physiotherapy. He is passionate about helping people recover from injury, move confidently, and return to the activities they love. Amar manages a wide range of conditions including workplace injuries, chronic pain, and sports-related concerns. He leads with a clear focus on long-term outcomes and evidence-based rehabilitation. Based in our Carlton clinic, Amar is committed to providing exceptional physio services and making The Physio Crew the go-to destination for physiotherapy in Melbourne CBD, North Melbourne, Fitzroy, and beyond.",
  },
  {
    imageUrl: director2,
    name: "Michael Tricarico",
    role: "Director & Principal",
    education:
      "Physiotherapist | B.App.Sc (Physio), Grad.Dip.Manip (La Trobe) | APAM",
    description:
      "Michael is an experienced senior musculoskeletal physiotherapist with a special interest in the cervical spine, headaches, and lower limb rehabilitation. He takes an evidence-based approach to treatment, focusing on identifying root causes and building practical strength and mobility. Michael has extensive experience managing hip, knee and ankle conditions, including tendon injuries and running-related pain. He provides structured rehab programs for people of all ages, from active professionals to older adults. Michael is known for his calm and thorough clinical approach, helping clients take control of their movement and reduce long-standing pain through education, strength and function-led therapy.",
  },
  {
    imageUrl: TeamMember1,
    name: "LAUREN LE'TOILLE",
    education: "Physiotherapist | B.Sc, DPT (UniMelb) | APAM",
    description:
      "Lauren is a physiotherapist with a particular interest in sports physio, post-op rehab, and knee injuries. She has worked with teams across football, soccer, powerlifting and basketball, and is currently head physio for Keilor Park Soccer Club’s senior women’s and men’s squads. Lauren has also been mentored by leading orthopaedic surgeons in hip and knee rehab and is known for her precise, goal-driven care. She helps clients return to sport, strength and daily activity by combining hands-on treatment with movement re-education. Lauren takes pride in building trust, clarity and momentum for every person she works with.",
  },
  {
    imageUrl: TeamMember2,
    name: "John Orban",
    education: "Physiotherapist | B.App.Sc, M.Physio (La Trobe) | APAM",
    description:
      "John's interests lie in musculoskeletal and sports physio with a focus on neck and back pain, sports injury rehab, and vestibular conditions. He has worked with athletes across cricket, football and AFL, including as a physio for Port Melbourne Football Club during their VFLW Premiership campaign in 2023. John delivers practical, movement-based care to address both workplace and sport-related injuries. He is particularly skilled in treating spinal dysfunction and dizziness, with a structured approach to rehab. John is currently completing postgraduate studies in Sports Physiotherapy and enjoys helping patients return to full activity with clarity and confidence.",
  },
  {
    imageUrl: TeamMember3,
    name: "MARCUS JUST",
    education: "Physiotherapist | B.App.Sc, M.Physio (La Trobe) | APAM",
    description:
      "Marcus is a passionate physiotherapist with a focus on post-operative rehab and return-to-sport planning. He has a strong interest in musculoskeletal injuries and helps clients recover from surgery, joint pain, or sports-related conditions. Marcus brings personal experience from years of cricket and strength training, allowing him to understand athletic performance and practical rehab needs. He creates tailored plans for clients ranging from active adults to those new to structured movement, and prioritises clear communication and long-term outcomes. Marcus delivers thoughtful, hands-on care that promotes recovery, mobility, and strength.",
  },
  {
    imageUrl: TeamMember4,
    name: "Melissa Steward",
    education:
      "Physiotherapist | B.Hlth.Sc (La Trobe), M.Physio (Swinburne) | APAM",
    description:
      "Melissa is a dedicated physiotherapist with a strong interest in women’s health, sports injuries, and lifestyle-based rehabilitation. She works with clients through pregnancy-related pain, post-natal recovery, tendon conditions, and osteoporosis. Melissa has also treated athletes across rugby, netball, and basketball, and supports active individuals as they return to strength and sport. Her approach balances movement education with strength programming to help clients achieve practical, long-term outcomes. Melissa enjoys supporting women and older adults alike, empowering them through proactive strategies, collaborative care, and a focus on health and confidence across every stage of life.",
  },
  {
    imageUrl: TeamMember5,
    name: "Jackson Conforti",
    education: "Physiotherapist | B.App.Sc, M.Physio (La Trobe) | APAM",
    description:
      "Jackson has a strong interest in sports physiotherapist and musculoskeletal injuries especially knee rehab, and return-to-play programming. He has worked as a physiotherapist with the Essendon Football Club’s VFL team, and supports patients recovering from AFL, football, and running injuries. Jackson is particularly skilled in managing hamstring, calf, and quad injuries, with a structured rehab approach focused on strength, progression, and movement quality. He enjoys helping both athletes and active individuals build resilience and prevent re-injury. Jackson is also committed to fostering health in the community and supporting people of all activity levels.",
  },
];

const TeamsSections = () => {
  const [selectedMember, setSelectedMember] = useState<Team | null>(null);

  return (
    <section>
      <main>
        <div className="px-5 pt-32 pb-10 w-full flex-center flex-col gap-16">
          <div className="w-full flex flex-col md:flex-row items-start justify-between gap-3 container mx-auto">
            {/* --- ANIMATION ADDED --- */}
            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-3xl md:text-4xl lg:text-5xl text-left alan-semibold"
            >
              Meet the Crew
            </motion.h1>
            {/* --- ANIMATION ADDED --- */}
            <motion.p
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-sm max-w-[500px] text-gray-900 mont-medium"
            >
              Our crew is more than clinicians — we’re movement advocates,
              problem solvers, and your recovery allies. Together, we blend
              evidence, experience and empathy to restore strength, mobility and
              confidence.
            </motion.p>
          </div>

          {/* --- ANIMATION ADDED --- */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="w-full flex-center flex-col gap-10 relative"
          >
            <Marquee pauseOnHover className="[--duration:20s]">
              {TeamList.map((team, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedMember(team)}
                  className="cursor-pointer relative w-full max-w-[350px] rounded-3xl overflow-hidden group mx-4" // Added margin for spacing
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
            <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
            <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
          </motion.div>
        </div>

        {/* Professional Modal - Your animation code is perfect, no changes needed */}
        <AnimatePresence>
          {selectedMember && (
            <Modal
              member={selectedMember}
              onClose={() => setSelectedMember(null)}
            />
          )}
        </AnimatePresence>
      </main>
    </section>
  );
};

// --- The New Professional Modal Component ---
// Your implementation here is excellent. No changes were necessary.
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
        className="relative bg-white rounded-2xl shadow-2xl p-6 md:p-8 w-full max-w-[700px] max-h-[90vh] overflow-y-auto mx-auto flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8"
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
            className="rounded-full w-28 h-28 md:w-32 md:h-32 object-cover object-top border-4 border-slate-200"
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
          <p className="text-sm text-slate-500 mt-2 mont-medium">
            {member.education}
          </p>
          <hr className="my-4 md:my-5 border-t border-slate-200" />
          <p className="text-base text-slate-700 mont-medium">
            {member.description}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default TeamsSections;