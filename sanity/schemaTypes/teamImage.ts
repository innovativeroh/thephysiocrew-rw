import { defineField, defineType } from "sanity";
export const SINGLETON_TEAM_IMAGE_ID = "singleton-team-image";

export const teamImage = defineType({
  name: "teamImage",
  title: "Team Image",
  type: "document",
  fields: [
    defineField({
      name: "mediaType",
      title: "Media Type",
      type: "string",
      options: {
        list: [
          { title: "Image", value: "image" },
          { title: "Video", value: "video" },
        ],
        layout: "radio",
        direction: "horizontal",
      },
      initialValue: "image",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Image",
      description: "The main image displayed on the team page.",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
          description: "Describe the image for accessibility",
          validation: (Rule) => Rule.required(),
        },
      ],
      hidden: ({ document }) => document?.mediaType !== "image",
      validation: (Rule) =>
        Rule.custom((value, context) => {
          if (context.document?.mediaType === "image" && !value) {
            return "Image is required when media type is set to Image";
          }
          return true;
        }),
    }),
    defineField({
      name: "video",
      title: "Video",
      description: "The main video displayed on the team page.",
      type: "file",
      options: {
        accept: "video/*",
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
          description: "Describe the video for accessibility",
          validation: (Rule) => Rule.required(),
        },
      ],
      hidden: ({ document }) => document?.mediaType !== "video",
      validation: (Rule) =>
        Rule.custom((value, context) => {
          if (context.document?.mediaType === "video" && !value) {
            return "Video is required when media type is set to Video";
          }
          return true;
        }),
    }),
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      hidden: true,
      initialValue: "Team Page Media",
    }),
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
      mediaType: "mediaType",
    },
    prepare({ title, media, mediaType }) {
      return {
        title,
        media: mediaType === "image" ? media : undefined,
        subtitle: mediaType === "video" ? "Video" : "Image",
      };
    },
  },
});
