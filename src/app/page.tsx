import React from 'react'
import Hero from '@/components/home/hero'
import TestimonialsSection from '@/components/home/Testimonials'
import ServicesSection from '@/components/home/services'
import BrandsSection from '@/components/home/brands'
import CtaSection from '@/components/home/cta'
import Footer from '@/components/core/footer'
import WhyChooseUs from '@/components/home/whyChooseUs'
import AboutUsSection from '@/components/home/about'
import ReelsSection from '@/components/home/reels'
import MoreThanSection from '@/components/home/MoreThan'
import ValdSection from '@/components/home/ValdSection'

const page = () => {
  //pushed
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <ServicesSection />
      <MoreThanSection />
      <ValdSection />
      {/* <AboutUsSectionPushed /> */}
      {/* <TestimonialsSection /> */}
      <ReelsSection />
      <BrandsSection />
      <CtaSection />
      <Footer />
    </>
  )
}

export default page
