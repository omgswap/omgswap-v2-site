import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from '.'
import SEO from '../components/seo'
import Sidebar from '../components/sidebarFAQ'

import BG from '../components/bg'

import '../styles/prism-github.css'

const GlobalStyle = createGlobalStyle`
  html {
    background-image: none;
    background-color: ${({ theme }) => theme.backgroundColor};
}
`

const StyledDocs = styled.div`
  display: grid;
  grid-template-columns: 320px 1fr;
  justify-content: space-between;
  padding: 0 2rem;
  padding-bottom: 4rem;
  margin-bottom: 4rem;
  padding-top: 2rem;

  border-bottom: 1px solid ${({ theme }) => theme.colors.grey2};
  border-top: 1px solid ${({ theme }) => theme.colors.grey2};

  @media (max-width: 960px) {
    flex-direction: column;
    grid-template-columns: 1fr;
    margin-top: 0rem;
  }
`

const StyledMDX = styled.div`
  min-width: 550px;
  max-width: 650px;
  padding: 0;
  margin-bottom: 3rem;
  a {
    color: ${({ theme }) => theme.colors.link};
  }

  figcaption {
    padding: 0.25rem;
    font-style: italic;
    color: ${({ theme }) => theme.colors.grey6};
    text-align: center;
  }
  @media (max-width: 960px) {
    min-width: 100%;
    max-width: 100%;
  }

  h1 {
    margin-top: 4rem;
  }
  h2 {
    margin-top: 2rem;
  }
  blockquote h1 {
    margin-top: unset;
    font-style: italic;
  }
`

const StyledPageTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
  /* align-items: center; */

  h1 {
    font-size: 2.5rem !important;
    margin-top: 0px !important;
  }

  a {
    color: ${({ theme }) => theme.colors.grey6};
    display: inherit;
    font-size: 0.825rem;
  }
`

const Docs = props => {

  return (
    <Layout path={props.location.pathname} isDocs={false}>
      <BG />
      <SEO title={props.pageContext.frontmatter.title} path={props.location.pathname} />
      <GlobalStyle />
      <StyledDocs id="docs-header">
        <StyledMDX>
          <StyledPageTitle>
            <h1>{props.pageContext.frontmatter.title}</h1>
          </StyledPageTitle>
          {props.children}
        </StyledMDX>
      </StyledDocs>
    </Layout>
  )
}

export default Docs
