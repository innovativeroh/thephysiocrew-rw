"use client";
import { ArrowRight } from "lucide-react";
import { groq } from "next-sanity";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { client } from "../../../sanity/lib/client";
import Image from "next/image";

interface HeroVideo {
  _id: string;
  videoUrl: string;
  overlayOpacity: number;
}

const Hero = () => {
  const [backgroundVideo, setBackgroundVideo] = useState<HeroVideo | null>(
    null
  );
  const [loading, setLoading] = useState<boolean>(true);
  const [error, seterror] = useState<any | null>(null);

  const heroVideoQuery = groq`
      *[_type == "heroVideo"][0]{
        _id,
        title,
        overlayOpacity,
        "videoUrl": videoFile.asset->url
      }
    `;

  useEffect(() => {
    const fetchWork = async () => {
      try {
        setLoading(true);
        seterror(null);
        setBackgroundVideo(null);
        const res = await client.fetch(heroVideoQuery);
        setBackgroundVideo(res);
        setLoading(false);
        seterror(null);
      } catch (err) {
        seterror(err);
        setLoading(false);
      }
    };
    fetchWork();
  }, []);

  console.log(backgroundVideo);

  if (loading) {
    return (
      <div className="h-screen w-full flex-center text-3xl md:text-4xl lg:text-5xl font-satoshi font-medium">
        Loading...
      </div>
    );
  }

  return (
    <section className="w-full relative">
      <div className="p-4 w-full h-full flex-center absolute top-0 left-0 z-[-2]">
        <video
          src={backgroundVideo?.videoUrl}
          autoPlay
          muted
          loop
          className="w-full h-full object-cover rounded-3xl"
        />
      </div>
      <div className="p-4 w-full h-full flex-center absolute top-0 left-0 z-[-1]">
        <div className="w-full h-full bg-black/40 rounded-3xl" />
      </div>
      <main className="container mx-auto">
        <div className="px-5 py-5 min-h-screen w-full flex-center flex-col">
          <h1 className="text-3xl md:text-5xl text-white text-center font-josefin-semibold max-w-[1000px]">
            Melbourne’s trusted Physio team for sports injuries, pain relief,
            and recovery
          </h1>
          <p className="text-xl max-w-[700px] text-white mt-3 text-center font-brandon">
            Our expert team of physiotherapists provide hands-on care and
            creates personalised treatment plans that help achieve your health
            goals.
          </p>
          <div className="flex-center gap-5">
            <Link
              href={
                "https://the-physio-crew-tullamarine-pty-ltd.au3.cliniko.com/bookings"
              }
              target="_blank"
              className="w-44 flex-center text-lg mt-5 gap-4 text-blue-950 bg-white hover:bg-white/20 hover:text-white duration-300 py-3 px-5 rounded-full font-josefin-semibold border-2 border-white"
            >
              Book Now <ArrowRight />
            </Link>
            <Link
              href={
                "https://the-physio-crew-tullamarine-pty-ltd.au3.cliniko.com/bookings"
              }
              target="_blank"
              className="w-44 flex-center text-lg mt-5 gap-4 text-white hover:bg-white/20 duration-300 py-3 px-5 rounded-full font-josefin-semibold border-2 border-white"
            >
              Know more
            </Link>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Hero;
