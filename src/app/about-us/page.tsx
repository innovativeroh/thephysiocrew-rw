"use client";
import React from "react";
import TeamsSections from "@/components/home/team";
import Footer from "@/components/core/footer";
import AdministrationSection from "@/components/home/administration";
import AboutUsSection from "@/components/home/about";
import { motion } from "framer-motion";
import {
  Award,
  Handshake,
  HeartHandshake,
  ShieldCheck,
  StarIcon,
  Target,
} from "lucide-react";
import MainContant from "@/components/home/MainContant";

const AboutUsPage = () => {
  return (
    <section>
        <MainContant /> 
        <AboutUsSection />
        <TeamsSections />
        <AdministrationSection />
        <Footer />
    </section>
  );
};

export default AboutUsPage;
