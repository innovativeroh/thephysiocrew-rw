"use client"; // Required for useState and useEffect hooks

import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import heroImage from "../../../public/Images/medical.jpg"; // Ensure this path is correct
import { ArrowUpIcon, SearchIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { groq, PortableTextBlock } from "next-sanity";
import { client } from "../../../sanity/lib/client";
import Footer from "@/components/core/footer";

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
  // Original state for all blogs fetched from Sanity
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  // New state to hold the user's search input
  const [searchQuery, setSearchQuery] = useState("");
  // New state to hold the blogs that match the search query
  const [filteredBlogs, setFilteredBlogs] = useState<BlogPost[]>([]);
  const [error, setError] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  const blogsQuery = groq`*[_type == "blog"] | order(publishedAt desc) {
      _id,
      title,
      "slug": slug.current,
      "category": category->title,
      "authorName": author->name,
      "mainImage": mainImage.asset->url,
      publishedAt,
      excerpt
    }`;

  // Effect to fetch blog data from Sanity
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
        setBlogs(response); // Store the original, unfiltered list
        setFilteredBlogs(response); // Initialize the filtered list with all blogs
      } catch (err) {
        setError(err);
        console.error("Failed to fetch blogs:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, [blogsQuery]);

  // New effect to filter blogs whenever the search query changes
  useEffect(() => {
    const handleSearch = () => {
      if (searchQuery.trim() === "") {
        setFilteredBlogs(blogs); // If search is empty, show all blogs
        return;
      }

      const filtered = blogs.filter((blog) => {
        const query = searchQuery.toLowerCase();
        // Check for match in title, excerpt, category, or author's name
        return (
          blog.title?.toLowerCase().includes(query) ||
          blog.excerpt?.toLowerCase().includes(query) ||
          blog.category?.toLowerCase().includes(query) ||
          blog.authorName?.toLowerCase().includes(query)
        );
      });
      setFilteredBlogs(filtered);
    };

    handleSearch();
  }, [searchQuery, blogs]); // Rerun this effect when searchQuery or the main blogs list changes

  return (
    <>
    <section className="min-h-screen font-sans">
      {/* Hero Section */}
      <div className="relative text-white">
        <Image
          src={heroImage}
          alt="Medical professional assisting a patient"
          width={1920}
          height={1080}
          priority
          className="absolute left-0 top-0 z-[-2] h-full w-full object-cover"
        />
        <div className="absolute left-0 top-0 z-[-1] h-full w-full bg-black/40"></div>
        <div className="container mx-auto px-6 py-24 md:py-32 lg:py-40">
          <div className="mx-auto max-w-4xl space-y-8 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
              <span className="text-sm font-medium tracking-wide">
                NEWS & RESEARCH
              </span>
            </div>
            <h1 className="text-center text-3xl font-semibold md:text-4xl lg:text-6xl">
              Health, Movement & Recovery
            </h1>
            <p className="mx-auto max-w-[600px] text-center text-sm font-medium text-gray-200">
              Expert knowledge and genuine care to help you relieve pain,
              restore strength, and achieve your health goals.
            </p>
            <div className="mx-auto max-w-xl pt-4">
              <div className="relative">
                {/* Updated input to be a controlled component */}
                <input
                  type="text"
                  placeholder="Search articles by title, author, or category..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-full border border-white/20 bg-white/10 px-6 py-4 pr-12 text-white backdrop-blur-sm transition-all placeholder:text-white/60 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-white/30"
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2">
                  <SearchIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {/* Conditional rendering based on loading and search results */}
          {loading ? (
            <p className="col-span-full text-center text-gray-500">
              Loading articles...
            </p>
          ) : filteredBlogs.length > 0 ? (
            // Map over the filteredBlogs state instead of the original blogs state
            filteredBlogs.map((blog) => (
              <Link
                href={`/blogs/${blog.slug}`}
                className="group block"
                key={blog._id}
              >
                {/* Image Container */}
                <div className="relative mb-6 overflow-hidden rounded-lg">
                  <Image
                    src={blog.mainImage || "/placeholder.svg"}
                    alt={blog.title}
                    width={1920}
                    height={1080}
                    className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                {/* Content */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <Badge
                      variant="secondary"
                      className="bg-blue-500/10 font-medium text-blue-500"
                    >
                      {blog.category}
                    </Badge>
                    <time className="font-medium text-gray-400">
                      {formatDate(blog.publishedAt)}
                    </time>
                  </div>
                  <h2 className="text-balance text-xl font-semibold md:text-2xl">
                    {blog.title}
                  </h2>
                  <p className="font-medium text-pretty text-gray-600">{blog.excerpt}</p>
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-sm font-medium text-black">
                      {blog.authorName}
                    </span>
                    <div className="flex items-center gap-2 text-sm font-semibold text-blue-600">
                      <span>Read more</span>
                      <ArrowUpIcon className="rotate-45" size={16} />
                    </div>
                  </div>
                </div>
              </Link>
        ))
          ) : (
            // Display message when no results are found
            <p className="col-span-full text-center text-gray-500">
              No articles found matching your search.
            </p>
          )}
        </div>
      </div>
    </section>
    <Footer />
    </>
  );
};

export default BlogsSection;