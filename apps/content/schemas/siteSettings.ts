import {defineType, defineField, defineArrayMember} from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'socials',
      title: 'Socials',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'socialLink',
        }),
      ],
    }),
    defineField({
      name: 'copyright',
      title: 'Copyright',
      type: 'string',
    }),
    defineField({
      name: 'attribution',
      title: 'Attribution',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [],
          lists: [],
          marks: {decorators: []},
        },
      ],
    }),
  ],

  preview: {
    prepare() {
      return {title: 'Site Settings'}
    },
  },
})
