import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const Header = () => {
  // const {site:{siteMetadata}} = useStaticQuery(graphql``}
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `)
  // console.log(siteMetadata);
  console.log(data);

  return (
    <div>
      {/* <h1>title: {siteMetadata.title}</h1> */}
      <h1>title: {data.site.siteMetadata.title}</h1>
      {/* <h2>author: {siteMetadata.author}</h2> */}
      <h2>author: {data.site.siteMetadata.author}</h2>
    </div>
  )
}

export default Header
