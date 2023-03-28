import {defineType, defineField, defineArrayMember} from 'sanity'

export default defineType({
  name: 'aboutPage',
  title: 'About',
  type: 'document',
  groups: [
    {
      title: 'Hero',
      name: 'hero',
    },
    {
      title: 'Details',
      name: 'details',
    },
    {
      title: 'Testimonials',
      name: 'testimonials',
    },
    {
      title: 'Partners',
      name: 'partners',
    },
  ],
  fields: [
    defineField({
      name: 'greeting',
      title: 'Greeting',
      type: 'string',
      group: 'hero',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'text',
      group: 'hero',
    }),
    defineField({
      name: 'background',
      title: 'Background',
      type: 'image',
      group: 'hero',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'text',
      group: 'details',
    }),
    defineField({
      name: 'highlights',
      title: 'Highlights',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'text',
              title: 'Text',
              type: 'text',
            }),
            defineField({
              name: 'link',
              title: 'Link',
              type: 'object',
              fields: [
                defineField({
                  name: 'label',
                  title: 'Label',
                  type: 'string',
                }),
                defineField({
                  name: 'url',
                  title: 'URL',
                  type: 'url',
                  validation: (Rule) =>
                    Rule.uri({
                      allowRelative: true,
                    }),
                }),
              ],
            }),
          ],

          preview: {
            select: {
              title: 'text',
            },
          },
        }),
      ],
      group: 'details',
    }),
    defineField({
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'text',
              title: 'Text',
              type: 'text',
            }),
            defineField({
              name: 'person',
              title: 'Person',
              type: 'reference',
              to: {type: 'person'},
            }),
          ],

          preview: {
            select: {
              title: 'text',
              subtitle: 'person.name',
              media: 'person.image',
            },
          },
        }),
      ],
      group: 'testimonials',
    }),
    defineField({
      name: 'partners',
      title: 'Partners',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              title: 'Name',
              type: 'string',
            }),
            defineField({
              name: 'logo',
              title: 'Logo',
              type: 'image',
              options: {
                hotspot: true,
              },
            }),
            defineField({
              name: 'link',
              title: 'Link',
              type: 'url',
            }),
          ],
        }),
      ],
      group: 'partners',
    }),
  ],

  preview: {
    prepare() {
      return {title: 'About Page'}
    },
  },
})
