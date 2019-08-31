const path = require('path')

exports.createPages = async({ graphql, actions }) => {
  const { createPage } = actions

  const { data } = await graphql(`
    query {
      tours: allContentfulTour {
        edges {
          node {
            slug
          }
        }
      }
      posts: allContentfulPost {
        edges {
          node {
            slug
          }
        }
      }
    }  
  `)

  data.tours.edges.forEach(({node}) => {
    createPage({
      path: `tours/${node.slug}`,
      component: path.resolve('./src/templates/tourTemplate.js'),
      context: {
        slug: node.slug,
      }
    })
  })

  data.posts.edges.forEach(({ node }) => {
    createPage({
      path: `blog/${node.slug}`,
      component: path.resolve('./src/templates/blogTemplate.js'),
      context: {
        slug: node.slug,
      }
    })
  })

  // amount of posts
  const posts = data.posts.edges
  // posts per page
  const postsPerPage = 5
  //how many pages
  const numPages = Math.ceil(posts.length / postsPerPage)
  // loop over the items in the array to create pages
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blogs` : `/blogs/${i + 1}`,
      component: path.resolve("./src/templates/blogListTemplate.js"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })
}
