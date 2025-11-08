import { defineType, defineField } from "sanity";

export const aboutVideo = defineType({
  name: "aboutVideo",
  title: "About Section Video",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Video Title",
      type: "string",
      description: "For internal reference only",
    }),
    defineField({
      name: "videoFile",
      title: "Background Video",
      type: "file",
      description: "Upload your hero background video here",
      options: {
        accept: "video/*",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "overlayOpacity",
      title: "Overlay Opacity",
      type: "number",
      description: "Adjust the darkness of overlay (0 = none, 1 = full black)",
      initialValue: 0.4,
      validation: (Rule) => Rule.min(0).max(1),
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "videoFile",
    },
  },
});
