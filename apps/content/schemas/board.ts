import {defineType, defineField, defineArrayMember} from 'sanity'

const boardTitles = [
  'President',
  'Vice President',
  'Marketing Director',
  'Marketing Coordinator',
  'Workshop Coordinator',
  'Industry Outreach Coordinator',
  'Designathon Director',
  'Project Teams Coordinator',
  'Creative Director',
  'Graphic Designer',
  'Webmaster',
]
const internTitles = ['Internal', 'External', 'Design', 'Developer']

export default defineType({
  name: 'board',
  title: 'Board',
  type: 'document',
  fields: [
    defineField({
      name: 'year',
      title: 'Year',
      type: 'number',
      initialValue: new Date().getFullYear(),
      validation: (Rule) => Rule.required().integer().min(1000).max(9999),
    }),
    defineField({
      name: 'members',
      title: 'Members',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'member',
          title: 'Member',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
              options: {
                list: boardTitles.map((title) => ({title, value: title})),
              },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'person',
              title: 'Person',
              type: 'reference',
              to: [{type: 'person'}],
            }),
          ],

          preview: {
            select: {
              title: 'title',
              media: 'person.image',
            },
          },
        }),
      ],
      validation: (Rule) => Rule.unique(),
    }),
    defineField({
      name: 'interns',
      title: 'Interns',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'intern',
          title: 'Intern',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
              options: {
                list: internTitles.map((title) => ({
                  title,
                  value: title,
                })),
              },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'person',
              title: 'Person',
              type: 'reference',
              to: [{type: 'person'}],
            }),
          ],

          preview: {
            select: {
              title: 'title',
              media: 'person.image',
            },
          },
        }),
      ],
      validation: (Rule) => Rule.unique(),
    }),
  ],

  preview: {
    select: {
      year: 'year',
    },
    prepare({year}) {
      return {
        title: year,
      }
    },
  },
})
