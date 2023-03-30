import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: { type: 'author' },
    }),
    defineField({
      description: 'More details about you',
      name: 'about',
      title: 'About',
      type: 'text',
    }),
    defineField({
      description: 'Enter resume URL here',
      name: 'resumeLink',
      title: 'ResumeLink',
      type: 'url',
    }),
    defineField({
      description: 'Enter your skills here',
      name: 'skills',
      title: 'Skills',
      type: 'array',
      of: [{ type: 'string' }],
    }),
  ],
  preview: {
    select: {
      title: 'author.name',
      media: 'author.image',
    },
  },
})
