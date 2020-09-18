import React, { useState } from 'react'
// import Img from 'gatsby-image'
// import { Link } from 'gatsby'
import InlineCard from './inlineCard'

import styled from 'styled-components'

const links = [
  {
    name: 'Developers',
    sublinks: [
      {
        title: 'Getting started with the SDK',
        link: '/',
        description: 'A step-by-step guide to getting started building interfaces with OMGSwap.',
        tag: 'tutorial',
      },
      {
        title: 'Smart contract development',
        link: '//',
        description: 'Simplify the process of integrating OMGSwap into your project.',
        tag: 'reference',
      },
      {
        title: 'Introduction to Flash Swaps',
        link: '/',
        description: 'Withdraw the reserves of any ERC20 token on OMGSwap and execute arbitrary logic.',
        tag: 'guide',
      },
      {
        title: 'Introduction to Oracles',
        link: '/',
        description: 'Highly decentralized, manipulation-resistant, on-chain price feeds.',
      }
    ]
  },
  {
    name: 'Traders',
    sublinks: [
      {
        title: 'Using the interface',
        link: '/',
        description: 'The comprehensive web app user guide.',
        tag: 'tutorial'
      },
      {
        title: 'Glossary',
        link: '/',
        description: 'An overview of the terms used in these docs and on the interface',
        tag: 'reference'
      },
      {
        title: 'Understanding prices',
        link: '/',
        description: 'How the interface calculates prices for swaps.',
        tag: 'guide'
      }
    ]
  },
  {
    name: 'Liquidity',
    sublinks: [
      {
        title: 'Anatomy of a OMGSwap Pool',
        link: '/',
        description: 'An overview of what a OMGSwap liquidity pool.'
      },
      {
        title: 'Understanding Liquidity Returns',
        link: '/',
        description: 'Udnerstand the economics of your returns.'
      }
    ]
  },
  {
    name: 'Tokens',
    sublinks: [
      {
        title: 'Core Concepts',
        link: '/',
        description: 'A high level technical overview of the OMGSwap protocol.'
      }
    ]
  }
]

const StyledWizard = styled.div`
  color: ${({ theme, outlined }) => (outlined ? theme.colors.link : theme.textColor)};
  width: 100%;
  max-width: 900px;
  /* border: 1px solid ${({ theme }) => theme.colors.grey2}; */
  border-radius: 20px;
  /* overflow: hidden; */
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 1.5rem;

  @media (max-width: 960px) {
    width: 100%;
    max-width: 450px;
    margin: 1rem 0;
    /* height: ${({ small }) => !small && '200px'}; */
    /* height: 200px; */
  }
`

const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  /* padding: 1.5rem; */
  /* overflow-x: scroll;
  overflow-y: visible;
  *::-webkit-scrollbar {
    display: none;
  } */
`

const Wizard = () => {
  const [currentCategory] = useState('Developers')

  return (
    <StyledWizard>
      <CardWrapper>
        {links
          .filter(category => {
            return category.name === currentCategory
          })
          .map(category => {
            return category.sublinks.map((sublink, i) => {
              return (
                <InlineCard
                  key={i}
                  title={sublink.title}
                  desc={sublink.description}
                  to={sublink.link}
                  tag={sublink.tag}
                  icon={sublink.icon}
                />
              )
            })
          })}
      </CardWrapper>
    </StyledWizard>
  )
}

export default Wizard
