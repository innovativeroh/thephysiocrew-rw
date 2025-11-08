"use client";
import React from "react";
import TeamsSections from "@/components/home/team";
import Footer from "@/components/core/footer";
import AdministrationSection from "@/components/home/administration";
import AboutUsSection from "@/components/home/about";
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
