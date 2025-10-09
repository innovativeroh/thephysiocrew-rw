import { defineField, defineType } from "sanity";
export const SINGLETON_TEAM_IMAGE_ID = "singleton-team-image";

export const teamImage = defineType({
  name: "team-Image",
  title: "Team Page Image",
  type: "document",
  fields: [
    defineField({
      name: "image",
      title: "Image",
      description: "The main image displayed on the team page.",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'Describe the image for accessibility',
          validation: (Rule) => Rule.required(),
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      hidden: true,
      initialValue: 'Team Page Image',
    }),
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
});