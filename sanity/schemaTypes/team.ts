// /sanity/schemaTypes/team.ts
import { defineField, defineType } from "sanity";

export const team = defineType({
  name: "team",
  title: "Team Member",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "role",
      title: "Role",
      description: "e.g., Director & Principal (Optional)",
      type: "string",
    }),
    defineField({
      name: "education",
      title: "Education",
      description: "e.g., Physiotherapist | B.Physio (La Trobe) | APAM",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 5,
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "role",
      media: "image",
    },
  },
});
