import path from 'path';

const blogPostPages = async ({ graphql, actions }) => {
  // Get a template for the post
  const postTemplate = path.resolve('./src/templates/Post.js');
  // Query all posts
  const { data } = await graphql(`
    query {
      posts: allSanityPosts {
        nodes {
          title
          slug {
            current
          }
        }
      }
    }
  `);
  // Loop over each post to create a page for that post
  data.posts.nodes.forEach((post) => {
    actions.createPage({
      path: `blog/${post.slug.current}`,
      component: postTemplate,
      context: {
        slug: post.slug.current,
        title: post.title,
      },
    });
  });
};

export async function createPages(params) {
  // Create blog posts dynamically
  await blogPostPages(params);
}
