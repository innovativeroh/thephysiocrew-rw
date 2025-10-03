import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const CtaSection = () => {
  return (
    <section>
      <main>
        <div className="px-5 pt-32 pb-20 w-full flex-center">
          <div className="px-5 py-5 min-h-[70vh] w-full flex-center flex-col HeroBackground rounded-2xl gap-3">
            <h1 className="text-3xl md:text-4xl lg:text-7xl text-white alan-semibold max-w-[1000px] text-center">
              Ready to Take Your Recovery to the Next Level with Expert
              Physiotherapy
            </h1>
            <p className="tex-sm md:text-lg text-center text-neutral-100 max-w-[700px] mont-medium mt-3">
              With years of hands-on experience in spo rts injuries,
              post-operative rehab, and musculoskeletal care, we empower you to
              move pain-free, regain strength, and get back to the activities
              you love — faster and safer.
            </p>
            <Link
              href={"#"}
              className="flex alan-semibold text-lg flex-wrap mt-5 gap-4 text-blue-950 bg-white py-3 px-6 rounded-2xl"
            >
              Book Now <ArrowRight />
            </Link>
          </div>
        </div>
      </main>
    </section>
  );
};

export default CtaSection;
