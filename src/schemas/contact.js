import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'contact',
  title: 'Contact',
  type: 'document',
  fields: [
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: { type: 'author' },
    }),
    defineField({
      name: 'email',
      title: 'eMail',
      type: 'email',
      validation: Rule => Rule.required().min(1).max(80),
    }),
    defineField({
      name: 'facebook',
      title: 'Facebook',
      type: 'url',
      validation: Rule => Rule.required().min(8).max(200),
    }),
    defineField({
      name: 'github',
      title: 'Github',
      type: 'url',
      validation: Rule => Rule.required().min(8).max(200),
    }),
    defineField({
      name: 'Instagram',
      title: 'Instagram',
      type: 'url',
      validation: Rule => Rule.required().min(8).max(200),
    }),
    defineField({
      name: 'linkedin',
      title: 'LinkedIn',
      type: 'url',
      validation: Rule => Rule.required().min(8).max(200),
    }),
  ],
  preview: {
    select: {
      title: 'author.name',
      media: 'author.image',
    },
  },
})
