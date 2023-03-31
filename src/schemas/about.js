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
      validation: Rule => Rule.required().warning('Must have a name!'),
    }),
    defineField({
      description: 'Short elevator pitch',
      name: 'elevatorPitch',
      title: 'ElevatorPitch',
      type: 'text',
      validation: Rule => Rule.min(1).max(200),
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
