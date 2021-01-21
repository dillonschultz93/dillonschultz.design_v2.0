export default {
  name: 'posts',
  title: 'Posts',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Title of the post',
    },
    {
      name: 'publishedDate',
      tilte: 'Published Date',
      type: 'date',
      options: {
        dateFormat: 'MM-DD-YYYY',
      },
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 100,
      },
    },
    {
      name: 'postContent',
      title: 'Post Content',
      type: 'array',
      of: [{ type: 'block' }, { type: 'image' }, { type: 'code' }],
    },
  ],
  preview: {
    select: {
      name: 'title',
      publishedDate: 'publishedDate',
    },
    prepare: ({ name, publishedDate }) => ({
      title: `${name} ${publishedDate ? `(${publishedDate})` : ''}`,
    }),
  },
};
