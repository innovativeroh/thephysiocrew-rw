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
        <div className="px-5 pt-10 flex-between flex-wrap gap-10">
          {features.map((data, key) => (
            <div
              key={key}
              className="flex items-center justify-between gap-3 w-full max-w-[300px]"
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
