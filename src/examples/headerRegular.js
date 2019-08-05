import React from "react"
import { StaticQuery, graphql } from "gatsby"

const getSiteData = graphql`
  query AnotherQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`

const HeaderRegular = () => {
  return (
    <StaticQuery
      query={getSiteData}
      render={data => {
        console.log(data)

        return (
          <div>
            <h2>title: {data.site.siteMetadata.title}</h2>
            <h3>title: {data.site.siteMetadata.author}</h3>
          </div>
        )
      }}
    />
  )
}

export default HeaderRegular