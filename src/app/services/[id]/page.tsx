import Image from "next/image";
import React from "react";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import CoveredSection from "@/components/home/covered";
import Footer from "@/components/core/footer";

const ServiceDetailsPage = () => {
  const PlaceholderImage = "/images/building.jpeg";
  return (
    <section>
      <main className="container mx-auto">
        <div className="px-5 pt-28 w-full flex-center flex-col lg:flex-row gap-16">
          <div className="flex-[1] w-full flex flex-col items-start justify-center">
            <h1 className="text-3xl md:text-4xl lg:text-7xl alan-semibold max-w-[600px]">
              Physiotherapy
            </h1>
            <p className="text-sm mont-medium max-w-[550px] mt-5">
              We offer multiple physiotherapy services, all of which are
              delivered with a high-standard of treatment using evidence-based
              and current techniques.
            </p>
            <p className="text-sm mont-medium max-w-[550px] mt-4">
              Our physiotherapists have extensive knowledge in biomechanics and
              experience in treating a wide range of conditions. We provide a
              professional and caring manner required to resolve your problem
              and ensure it doesn’t reappear.
            </p>
            <p className="text-sm mont-medium max-w-[550px] mt-4">
              Our approach will always be all about you.
            </p>
            <Link
              href={"#"}
              className="flex alan-semibold text-lg flex-wrap mt-5 gap-4 text-white HeroBackground py-4 px-6 rounded-2xl"
            >
              Book Now <ArrowRight />
            </Link>
          </div>
          <div className="flex-[1] w-full flex-center">
            <Image
              src={PlaceholderImage}
              alt=""
              width={1920}
              height={1080}
              className="w-full h-auto rounded-xl"
            />
          </div>
        </div>
        <CoveredSection />
        <Footer />
      </main>
    </section>
  );
};

export default ServiceDetailsPage;
