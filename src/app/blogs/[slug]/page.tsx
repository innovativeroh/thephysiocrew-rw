// /app/blogs/[slug]/page.tsx


import { groq, PortableTextBlock } from "next-sanity";
import { client } from "../../../../sanity/lib/client";
import BlogPostPageComponent from "./BlogPostPage";

// TypeScript Interfaces for our Sanity data
export interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  category: string | null;
  authorName: string | null;
  mainImage: string | null;
  publishedAt: string;
  excerpt: string;
  content: PortableTextBlock[];
}

export interface RelatedPost {
  _id: string;
  title: string;
  slug: string;
  category: string | null;
  mainImage: string | null;
}

// Main Page Component (Server Component for data fetching)
export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;

  // GROQ query to fetch a single blog post by its slug
  const postQuery = groq`*[_type == "blog" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    "category": category,
    "authorName": author,
    "mainImage": mainImage.asset->url,
    publishedAt,
    excerpt,
    content
  }`;

  const post: BlogPost = await client.fetch(postQuery, { slug });

  if (!post) {
    // In a real app, you'd probably want to render a 404 page
    return <div>Blog post not found.</div>;
  }

  // GROQ query to fetch 2 related posts from the same category
  const relatedPostsQuery = groq`*[_type == "blog" && category == $category && slug.current != $slug] | order(publishedAt desc) [0...2] {
    _id,
    title,
    "slug": slug.current,
    "category": category,
    "mainImage": mainImage.asset->url
  }`;

  const relatedPosts: RelatedPost[] = await client.fetch(relatedPostsQuery, {
    category: post.category,
    slug: post.slug,
  });

  return <BlogPostPageComponent post={post} relatedPosts={relatedPosts} />;
}