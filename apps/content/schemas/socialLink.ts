import {defineType, defineField, defineArrayMember} from 'sanity'

const linkTypes = new Map([
  ['discord', 'Discord'],
  ['facebook', 'Facebook'],
  ['instagram', 'Instagram'],
  ['linkedin', 'LinkedIn'],
  ['tiktok', 'TikTok'],
  ['website', 'Website'],
  ['youtube', 'YouTube'],
])

export default defineType({
  name: 'socialLink',
  title: 'Social Link',
  type: 'object',
  fields: [
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: Array.from(linkTypes.entries()).map(([value, title]) => ({title, value})),
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

  preview: {
    select: {
      title: 'type',
      subtitle: 'url',
    },
    prepare({title, ...rest}) {
      return {...rest, title: linkTypes.get(title)}
    },
  },
})
