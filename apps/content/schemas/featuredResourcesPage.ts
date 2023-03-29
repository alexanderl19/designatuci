import {defineType, defineField, defineArrayMember} from 'sanity'

const featuredResourceTypes = ['Tool', 'Guide', 'Inspiration']

export default defineType({
  name: 'featuredResourcesPage',
  title: 'Featured Resources Page',
  type: 'document',
  fields: [
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'image',
    }),
    defineField({
      name: 'resources',
      title: 'Resources',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
            }),
            defineField({
              name: 'type',
              title: 'Type',
              type: 'string',
              options: {
                list: featuredResourceTypes.map((value) => ({
                  title: value,
                  value,
                })),
              },
            }),
            defineField({
              name: 'url',
              title: 'URL',
              type: 'url',
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
            }),
            defineField({
              name: 'preview',
              title: 'Preview',
              type: 'image',
            }),
          ],

          preview: {
            select: {
              title: 'title',
              type: 'type',
            },
            prepare({type, ...rest}) {
              return {...rest, subtitle: type ?? 'Other'}
            },
          },
        }),
      ],
    }),
  ],

  preview: {
    prepare() {
      return {title: 'Featured Resources Page'}
    },
  },
})
