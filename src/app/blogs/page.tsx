"use client"; // Required for Framer Motion

import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import heroImage from "../../../public/Images/medical.jpg";
import { ArrowUpIcon, SearchIcon } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion"; // Import motion

interface BlogPost {
  id: number;
  category: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  imageUrl: string;
}

const BlogsSection = () => {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      category: "Sports Injuries",
      title: "Recover Safely & Return Stronger: A Guide for Athletes",
      excerpt:
        "Our Physiotherapists use cutting-edge VALD technology to deliver clear recovery goals and tailored rehab programs for athletes of all levels.",
      author: "Marcus Just",
      date: "Oct 02, 2025",
      imageUrl: "/Images/4.jpg", // Placeholder image
    },
    {
      id: 2,
      category: "Post-Op Rehab",
      title: "The Road to Recovery: A Deep Dive into Post-Operative Rehab",
      excerpt:
        "With a special interest in post-op rehab, we focus on knee and shoulder injuries, building trust and keeping clients moving forward.",
      author: "Lauren Le'Toille",
      date: "Sep 28, 2025",
      imageUrl: "/Images/4.jpg", // Placeholder image
    },
    {
      id: 3,
      category: "Wellness",
      title: "Beyond the Pain: How Remedial Massage Can Restore Your Body",
      excerpt:
        "Anthony, our skilled therapist, eases muscle and joint pain with techniques like deep tissue massage, cupping, and scraping.",
      author: "Anthony Xenos",
      date: "Sep 15, 2025",
      imageUrl: "/Images/4.jpg", // Placeholder image
    },
  ];

  // This is a great reusable variant for staggering child animations.
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  // This reusable item variant is perfect for the fade-in-and-slide-up effect.
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section className="min-h-screen font-sans">
      {/* Hero Section */}
      <div className="text-white relative">
        <Image
          src={heroImage}
          alt=""
          width={1920}
          height={1080}
          className="absolute top-0 left-0 h-full w-full object-cover z-[-2]"
        />
        <div className="h-full w-full absolute top-0 left-0 bg-black/30 z-[-1]"></div>
        <div className="container mx-auto px-6 py-24 md:py-32 lg:py-40">
          {/* Your use of `animate="visible"` here is perfect for an on-load animation. */}
          <motion.div
            className="max-w-4xl mx-auto text-center space-y-8"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
            >
              <span className="text-sm font-medium tracking-wide">
                NEWS & RESEARCH
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-3xl md:text-4xl lg:text-6xl text-center alan-semibold"
            >
              Health, Movement & Recovery
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-sm max-w-[600px] mx-auto text-gray-200 mont-medium text-center"
            >
              Expert knowledge and genuine care to help you relieve pain,
              restore strength, and achieve your health goals.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="max-w-xl mx-auto pt-4"
            >
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full px-6 py-4 pr-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all"
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2">
                  <SearchIcon />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="container mx-auto px-6 py-16 md:py-24">
        {/* Using `whileInView` for the blog grid is the correct approach for scroll-triggered animations. */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {blogPosts.map((blog) => (
            <motion.div key={blog.id} variants={itemVariants}>
              <Link href={`/blogs/${blog.id}`} legacyBehavior>
                <a className="group cursor-pointer block">
                  <article>
                    {/* Image Container */}
                    <div className="relative aspect-[4/3] mb-6 overflow-hidden rounded-2xl bg-muted">
                      <Image
                        src={blog.imageUrl || "/placeholder.svg"}
                        alt={blog.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    {/* Content */}
                    <div className="space-y-4">
                      {/* ... content ... */}
                      <div className="flex items-center justify-between text-sm">
                        <Badge
                          variant="secondary"
                          className="bg-blue-500/10 text-blue-500 alan-medium"
                        >
                          {blog.category}
                        </Badge>
                        <time className="text-gray-400 mont-medium">
                          {blog.date}
                        </time>
                      </div>
                      <h2 className="text-xl md:text-2xl alan-semibold text-balance">
                        {blog.title}
                      </h2>
                      <p className="mont-medium text-pretty">
                        {blog.excerpt}
                      </p>
                      <div className="flex items-center justify-between pt-2">
                        <span className="text-sm alan-medium text-black">
                          {blog.author}
                        </span>
                        <div className="flex items-center gap-2 mont-semibold text-sm text-blue-600">
                          <span>Read more</span>
                          <ArrowUpIcon className="rotate-45" />
                        </div>
                      </div>
                    </div>
                  </article>
                </a>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BlogsSection;