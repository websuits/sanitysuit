import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'menu',
  title: 'Menu',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'url',
      title: 'Url',
      type: 'string',
    }),
    defineField({
      name: 'newTab',
      title: 'Open in a new tab ?',
      type: 'string',
      initialValue: '1',
      options: {
        list: [
          { title: 'Yes', value: '1' },
          { title: 'No', value: '0' },
        ],
        layout: 'radio'
      }
    }),
    defineField({
      name: 'children',
      title: 'Child Menu Items',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
          }),
          defineField({
            name: 'url',
            title: 'Url',
            type: 'string',
          }),
          defineField({
            name: 'newTab',
            title: 'Open in a new tab?',
            type: 'string',
            initialValue: '1',
            options: {
              list: [
                { title: 'Yes', value: '1' },
                { title: 'No', value: '0' },
              ],
              layout: 'radio'
            }
          }),
        ]
      }]
    }),
  ],
})
