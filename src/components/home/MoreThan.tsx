import React from "react";
import { ArrowRight, Dumbbell, Zap, HeartPulse } from "lucide-react";
import Image from "next/image";
import GYM from "../../../public/Images/gym-2.jpeg";

const ValdSection = () => {
  return (
    <div>
      <section className="container mx-auto px-4 pt-24 sm:px-6 lg:px-8">
        <main className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Right Column: Image with Decorative Element */}
          <div className="relative h-full w-full">
            <Image
              src={GYM}
              alt="Modern gym with workout equipment"
              className="relative z-10 h-full w-full rounded-2xl object-cover shadow-2xl"
            />
          </div>
          {/* Left Column: Text Content */}
          <div className="flex flex-col items-start text-left">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl alan-semibold">
              Free Gym Access to <span className="text-blue-600">Empower</span>{" "}
              Your Recovery
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700 mont-medium">
              True healing happens beyond the treatment room. That's why we
              offer complimentary access to our state-of-the-art rehabilitation
              gyms, providing the perfect space to put your personalized rehab
              plan into action.
            </p>

            {/* Feature List */}
            <ul className="mt-8 space-y-4 text-slate-600">
              <li className="flex items-center gap-3">
                <Dumbbell className="h-6 w-6 flex-shrink-0 text-blue-500" />
                <span className="alan-medium">
                  Rebuild strength after an injury.
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Zap className="h-6 w-6 flex-shrink-0 text-blue-500" />
                <span className="alan-medium">
                  Fine-tune your athletic performance.
                </span>
              </li>
              <li className="flex items-center gap-3">
                <HeartPulse className="h-6 w-6 flex-shrink-0 text-blue-500" />
                <span className="alan-medium">
                  Stay active, healthy, and pain-free.
                </span>
              </li>
            </ul>

            <div className="mt-10">
              <a
                href="#"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-lg font-bold text-white shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
              >
                Book Your Session
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </main>
      </section>
    </div>
  );
};

export default ValdSection;