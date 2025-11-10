import React from "react";
import { ClipboardList, CalendarCheck, ShieldCheck, Users } from "lucide-react";
import Image from "next/image";

const WhyChooseUs = () => {
  const features = [
    {
      icon: ClipboardList,
      title: "Personalised care for sports injuries, back pain, and more.",
    },
    {
      icon: CalendarCheck,
      title: "No referral needed — just book and visit.",
    },
    {
      icon: ShieldCheck,
      title: "No Gap physio available with Medicare referrals.",
    },
    {
      icon: Users,
      title: "Trusted by thousands across Melbourne.",
    },
  ];

  return (
    <section>
      <main className="container mx-auto">
        <div className="px-5 pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((data, key) => (
            <div
              key={key}
              className="flex items-center justify-between gap-3 w-full max-w-[350px] p-4 rounded-2xl bg-primary/5 border-2 border-primary/20 shadow-sm transition-all duration-300"
            >
              <div className="p-3 bg-black/5 flex-center rounded-full">
                <data.icon className="w-8 h-8 text-primary flex-shrink-0" />
              </div>
              <h1 className="text-black text-xl font-brandon">{data.title}</h1>
            </div>
          ))}
        </div>
      </main>
    </section>
  );
};

export default WhyChooseUs;
