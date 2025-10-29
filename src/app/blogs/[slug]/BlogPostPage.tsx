import Image from "next/image";
import Link from "next/link";
import { Clock, Facebook, Linkedin, Mail, Twitter, User } from "lucide-react";
import { PortableText } from "@portabletext/react";
import { BlogPost, RelatedPost } from "./page"; // Import interfaces from the page file
import Footer from "@/components/core/footer";

// A simple utility to format dates for better readability
const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(dateString).toLocaleDateString("en-US", options);
};

const BlogPostPageComponent = ({
  post,
  relatedPosts,
}: {
  post: BlogPost;
  relatedPosts: RelatedPost[];
}) => {
  if (!post) {
    return <div>Blog post not found.</div>;
  }

  return (
    <>
    <div className="pt-20 font-sans">
      <main className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <article>
            <header className="mb-8">
              {post.category && (
            <span className="mb-5 inline-block rounded-full bg-[#003B64]/10 px-5 py-1 sora text-base font-brandon-medium text-[#003B64]">
                  {post.category}
                </span>
              )}
              <h1 className="mb-4 text-3xl font-josefin-semibold tracking-tight text-gray-900 md:text-4xl lg:text-5xl">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-base font-brandon-medium text-gray-600">
                {post.authorName && (
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>By {post.authorName}</span>
                  </div>
                )}
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <time dateTime={new Date(post.publishedAt).toISOString()}>
                    {formatDate(post.publishedAt)}
                  </time>
                </div>
              </div>
            </header>

            {post.mainImage && (
              <figure className="mb-8">
                <Image
                  src={post.mainImage}
                  alt={post.title}
                  width={800}
                  height={450}
                  priority
                  className="h-full w-auto max-h-[500px] rounded-lg"
                />
              </figure>
            )}

            <div className="prose prose-xl text-lg text-gray-700 font-brandon">
              {/* Render Sanity Rich Text Content Here */}
              <PortableText value={post.content} />
            </div>

          </article>
        </div>
      </main>
    </div>
    <Footer />
    </>
  );
};

export default BlogPostPageComponent;
