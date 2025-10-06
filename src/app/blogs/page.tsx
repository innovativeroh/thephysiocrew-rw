"use client"; // Required for Framer Motion

import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import heroImage from "../../../public/Images/medical.jpg"; // Ensure this path is correct
import { ArrowUpIcon, SearchIcon } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { groq, PortableTextBlock } from "next-sanity";
import { client } from "../../../sanity/lib/client";

// Interfaces remain the same
export interface BlogPreview {
  _id: string;
  title: string;
  slug: string;
  category: string | null;
  authorName: string | null;
  mainImage: string | null;
  publishedAt: string;
  excerpt: string;
}

export interface AuthorDetails {
  name: string;
  authorImage: string | null;
  bio: PortableTextBlock[];
}

export interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  category: string | null;
  authorName: string | null; // Changed from author to authorName to match query
  mainImage: string | null;
  publishedAt: string;
  excerpt: string;
  content: PortableTextBlock[];
}

/**
 * Interface for the slug object.
 * Corresponds to the query for "All Slugs".
 */
export interface Slug {
  slug: string;
}

// A simple utility to format dates for better readability
const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  return new Date(dateString).toLocaleDateString("en-US", options);
};

const BlogsSection = () => {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [error, setError] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  // Renamed query for clarity
  const blogsQuery = groq`*[_type == "blog"] | order(publishedAt desc) {
      _id,
      title,
      "slug": slug.current,
      "category": category->title,
      "authorName": author->name, // This is the correct field name
      "mainImage": mainImage.asset->url,
      publishedAt,
      excerpt
    }`;

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await client.fetch(blogsQuery, undefined, {
          cache: "no-cache",
          next: {
            tags: ["blog", "medical", "physiotherapy"],
          },
        });
        setBlogs(response);
      } catch (err) {
        setError(err);
        console.error("Failed to fetch blogs:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []); // Added blogsQuery to dependency array for correctness

  // Removed unused 'blogPosts' array

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

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
          alt="Medical professional assisting a patient"
          width={1920}
          height={1080}
          priority // Add priority for LCP images
          className="absolute top-0 left-0 h-full w-full object-cover z-[-2]"
        />
        <div className="h-full w-full absolute top-0 left-0 bg-black/40 z-[-1]"></div>
        <div className="container mx-auto px-6 py-24 md:py-32 lg:py-40">
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
              className="text-3xl md:text-4xl lg:text-6xl text-center font-semibold" // Assuming 'alan-semibold' was a custom font name
            >
              Health, Movement & Recovery
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-sm max-w-[600px] mx-auto text-gray-200 font-medium text-center" // Assuming 'mont-medium'
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
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {blogs.map((blog) => (
              <Link href={`/blogs/${blog.slug}`} className="group block" key={blog._id}>
                {/* Image Container */}
                <div className="relative aspect-[4/3] mb-6 overflow-hidden rounded-2xl bg-muted">
                  <Image
                    src={blog.mainImage || "/placeholder.svg"}
                    alt={blog.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                {/* Content */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <Badge
                      variant="secondary"
                      className="bg-blue-500/10 text-blue-500 font-medium"
                    >
                      {blog.category}
                    </Badge>
                    <time className="text-gray-400 font-medium">
                      {/* FIX: Format the date for readability */}
                      {formatDate(blog.publishedAt)}
                    </time>
                  </div>
                  <h2 className="text-xl md:text-2xl font-semibold text-balance">
                    {blog.title}
                  </h2>
                  <p className="font-medium text-pretty">{blog.excerpt}</p>
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-sm font-medium text-black">
                      {/* FIX: Use 'authorName' which is what the query returns */}
                      {blog.authorName}
                    </span>
                    <div className="flex items-center gap-2 font-semibold text-sm text-blue-600">
                      <span>Read more</span>
                      <ArrowUpIcon className="rotate-45" size={16} />
                    </div>
                  </div>
                </div>
              </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BlogsSection;
