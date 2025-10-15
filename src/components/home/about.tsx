"use client";
import { groq } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { client } from "../../../sanity/lib/client";

// This interface now correctly reflects the entire API response structure
interface TeamMediaResponse {
  result: {
    _id: string;
    mediaType: "image" | "video";
    image?: {
      _id: string;
      url: string;
    };
    video?: {
      _id: string;
      url: string;
    };
  };
  syncTags: string[];
  ms: number;
}


const AboutUsSection = () => {
  // Use the correct type and initialize with null
  const [teamMedia, setTeamMedia] = useState<TeamMediaResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTeamMedia = async () => {
      try {
        // Your query is perfect
        const query = groq`
          *[_type == "teamImage"][0]{
            _id,
            mediaType,
            "image": image.asset->{
              _id,
              url
            },
            "video": video.asset->{
              _id,
              url
            }
          }
        `;
        const response = await client.fetch(query);
        
        setTeamMedia({ result: response, syncTags: [], ms: 0 }); 
        setLoading(false);
      } catch (err) {
        console.error("Error fetching team media:", err);
        setError("Failed to load media. Please try again later.");
        setLoading(false);
      }
    };
    fetchTeamMedia();
  }, []);


  return (
    <section className="relative bg-white pt-16">
      <div className="relative z-10 flex flex-col-reverse lg:flex-row min-h-screen">
        {/* Left Half - Text Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center p-8 md:p-16 lg:p-24 xl:p-32">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-josefin-semibold leading-tight text-gray-800 max-w-[700px]">
            Our Story the Journey That&apos;s Shaped{" "}
            <span className="text-[#3B82F6]">Patient</span> <br />
            <span className="text-[#3B82F6]">Success</span>
          </h1>

          <div className="mt-8 text-base md:text-lg font-brandon-medium text-gray-600 max-w-2xl space-y-4 mont-medium">
            <p>
              Founded in 2017, The Physio Crew was born from a dream to serve
              the community with genuine care and expert knowledge. From one
              vision to two thriving clinics in Tullamarine and Carlton, we’ve
              built our practice on trust, compassion, and results.
            </p>
            <p>
              Every patient is treated with respect, empathy, and a personalised
              approach—whether you’re recovering from injury, managing a
              condition, or chasing peak performance. Our mission is to relieve
              pain, restore strength, and empower you to achieve your health
              goals with confidence.
            </p>
            <p>
              At The Physio Crew, our passion is people—and our greatest reward
              is seeing you live your best, healthiest life.
            </p>
          </div>

          <Link
            href="https://the-physio-crew-tullamarine-pty-ltd.au3.cliniko.com/bookings"
            className="mt-12 px-8 py-4 bg-[#3B82F6] text-white font-brandon-medium rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 self-start"
          >
            Book an Appointment
          </Link>
        </div>

        {/* Right Half - Image/Video and Reviews */}
        <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-start py-12 lg:py-0">
          <div className="relative w-[90%] md:w-[80%] lg:w-[90%] xl:w-[80%] aspect-[5/4] lg:aspect-auto h-[450px] md:h-[550px] lg:h-[70%] xl:h-[80%] rounded-[2rem] overflow-hidden">
            {/* --- START: CONDITIONAL RENDERING LOGIC --- */}
            {loading ? (
              <div className="flex items-center justify-center w-full h-full bg-gray-200 rounded-[2rem]">
                <p className="text-gray-600">Loading...</p>
              </div>
            ) : error ? (
              <div className="flex items-center justify-center w-full h-full bg-red-100 rounded-[2rem]">
                <p className="text-red-600">{error}</p>
              </div>
            ) : teamMedia?.result?.mediaType === 'image' && teamMedia.result.image?.url ? (
              <Image
                src={teamMedia.result.image.url}
                alt="The Physio Crew team"
                layout="fill"
                objectFit="cover"
                className="rounded-[2rem]"
              />
            ) : teamMedia?.result?.mediaType === 'video' && teamMedia.result.video?.url ? (
              <video
                src={teamMedia.result.video.url}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover rounded-[2rem]"
              >
                Your browser does not support the video tag.
              </video>
            ) : (
              <div className="flex items-center justify-center w-full h-full bg-gray-200 rounded-[2rem]">
                <p className="text-gray-600">No media available</p>
              </div>
            )}
            {/* --- END: CONDITIONAL RENDERING LOGIC --- */}

            {/* Floating testimonial bubble */}
            <div className="absolute -bottom-8 -right-[200px] -translate-x-1/2 lg:bottom-0 lg:right-0 lg:translate-x-0 bg-white p-6 md:p-8 rounded-tl-2xl shadow-xl w-[calc(100%-40px)] max-w-sm">
              <div className="flex items-baseline mb-2">
                <span className="text-4xl md:text-5xl font-bold text-gray-800 font-josefin-semibold">
                  5/5
                </span>
                <span className="ml-2 text-yellow-500 text-lg">★</span>
                <span className="ml-1 text-gray-500 text-sm font-brandon-medium">
                  (18,921 reviews)
                </span>
              </div>
              <p className="text-gray-700 text-sm md:text-base font-brandon">
                Discover Our TrustScore & <br /> Customer Reviews
              </p>
              <div className="flex mt-4 space-x-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-green-500 text-xl md:text-2xl">
                    ★
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;