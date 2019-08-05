import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import img from '../images/connectBcg.jpeg'

const getImages = graphql`
  query ImagesQuery {
      fixed: file(relativePath: {eq: "defaultBcg.jpeg"}) {
        childImageSharp {
          fixed(width: 300, height: 400, grayscale: true) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      fluid: file(relativePath: {eq: "blogBcg.jpeg"}) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
  }
`

const ImagesQuery = () => {
  const data = useStaticQuery(getImages)
  console.log(data);

  return (
    <Wrapper>
      <article>
        <h3>Basic Image</h3>
        <img className='basic' src={img} alt=""/>
      </article>

      <article>
        <h3>Fixed Image - blur</h3>
        <Img fixed={data.fixed.childImageSharp.fixed} />
      </article>

      <article>
        <h3>Fluid Image - Svg</h3>
        <Img fluid={data.fluid.childImageSharp.fluid} />
      </article>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 80vw;
  margin: 0 auto 10rem auto;
  text-align: center;
  text-transform: capitalize;

  article {
    border: 1px solid red;
    padding: 1rem 0;
  }

  .basic {
    width: 100%;
  }

  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 1rem;
  }
`

export default ImagesQuery
