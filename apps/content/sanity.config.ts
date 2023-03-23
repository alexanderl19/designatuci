import type {ConfigContext} from 'sanity'
import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

import groq from 'groq'

export default defineConfig({
  name: 'default',
  title: 'designatuci',

  projectId: '3cq2wema',
  dataset: 'production',

  plugins: [
    deskTool({
      structure: async (S, context: ConfigContext) => {
        const {getClient} = context
        const client = getClient({apiVersion: '2023-03-22'})

        const getBoardYearList = async (id: string) => {
          const query = groq`
            *[_type == "board" && _id == $boardId][0] {
              year,
              members[]{
                title,
                person->{
                  _id,
                  name
                }
              },
              interns[]{
                title,
                person->{
                  _id,
                  name
                }
              }
            }
          `
          const board = await client.fetch<{
            year: number
            members: {
              title: string
              person: {
                _id: string
                name: string
              }
            }[]
            interns: {
              title: string
              person: {
                _id: string
                name: string
              }
            }[]
          }>(query, {boardId: id})

          return S.list()
            .title(board.year + ' Board')
            .items([
              ...(board.members ?? []).map((member) =>
                S.documentListItem()
                  .title(member.person.name)
                  .schemaType('person')
                  .id(member.person._id)
              ),
              S.divider(),
              ...(board.interns ?? []).map((member) =>
                S.documentListItem()
                  .title(member.person.name)
                  .schemaType('person')
                  .id(member.person._id)
              ),
            ])
        }

        const getBoardYearItems = async () => {
          const query = groq`
            *[_type == "board"] | order(year desc) {
              _id,
              year
            }
          `
          const boardYears = await client.fetch<{_id: string; year: number}[]>(query)

          const listItems = boardYears.map(async ({_id, year}) =>
            S.listItem()
              .title(year + ' Board')
              .child(await getBoardYearList(_id))
          )
          return Promise.all(listItems)
        }

        return S.list()
          .title('Content')
          .items([
            S.listItem().title('Site Settings').child(),
            S.listItem().title('Resources Page').child(),
            S.listItem().title('About Page').child(),
            S.divider(),
            S.listItem()
              .title('People')
              .child(
                S.list()
                  .title('People')
                  .items([
                    S.listItem()
                      .title('All')
                      .child(
                        S.documentList()
                          .title('People')
                          .filter('_type == "person"')
                          .menuItems([...S.documentTypeList('person').getMenuItems()!])
                      ),
                    S.divider(),
                    ...(await getBoardYearItems()),
                  ])
              ),
            S.listItem()
              .title('Boards')
              .child(
                S.documentList()
                  .title('Boards')
                  .filter('_type == "board"')
                  .menuItems([...S.documentTypeList('board').getMenuItems()!])
              ),
            S.listItem()
              .title('Events')
              .child(
                S.documentList()
                  .title('Boards')
                  .filter('_type == "event"')
                  .menuItems([...S.documentTypeList('event').getMenuItems()!])
              ),
          ])
      },
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
