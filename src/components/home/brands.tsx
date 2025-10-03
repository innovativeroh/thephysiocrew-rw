import Image from "next/image";
import React from "react";

const BrandsSection = () => {
  const logo = [
    {
      img: "/images/1logo.png",
    },
    {
      img: "/images/2logo.jpg",
    },
    {
      img: "/images/3logo.png",
    },
    {
      img: "/images/4logo.jpeg",
    },
    {
      img: "/images/5logo.jpg",
    },
    {
      img: "/images/6logo.png",
    },
  ];
  return (
    <section>
      <main className="container mx-auto">
        <div className="px-5 pt-10 w-full flex-center flex-col gap-10">
          <div className="w-full flex-center flex-col gap-3">
            <h1 className="text-3xl md:text-4xl lg:text-5xl alan-semibold text-center">
              Local Community Partners
            </h1>
            <p className="text-sm max-w-[600px] text-gray-900 mont-medium text-center">
              We are deeply committed to the health of the communities we serve.
              We build strong relationships with local sports teams.
            </p>
          </div>
          <div className="w-full flex-center flex-wrap gap-8">
            {logo.map((logo, index) => (
              <div className="flex-center" key={index}>
                <Image
                  src={logo.img}
                  alt=""
                  width={1920}
                  height={1080}
                  className="w-auto h-24"
                />
              </div>
            ))}
          </div>
        </div>
      </main>
    </section>
  );
};

export default BrandsSection;
