import Image from "next/image";

const AboutUsSection = () => {
  return (
    <section className="relative bg-white">
      {/* Background grid pattern */}
      <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-px bg-gray-100 opacity-50">
        <div className="bg-white"></div>
        <div className="bg-white"></div>
        <div className="bg-white"></div>
        <div className="bg-white"></div>
      </div>

      <div className="relative z-10 flex flex-col-reverse lg:flex-row min-h-screen">
        {/* Left Half - Text Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center p-8 md:p-16 lg:p-24 xl:p-32">
          <h1 className="text-4xl md:text-5xl lg:text-6xl alan-semibold font-bold leading-tight text-gray-800 max-w-[700px]">
            Our Story the Journey
            That&apos;s Shaped <span className="text-[#3B82F6]">
              Patient
            </span>{" "}
            <br />
            <span className="text-[#3B82F6]">Success</span>
          </h1>

          <div className="mt-8 text-base md:text-lg text-gray-600 max-w-2xl space-y-4 mont-medium">
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

          <button className="mt-12 px-8 py-4 bg-[#3B82F6] text-white alan-semibold rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 self-start">
            Book an Appointment
          </button>
        </div>

        {/* Right Half - Image and Reviews */}
        <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-start py-12 lg:py-0">
          <div className="relative w-[90%] md:w-[80%] lg:w-[90%] xl:w-[80%] aspect-[5/4] lg:aspect-auto h-[450px] md:h-[550px] lg:h-[70%] xl:h-[80%] rounded-[2rem] overflow-hidden">
            <Image
              src="/images/team.jpg"
              alt="Physiotherapists consulting with a patient in a modern clinic"
              layout="fill"
              objectFit="cover"
              className="rounded-[2rem]"
            />

            {/* Floating testimonial bubble */}
            <div className="absolute -bottom-8 -right-[200px] -translate-x-1/2 lg:bottom-0 lg:right-0 lg:translate-x-0 bg-white p-6 md:p-8 rounded-tl-2xl shadow-xl w-[calc(100%-40px)] max-w-sm">
              <div className="flex items-baseline mb-2">
                <span className="text-4xl md:text-5xl font-bold text-gray-800">
                  4.9/5
                </span>
                <span className="ml-2 text-yellow-500 text-lg">★</span>
                <span className="ml-1 text-gray-500 text-sm">
                  (18,921 reviews)
                </span>
              </div>
              <p className="text-gray-700 text-sm md:text-base">
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
