import Image from "next/image";
import React from "react";
import Vald3 from "../../../public/Images/vald.jpeg";
import Vald2 from "../../../public/Images/vald-2.png";
import Vald1 from "../../../public/Images/vald-3.png";

const ValdSection = () => {
  return (
    <section>
      <main className="container mx-auto">
        <div className="px-5 pt-32 w-full flex flex-col gap-16">
          <div className="w-full flex-center flex-col gap-3">
            <h1 className="text-3xl md:text-4xl lg:text-5xl alan-semibold max-w-[600px] text-center">
              Smarter Recovery with{" "}
              <span className="text-blue-600">VALD Technology</span>
            </h1>
            <p className="text-sm max-w-[600px] text-gray-900 mont-medium text-center">
              At The Physio Crew, we go beyond traditional physiotherapy by
              using VALD performance technology—a world-leading system trusted
              by elite sports teams and medical professionals.
            </p>
          </div>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            <Image
              src={Vald1}
              alt=""
              width={1920}
              height={1080}
              className="w-full h-full object-cover rounded-lg"
            />
            <Image
              src={Vald2}
              alt=""
              width={1920}
              height={1080}
              className="w-full h-full object-cover rounded-lg"
            />
            <Image
              src={Vald3}
              alt=""
              width={1920}
              height={1080}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </main>
    </section>
  );
};

export default ValdSection;
