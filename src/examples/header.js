import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const getSiteData = graphql`
  query FirstQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`

const Header = () => {
  // const {site:{siteMetadata}} = useStaticQuery(graphql``}
  const data = useStaticQuery(getSiteData)
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
