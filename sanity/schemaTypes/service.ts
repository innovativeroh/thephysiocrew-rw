// sanity/schemas/service.ts

import { defineField, defineType } from "sanity";

export default defineType({
  name: "service",
  title: "Service",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Short Description (for cards)",
      type: "text",
      description:
        "A brief description that appears on the service card hover.",
      validation: (Rule) => Rule.required().max(200),
    }),
    defineField({
      name: "image",
      title: "Card Image",
      type: "image",
      description: "Image for the service card on the main services page.",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
          validation: (Rule) => Rule.required(),
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    // 👇 NEW FIELD FOR THE DETAILS PAGE IMAGE
    defineField({
      name: "mainImage",
      title: "Main Page Image",
      type: "image",
      description: "Image shown at the top of the service details page.",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
          validation: (Rule) => Rule.required(),
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    // 👇 NEW FIELD FOR THE RICH TEXT CONTENT
    defineField({
      name: "content",
      title: "Content",
      type: "array",
      of: [
        {
          type: "block", // This enables the rich text editor
          styles: [
            { title: "Normal", value: "normal" },
            { title: "H2", value: "h2" },
            { title: "H3", value: "h3" },
            { title: "Quote", value: "blockquote" },
          ],
          marks: {
            decorators: [
              { title: "Strong", value: "strong" },
              { title: "Emphasis", value: "em" },
            ],
          },
        },
      ],
      description: "The main content for the service details page.",
    }),
    defineField({
      name: "color",
      title: "Overlay Color",
      type: "string",
      description: "Hex color code for the card overlay (e.g., #3B82F6).",
      validation: (Rule) =>
        Rule.required().regex(/^#[0-9a-fA-F]{6}$/, {
          name: "hex-color",
          invert: false,
        }),
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "image",
    },
  },
});
