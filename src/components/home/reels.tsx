import React from "react";
import { Marquee } from "../ui/marquee";

const ReelsSection = () => {
  const reels = [
    {
      url: "https://techsolaceconnects.s3.ap-south-1.amazonaws.com/the-physio-crew/WhatsApp+Video+2025-10-03+at+15.08.55+(1).mp4",
    },
    {
      url: "https://techsolaceconnects.s3.ap-south-1.amazonaws.com/the-physio-crew/WhatsApp+Video+2025-10-03+at+15.08.55.mp4",
    },
    {
      url: "https://techsolaceconnects.s3.ap-south-1.amazonaws.com/the-physio-crew/WhatsApp+Video+2025-10-03+at+15.08.56.mp4",
    },
    {
      url: "https://techsolaceconnects.s3.ap-south-1.amazonaws.com/the-physio-crew/WhatsApp+Video+2025-10-03+at+15.08.59+(1).mp4",
    },
    {
      url: "https://techsolaceconnects.s3.ap-south-1.amazonaws.com/the-physio-crew/WhatsApp+Video+2025-10-03+at+15.08.59.mp4",
    },
  ];
  return (
    <section>
      <main className="container mx-auto">
        <div className="px-5 pt-32 w-full flex-center flex-col gap-16">
          <div className="w-full flex-center flex-col gap-3">
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-left alan-semibold">
              Our Reels
            </h1>
            <p className="text-sm max-w-[600px] text-gray-900 mont-medium text-center">
              Meet The Physio Crew in action—behind-the-scenes moments, expert
              tips, and our passion for movement in quick, engaging videos.
            </p>
          </div>
          <div className="w-full flex-center flex-col gap-3">
            <Marquee pauseOnHover className="[--duration:20s]">
              {reels.map((reel, index) => (
                <video
                  key={index}
                  src={reel.url}
                  width={1920}
                  height={1080}
                  autoPlay
                  loop
                  muted
                  className="w-full h-full rounded-2xl max-h-[500px]"
                />
              ))}
            </Marquee>
            {/* <video
                src={'/videos/.MP4'}
                width={1920}
                height={1080}
                autoPlay
                muted
                className="w-full h-full rounded-2xl max-h-[500px]"
              /> */}
          </div>
        </div>
      </main>
    </section>
  );
};

export default ReelsSection;
