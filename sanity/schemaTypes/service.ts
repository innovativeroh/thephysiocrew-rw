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
      name: "subDescription",
      title: "Sub Description",
      type: "string",
      description: "Subtitle for the hero section and card overviews.",
      validation: (Rule) => Rule.required().max(150),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      description: "Detailed description for the about section on the service page.",
      validation: (Rule) => Rule.required().max(1000),
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
    defineField({
      name: "heroImage",
      title: "Hero Image",
      type: "image",
      description: "Main image shown at the top of the service details page.",
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
    defineField({
      name: "keyPoints",
      title: "Key Points",
      type: "array",
      of: [
        {
          type: "object",
          name: "keyPoint",
          fields: [
            {
              name: "title",
              title: "Title",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "description",
              title: "Description",
              type: "text",
              validation: (Rule) => Rule.required(),
            },
          ],
          preview: {
            select: {
              title: "title",
            },
          },
        },
      ],
      validation: (Rule) => Rule.min(1).max(6),
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