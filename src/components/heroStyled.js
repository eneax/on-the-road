import React from 'react'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'


const HeroStyled = ({ img, className, children, home}) => {
  return (
    <BackgroundImage 
      className={className}
      fluid={img} // query from graphql
      home={home} // BackgroundImage for homepage will be bigger than the others
    >
      {children}
    </BackgroundImage>
  )
}

export default styled(HeroStyled)`
  min-height: ${(props) => (
    props.home ? 'calc(100vh - 62px)' : '50vh'
  )};
  background: ${(props) => (
    props.home ? 'linear-gradient(rgba(63, 208, 212, 0.7), rgba(0, 0, 0, 0.7))' : 'none'
  )};
  background-position: center;
  background-size: cover;
  opacity: 1 !important;  /* otherwise there is no linear-gradient */
  display: flex;
  align-items: center;
  justify-content: center;
`
