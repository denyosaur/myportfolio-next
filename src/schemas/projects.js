import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'projects',
  title: 'Projects',
  type: 'document',
  fields: [
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: { type: 'author' },
    }),
    defineField({
      description: 'Enter project name',
      name: 'projectName',
      title: 'ProjectName',
      type: 'string',
      validation: Rule => Rule.required().warning('Must have a project name!'),
    }),
    defineField({
      description: 'Enter project name',
      name: 'projectUrl',
      title: 'ProjectURL',
      type: 'url',
      validation: Rule => Rule.required().warning('Must have a project URL!'),
    }),
    defineField({
      description: 'Enter github repository',
      name: 'githubLink',
      title: 'GithubLink',
      type: 'url',
      validation: Rule => Rule.required().warning('Must have a github repository!'),
    }),
    defineField({
      description: 'Upload image of project',
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      description: 'More details about the project',
      name: 'projectDetails',
      title: 'ProjectDetails',
      type: 'text',
      validation: Rule => Rule.max(500).warning('500 characters only!'),
    }),
  ],
  preview: {
    select: {
      title: 'projectName',
      author: 'author.name',
      media: 'image'
    },
    prepare(selection) {
      const { author } = selection
      return { ...selection, subtitle: author && `by ${author}` }
    },
  },
})
