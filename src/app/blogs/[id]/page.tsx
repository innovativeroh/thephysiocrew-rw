"use client"; // Required for Framer Motion

import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import heroImage from "../../../public/Images/medical.jpg";
import { Clock, Facebook, Linkedin, Mail, Twitter, User } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

type BlogPost = {
  id: number;
  category: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  imageUrl: string;
};

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

const BlogPostPage = ({ post }: { post: BlogPost }) => {
  if (!post) {
    return <div>Blog post not found.</div>;
  }

  const relatedPosts = blogPosts.filter((p) => p.id !== post.id).slice(0, 2);

  // Animation variants for the main article content
  const articleContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Stagger the animation of header, image, content, etc.
      },
    },
  };

  const articleItemVariants = {
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
    <div className="pt-13">
      <main className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <motion.article
              variants={articleContainerVariants}
              initial="hidden"
              animate="visible" // Animate on page load
            >
              <motion.header className="mb-8" variants={articleItemVariants}>
                <span className="mb-2 inline-block rounded-full bg-blue-100 px-3 py-1 text-sm alan-semibold text-blue-800">
                  {post.category}
                </span>
                <h1 className="mb-4 text-3xl alan-semibold tracking-tight text-gray-900 md:text-4xl lg:text-5xl">
                  {post.title}
                </h1>
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-600 mont-medium">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>By {post.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <time dateTime={new Date(post.date).toISOString()}>
                      {post.date}
                    </time>
                  </div>
                </div>
              </motion.header>

              <motion.figure
                className="mb-8 overflow-hidden rounded-lg shadow-lg"
                variants={articleItemVariants}
              >
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  width={800}
                  height={450}
                  className="w-full h-full max-h-[600px] object-cover"
                />
              </motion.figure>

              <motion.div
                className="prose prose-lg max-w-none text-gray-700 mont-regular"
                variants={articleItemVariants}
              >
                <p className="mb-2 text-xl mont-bold">{post.excerpt}</p>
                <p>
                  At The Physio Crew, we understand that recovering from an
                  injury or surgery is more than just a physical
                  process—it&apos;s a journey that requires trust, personalized
                  care, and a clear path forward. Our dedicated team of
                  physiotherapists leverages state-of-the-art technology and
                  evidence-based practices to ensure you not only recover but
                  come back stronger and more resilient.
                </p>
                <h2 className="text-2xl font-bold text-gray-800">
                  Our Approach to Personalized Rehabilitation
                </h2>
                <p>
                  We believe that no two recovery journeys are the same.
                  That&apos;s why we begin with a comprehensive assessment to
                  understand the root cause of your pain or limitation. For
                  athletes, our use of cutting-edge VALD technology provides
                  objective data to measure strength, balance, and movement
                  patterns. This allows us to set clear, achievable goals and
                  design a rehab program tailored specifically to your needs and
                  sport.
                </p>
                <blockquote>
                  <p>
                    &quot;Our goal is to empower you with the knowledge and
                    tools to take control of your recovery and achieve lasting
                    results.&quot;
                  </p>
                </blockquote>
                <p>
                  Whether you are dealing with a sports injury, rehabilitating
                  after surgery, or managing chronic pain, our hands-on approach
                  combined with targeted exercise programming ensures you are
                  always moving in the right direction.
                </p>
              </motion.div>

              <motion.footer
                className="mt-12 border-t pt-8"
                variants={articleItemVariants}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg alan-semibold text-gray-800">
                    Share this article
                  </h3>
                  <div className="flex items-center gap-2">
                    <a
                      href="#"
                      className="rounded-full p-2 text-gray-500 transition-colors hover:bg-gray-100 hover:text-blue-600"
                    >
                      <Twitter className="h-5 w-5" />
                    </a>
                    <a
                      href="#"
                      className="rounded-full p-2 text-gray-500 transition-colors hover:bg-gray-100 hover:text-blue-800"
                    >
                      <Facebook className="h-5 w-5" />
                    </a>
                    <a
                      href="#"
                      className="rounded-full p-2 text-gray-500 transition-colors hover:bg-gray-100 hover:text-blue-700"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a
                      href="#"
                      className="rounded-full p-2 text-gray-500 transition-colors hover:bg-gray-100 hover:text-red-600"
                    >
                      <Mail className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </motion.footer>
            </motion.article>
          </div>

          {/* Sidebar */}
          <motion.aside
            className="lg:col-span-1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          >
            <div className="sticky top-24 rounded-lg bg-gray-50 p-6 shadow-sm">
              <h3 className="mb-6 text-xl alan-semibold text-gray-900">
                Related Articles
              </h3>
              <div className="space-y-6">
                {relatedPosts.map((relatedPost) => (
                  <div key={relatedPost.id} className="group flex gap-4">
                    <div className="w-1/3 flex-shrink-0">
                      <Image
                        src={relatedPost.imageUrl}
                        alt={relatedPost.title}
                        width={100}
                        height={75}
                        className="h-full w-full max-h-[140px] rounded-md object-cover"
                      />
                    </div>
                    <div>
                      <span className="mb-1 block text-xs alan-semibold text-blue-600">
                        {relatedPost.category}
                      </span>
                      <Link
                        href={`/blogs/${relatedPost.id}`}
                        className="text-base alan-semibold text-gray-800 transition-colors group-hover:text-blue-700"
                      >
                        {relatedPost.title}
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
              <button className="mt-8 w-full rounded-md bg-blue-600 px-4 py-3 text-base alan-semibold text-white shadow-sm transition-transform hover:scale-105 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                Book an Appointment
              </button>
            </div>
          </motion.aside>
        </div>
      </main>
    </div>
  );
};

const Page = () => {
  const postToDisplay = blogPosts.find((p) => p.id === 1);
  return postToDisplay ? (
    <BlogPostPage post={postToDisplay} />
  ) : (
    <div>Post not found</div>
  );
};

export default Page;
