import React from "react";
import { CheckCircle } from "lucide-react";
import { Marquee } from "../ui/marquee";

const physioPoints: string[] = [
  "Our Physiotherapists are experts in sports related injuries and spinal physiotherapy such as low back & neck pain and sciatica.",
  "Option for No Gap fee physiotherapy for Medicare (EPC) referrals.",
  "A trusted and reputable physiotherapy clinic in Tullamarine and Carlton to achieve your health goals with the support of your physiotherapist.",
  "Strong affiliation with local Doctors, Orthopaedics, Sports Clinicians and Allied Health Practitioners in Carlton, Tullamarine, Melbourne and the surrounding areas.",
  "Our Physiotherapy service accept all Private Health Funds, TAC, WorkCover, NDIS and Medicare EPC care plans.",
  "1000's of satisfied customers in Tullamarine, Carlton and Melbourne from our physiotherapy service.",
  "FREE access to our state of the art gym in Tullamarine and Carlton, plus free access to an individual physiotherapy exercise app.",
  'Physiotherapy as it should be, hands on and "all about you".',
  "No referral needed to see our physiotherapist. We accept all private health funds.",
  "Students with overseas health coverage (BUPA / NIB) eligible for up to 70 % rebate on physiotherapy service.",
  "We use VALD - technology for accurate assessment to measure strength, power, balance, asymmetries, speed for athletic performance and post operative care.",
];

const FeatureCard = ({ point }: { point: string }) => (
  <div className="flex flex-col justify-center bg-slate-50 p-6 rounded-xl shadow-sm h-full max-w-sm">
    <div className="flex items-start gap-4">
      <CheckCircle className="w-7 h-7 text-blue-500 mt-1 flex-shrink-0" />
      <p className="text-gray-800">{point}</p>
    </div>
  </div>
);

const FeaturesSection = () => {
  return (
    <section>
      <main className="container mx-auto">
        <div className="px-5 py-32 w-full flex-center flex-col gap-16">
          <div className="w-full flex flex-col items-center justify-center gap-4 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl alan-semibold max-w-[700px]">
              Expert Care. Personalised Treatment. Proven Results.
            </h1>
            <p className="text-sm text-gray-700 max-w-2xl mont-medium">
              At The Physio Crew, we don't just treat symptoms; we target the
              root cause of your pain. Our experienced physiotherapists use
              evidence-based techniques and advanced VALD technology to create a
              tailored plan for your recovery.
            </p>
          </div>
          <div className="w-full flex-center relative">
            {/* Increased duration for smoother scrolling with more items */}
            <Marquee pauseOnHover className="[--duration:80s]">
              {physioPoints.map((point, index) => (
                <FeatureCard key={index} point={point} />
              ))}
            </Marquee>
            <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
            <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default FeaturesSection;
