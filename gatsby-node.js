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
}



/*

* query
query($slug: String!) {
  contentfulTour(slug: {eq:$slug}) {
    name
    price
    country
    days
    start(formatString: "dddd MMMM Do, YYYY")
    description{
      description
    }
    journey{
      day
      id
    }
    images{
      fluid{
        src
      }
    }
  }
}


* query variable
{
  "slug": "walk-japan" 
}

*/