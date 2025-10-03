import React from 'react'
import Hero from '@/components/home/hero'
import TeamsSections from '../components/home/team'
import TestimonialsSection from '@/components/home/Testimonials'
import ServicesSection from '@/components/home/services'
import BrandsSection from '@/components/home/brands'
import CtaSection from '@/components/home/cta'
import Footer from '@/components/core/footer'
import WhyChooseUs from '@/components/home/whyChooseUs'
import AboutUsSection from '@/components/home/about'
import ReelsSection from '@/components/home/reels'

const page = () => {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <ServicesSection />
      <TeamsSections />
      <AboutUsSection />
      <TestimonialsSection />
      <BrandsSection />
      <ReelsSection />
      <CtaSection />
      <Footer />
    </>
  )
}

export default page