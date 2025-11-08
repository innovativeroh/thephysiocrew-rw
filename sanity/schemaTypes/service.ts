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
      validation: (Rule) => Rule.required().max(150),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule) => Rule.required().max(1000),
    }),
    defineField({
      name: "image",
      title: "Card Image",
      type: "image",
      options: { hotspot: true },
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
      options: { hotspot: true },
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

    // ✅ Add main video for the service
    defineField({
      name: "serviceVideo",
      title: "Service Video",
      type: "file",
      description:
        "Optional video describing this service (upload MP4 or MOV).",
      options: {
        accept: "video/*",
      },
    }),

    // ✅ Key Points with image + video support
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
            {
              name: "image",
              title: "Image",
              type: "image",
              options: { hotspot: true },
              fields: [{ name: "alt", type: "string", title: "Alt Text" }],
            },
            {
              name: "video",
              title: "Video",
              type: "file",
              description:
                "Optional video for this key point (upload MP4 or MOV).",
              options: { accept: "video/*" },
            },
          ],
          preview: {
            select: { title: "title", media: "image" },
          },
        },
      ],
      validation: (Rule) => Rule.min(1).max(6),
    }),

    defineField({
      name: "color",
      title: "Overlay Color",
      type: "string",
      description: "Hex color code for overlay (e.g. #3B82F6).",
      validation: (Rule) =>
        Rule.required().regex(/^#[0-9a-fA-F]{6}$/, { name: "hex-color" }),
    }),
  ],

  preview: {
    select: {
      title: "title",
      media: "image",
    },
  },
});
