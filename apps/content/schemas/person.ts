import {defineType, defineField, defineArrayMember} from 'sanity'

const linkTypes = ['Discord', 'Facebook', 'Instagram', 'LinkedIn', 'TikTok', 'Website', 'YouTube']

export default defineType({
  name: 'person',
  title: 'Person',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'pronouns',
      title: 'Pronouns',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'string',
        }),
      ],
      validation: (Rule) => Rule.unique(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'links',
      title: 'Links',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'type',
              title: 'Type',
              type: 'string',
              options: {
                list: linkTypes.map((linkType) => ({
                  title: linkType,
                  value: linkType.toLowerCase().trim(),
                })),
              },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'url',
              title: 'URL',
              type: 'url',
              validation: (Rule) => Rule.required(),
            }),
          ],
        }),
      ],
      validation: (Rule) => Rule.unique(),
    }),
  ],

  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
})
