import {DocumentTextIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const postType = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    }),
    defineField({
      name: 'excerpt',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'mainImage',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        }
      ]
    }),
    defineField({
      name: 'category',
      type: 'string',
      options: {
        list: [
          {title: 'Travel Guide', value: 'Travel Guide'},
          {title: 'Trip Ideas', value: 'Trip Ideas'},
          {title: 'Pilgrimage', value: 'Pilgrimage'},
          {title: 'Booking Tips', value: 'Booking Tips'},
          {title: 'Corporate', value: 'Corporate'},
          {title: 'Seasonal', value: 'Seasonal'},
        ],
      },
    }),
    defineField({
      name: 'readTime',
      type: 'string',
      title: 'Read Time',
      description: 'e.g. 5 min read',
    }),
    defineField({
      name: 'featured',
      type: 'boolean',
      title: 'Featured Post',
      initialValue: false,
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
    }),
    defineField({
      name: 'body',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'block',
        }),
        defineArrayMember({
          type: 'image',
          options: {hotspot: true},
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
