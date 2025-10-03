"use client";

import Image, { StaticImageData } from "next/image";

import React from "react";

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

export const Team: Team[] = [
  {
    imageUrl: director1,

    name: "Amardeep Sran",

    role: "Director & Principal",

    education: "Physiotherapist | B.Physio (La Trobe) | APAM",

    description:
      "Amardeep has 10+ years in musculoskeletal physio, focusing on injury recovery, chronic pain, and sports rehab. Based in Carlton, serving Melbourne CBD.",
  },

  {
    imageUrl: director2,

    name: "Michael Tricarico",

    role: "Director & Principal",

    education:
      "Physiotherapist | B.App.Sc (Physio), Grad.Dip.Manip (La Trobe) | APAM",

    description:
      "Michael specializes in cervical spine, headaches, and lower limb rehab. Targets root causes, strength, and mobility for hip, knee, ankle, tendon, and running injuries. Offers structured programs for all ages with education.",
  },

  {
    imageUrl: TeamMember1,

    name: "LAUREN LE'TOILLE",

    education: "Physiotherapist | B.Sc, DPT (UniMelb) | APAM",

    description:
      "Lauren specializes in sports physio, post-op rehab, and knee injuries. She has worked with football, soccer, powerlifting, and basketball teams, including as head physio for Keilor Park Soccer Club’s senior squads. Mentored by orthopaedic surgeons in hip and knee rehab, she combines hands-on treatment with movement re-education to help clients return to sport and daily activity.",
  },

  {
    imageUrl: TeamMember2,

    name: "John Orban",

    education: "Physiotherapist | B.App.Sc, M.Physio (La Trobe) | APAM",

    description:
      "John focuses on musculoskeletal and sports physio, neck/back pain, sports injury rehab, and vestibular conditions. He has worked with cricket, football, and AFL athletes, including Port Melbourne Football Club’s VFLW Premiership in 2023. John provides movement-based care for workplace and sport injuries, skilled in spinal dysfunction and dizziness treatment. Currently studying postgraduate Sports Physiotherapy.",
  },

  {
    imageUrl: TeamMember3,

    name: "MARCUS JUST",

    education: "Physiotherapist | B.App.Sc, M.Physio (La Trobe) | APAM",

    description:
      "Marcus specializes in post-operative rehab and return-to-sport planning for musculoskeletal injuries. With experience in cricket and strength training, he creates tailored plans for active adults and beginners. He emphasizes clear communication, hands-on care, and long-term outcomes for recovery, mobility, and strength.",
  },

  {
    imageUrl: TeamMember4,

    name: "Melissa Steward",

    education:
      "Physiotherapist | B.Hlth.Sc (La Trobe), M.Physio (Swinburne) | APAM",

    description:
      "Melissa focuses on women’s health, sports injuries, and lifestyle rehab. She treats pregnancy-related pain, post-natal recovery, tendon conditions, and osteoporosis, plus athletes in rugby, netball, and basketball. Her approach uses movement education and strength programming for practical, long-term outcomes, empowering women and older adults.",
  },

  {
    imageUrl: TeamMember5,

    name: "Jackson Conforti",

    education: "Physiotherapist | B.App.Sc, M.Physio (La Trobe) | APAM",

    description:
      "Jackson specializes in sports physio, musculoskeletal injuries, knee rehab, and return-to-play programs. He has worked with Essendon Football Club’s VFL team and treats AFL, football, and running injuries, especially hamstring, calf, and quad. Jackson focuses on strength, progression, and resilience to prevent re-injury for athletes and active individuals.",
  },
];

const TeamsSections = () => {
  return (
    <section>
      <main>
        <div className="px-5 pt-32 w-full flex flex-col gap-16">
          <div className="w-full flex flex-col md:flex-row items-start justify-between gap-3 container mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-left alan-semibold">
              Meet the Crew
            </h1>

            <p className="text-sm max-w-[500px] text-gray-900 mont-medium">
              Our crew is more than clinicians — we’re movement advocates,
              problem solvers, and your recovery allies. Together, we blend
              evidence, experience and empathy to restore strength, mobility and
              confidence.
            </p>
          </div>

          <div className="w-full flex-center flex-col gap-10">
            {/* Team Section */}

            <div className="w-full flex-center gap-5">
              <Marquee pauseOnHover className="[--duration:20s]">
                {Team.map((team, index) => (
                  <div
                    key={index}
                    className="relative w-full max-w-[350px] rounded-3xl overflow-hidden group"
                  >
                    <Image
                      src={team.imageUrl}
                      alt={team.name}
                      width={800}
                      height={800}
                      className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                    />

                    {/* Overlay Content */}

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
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default TeamsSections;
