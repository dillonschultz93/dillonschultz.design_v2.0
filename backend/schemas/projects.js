export default {
  name: 'projects',
  title: 'Projects',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Title of the project',
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'projectTags' }] }],
    },
    {
      name: 'link',
      Title: 'Link',
      type: 'url',
    },
  ],
  preview: {
    select: {
      title: 'title',
      tag0: 'tags.0.name',
      tag1: 'tags.1.name',
      tag2: 'tags.2.name',
    },
    prepare: ({ title }) => ({ title }),
  },
};
