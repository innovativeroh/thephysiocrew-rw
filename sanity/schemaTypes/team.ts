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
    defineField({
      name: "bookingLinks",
      title: "Booking Links",
      type: "array",
      of: [
        {
          type: "object",
          name: "bookingLocation",
          fields: [
            {
              name: "location",
              title: "Location",
              type: "string",
              options: {
                list: [
                  { title: "Tullamarine", value: "tullamarine" },
                  { title: "Carlton", value: "carlton" },
                ],
                layout: "radio",
              },
              validation: (Rule) => Rule.required(),
            },
            {
              name: "bookingUrl",
              title: "Booking URL",
              type: "url",
              validation: (Rule) => Rule.required().uri({
                scheme: ["http", "https"],
              }),
            },
          ],
          preview: {
            select: {
              location: "location",
              url: "bookingUrl",
            },
            prepare({ location, url }) {
              return {
                title: location === "tullamarine" ? "Tullamarine" : "Carlton",
                subtitle: url,
              };
            },
          },
        },
      ],
      validation: (Rule) => Rule.max(2),
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
