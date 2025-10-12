"use client"
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { TeamCarousel } from "./team-carousel";
import { groq } from "next-sanity";
import Error from "next/error";
import { client } from "../../../sanity/lib/client";

export interface Team {
  _id: string;
  imageUrl: string;
  name: string;
  role?: string;
  education: string;
  description: string;
}

const TeamsSections = () => {
  const [teamMember, setTeamMember] = useState<Team[]>([])
  const [error, setError] = useState<any | null>(null)
  const [loading, setLoading] = useState(true)

  const teamQuery = groq`*[_type == "team"] {
    _id,
    name,
    "imageUrl": image.asset->url,
    role,
    education,
    description
  }`;
  useEffect(() => {
    const fetchTeams = async () => {
      try {
        setLoading(true)
        setError(null)
        setTeamMember([])
        const response = await client.fetch(teamQuery, undefined, {
              cache: 'force-cache',
              next: { 
                revalidate: 3600, // Cache for 1 hour
                tags: ['team']    // Tag for manual revalidation
              },
            });

            const data = await response
        setTeamMember(data)
        setLoading(false)
  
      } catch (err) {
        setError(err)
        console.log(err)
      }
    } 
    fetchTeams()
  }, [])

  return (
    <section>
      <main>
        <div className="px-5 pt-32 pb-10 w-full flex-center flex-col gap-10">
          <div className="w-full flex flex-col md:flex-row items-start justify-between gap-3 container mx-auto">
            {/* --- ANIMATION ADDED --- */}
            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-3xl md:text-4xl lg:text-5xl text-left font-josefin-semibold"
            >
              Meet the Crew
            </motion.h1>
            {/* --- ANIMATION ADDED --- */}
            <motion.p
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-lg max-w-[600px] text-gray-900 font-brandon-medium"
            >
              Our crew is more than clinicians — we’re movement advocates,
              problem solvers, and your recovery allies. Together, we blend
              evidence, experience and empathy to restore strength, mobility and
              confidence.
            </motion.p>
          </div>

          {/* --- ANIMATION ADDED --- */}
          <h1 className="text-lg ">{}</h1>
          <TeamCarousel teamMembers={teamMember} />
        </div>
      </main>
    </section>
  );
};

export default TeamsSections;