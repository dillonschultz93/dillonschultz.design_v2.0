export default {
  name: 'projectTags',
  title: 'Project Tags',
  type: 'document',
  fields: [
    {
      name: 'tag',
      title: 'Tag',
      type: 'string',
      description: 'Name of the project tag',
    },
  ],
  preview: {
    select: {
      name: 'tag',
    },
    prepare: ({ name }) => ({
      title: name,
    }),
  },
};
