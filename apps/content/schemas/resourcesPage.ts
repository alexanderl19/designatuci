import {defineType, defineField, defineArrayMember} from 'sanity'

export default defineType({
  name: 'resourcesPage',
  title: 'Resources Page',
  type: 'document',
  fields: [
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
              name: 'link',
              title: 'Link',
              type: 'object',
              fields: [
                defineField({
                  name: 'url',
                  title: 'URL',
                  type: 'url',
                  validation: (Rule) =>
                    Rule.uri({
                      allowRelative: true,
                    }),
                }),
                defineField({
                  name: 'newTab',
                  title: 'New Tab',
                  type: 'boolean',
                  initialValue: false,
                }),
              ],
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
            }),
            defineField({
              name: 'icon',
              title: 'Icon',
              type: 'image',
            }),
            defineField({
              name: 'colorOverride',
              title: 'Color Override',
              type: 'color',
              options: {
                disableAlpha: true,
              },
            }),
          ],
        }),
      ],
    }),
  ],

  preview: {
    prepare() {
      return {title: 'Resources Page'}
    },
  },
})
