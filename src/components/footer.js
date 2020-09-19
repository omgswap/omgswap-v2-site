import { Link } from 'gatsby'
import React, { useState } from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import Uni from '../images/uni.inline.svg'
import Wordmark from '../images/wordmark.inline.svg'
// import { ThemeManagerContext } from '../styles/themeManager'

function Dropdown(props) {
  const items = props.links.map(node => {
    const title = node.name
    return (
      <StyledFooterLink key={node.name}>
        {node.link.split('.').slice(-1)[0] === 'pdf' ? (
          <a href={node.link} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        ) : node.link.split('/')[0] === '' ? (
          <Link to={node.link}>{title}</Link>
        ) : (
          <a href={node.link}>{title}</a>
        )}
      </StyledFooterLink>
    )
  })
  return <StyledFooterLinkSection>{items}</StyledFooterLinkSection>
}

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.link};
  position: relative;
  padding: 3rem;
  background-color: #0A0D0D;

  @media (max-width: 960px) {
    margin-bottom: 2rem;
    flex-direction: column;
    padding: 1rem;
  }
`

const StyledSection = styled.section`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  @media (max-width: 960px) {
    flex-direction: column;
    justify-content: flex-start;
    margin-bottom: 0em;
  }
`

const StyledFooterSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0;
  @media (max-width: 960px) {
    padding-left: 0rem;
    margin-bottom: 0rem;
  }
`

const StyledFooterSectionNav = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0;
  padding-left: 5rem;
  @media (max-width: 960px) {
    padding-left: 0rem;
    margin-bottom: 0rem;
    display: none;
  }
`

const StyledFooterLinkSection = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0;
`

const StyledFooterLink = styled.li`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  text-decoration: none;
  margin: 0;
  padding: 0;
  margin-bottom: 1rem;
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.link};
  }
  :hover {
    a {
      text-decoration: none;
    }
  }
`

const Commit = styled.div``

const Footer = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          commit
          repository
          menulinks {
            name
            sublinks {
              description
              name
              link
            }
          }
          title
        }
      }
    }
  `)

  // const themeContext = useContext(ThemeManagerContext)

  return (
    <StyledFooter>
      <StyledSection>
        <StyledFooterSection>
          <EmailSection />
          <p>© 2018 - 2020 OMGSWAP.IN & Ǒmega Protocol Ltd.</p>
 <StyledGoal style={{ width: '100%' }}>
<RiskDisclaimer />
 </StyledGoal>

          {/* <div>
            <label>
              <input type="checkbox" onChange={() => themeContext.toggleDark()} checked={themeContext.isDark} /> Dark
              mode
            </label>
          </div> */}
        </StyledFooterSection>
      </StyledSection>
      <StyledSection>
        {data.site.siteMetadata.menulinks.map(item => {
          return (
            <StyledFooterSectionNav key={item.name}>
              <h4 style={{ fontWeight: 400, marginBottom: '1rem' }}>{item.name}</h4>
              <Dropdown links={item.sublinks} />
             </StyledFooterSectionNav>
          )

        })}

      </StyledSection>
    </StyledFooter>

  )
}
export default Footer
const EmailRow = styled.form`
  display: flex;
  flex-direction: row;
`

const InputButton = styled.input`
  padding: 0.25rem 0.75rem;
  background-color: ${({ theme }) => theme.colors.link};
  text-decoration: none;
  color: ${({ theme }) => theme.invertedTextColor};
  border-radius: 12px;
  margin-right: 0.5rem;
  display: inline-block;
  transform: scale(0.98);
  transition: transform 0.25s ease;
  box-sizing: border-box;
  font-weight: 400;
  border: none;

  :hover {
    transform: scale(1);
    cursor: pointer;
  }
  @media (max-width: 960px) {
    margin-right: 0.5rem;
    text-align: center;
    text-decoration: none;
    font-size: 0.825rem;
    padding: 0.25rem 1rem;
  }

  outline-color: transparent;
  outline-style: none;
`

const StyledInput = styled.input`
  border-radius: 8px;
  margin-right: 10px;
  box-shadow: none;
  background-image: none;
  background-color: transparent;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  border: 1px solid ${({ theme }) => theme.chaliceGray};
  max-width: 280px;

  padding: 4px 0 4px 10px;

  :focus {
    outline-color: transparent;
    outline-style: none;
    border: 1px solid ${({ theme }) => theme.colors.link};
  }
`

const StyledUni = styled(Uni)`
  path {
    fill: ${({ theme }) => theme.colors.link};
  }
  margin: 0;
  width: 42px;
  height: 42px;
  margin-right: 0.35rem;
  margin-top: 4px;
  transform: rotate(0deg);
  transition: transform 0.2s linear;
  :hover {
    transform: rotate(-10deg);
  }
`

const StyledWordmark = styled(Wordmark)`
  path {
    fill: ${({ theme }) => theme.colors.link};
  }
  margin: 0;
  margin-top: 6px;
  /* height: 23px; */
  width: 125px;
`

const StyledGoal = styled.div`
  color: ${({ theme }) => theme.colors.link};
  p {
    margin-bottom: 0.5rem;
    font-weight: 400;
  }
`

const EmailSection = () => {
  const [email, setEmail] = useState('')

  return (
    <StyledGoal style={{ width: '100%' }}>
    <StyledUni />

    <StyledWordmark />
      <p>Southeast Asian First DeFi Protocol Project</p>
      <p>Address: 71-75 Shelton Street, London, Greater London, United Kingdom, WC2H 9JQ</p>
      <p>Support: <a href="mailto:info@omgswap.in" target="_blank" rel="noopener noreferrer">info@omgswap.in</a></p>
      <p>UK Company Registered Number: <a href="https://beta.companieshouse.gov.uk/company/12855720" target="_blank" rel="noopener noreferrer">12855720</a></p>
    </StyledGoal>

    )
  }
const RiskDisclaimer = () => {
 return (
<p>
                Risk Disclaimer: Cryptocurrency asset is a kind of innovative investment product, with very volatile price. Established to provide convenience for all - new to old, ǑmegaSwap  & Ǒmega Protocol Ltd. only serves as a neutral trading platform. Please make accute judgement of your investment capability and make investment decision. OmegaSwap is strictly suggesting to the citizens of Bangladesh, Pakistan, Srilanka and USA not to invest in QPay ecosystem & any of its concern. OmegaSwap is a open source platform. Which is not a custodial service for assets. Trading access to or holding positions on ǑmegaSwap  & Ǒmega Protocol Ltd. is prohibited for any person that is located in or a resident of the United States of America, Québec (Canada), Cuba, Crimea and Sevastopol, Iran, Syria, North Korea, Sudan, or any other jurisdiction where the services offered by ǑmegaSwap  & Ǒmega Protocol Ltd. are restricted. If it is determined that any ǑmegaSwap  & Ǒmega Protocol Ltd. trading participant has given false representations as to their location or place of residence, ǑmegaSwap  & Ǒmega Protocol Ltd. reserves the right to close any of their accounts immediately and to liquidate any open positions. This material should not be the basis for making investment decisions, nor be construed as a recommendation to engage in investment transactions, and is not related to the provision of advisory services regarding investment, tax, legal, financial, accounting, consulting or any other related services, nor is a recommendation being provided to buy, sell or purchase any good or product. Any views expressed on ǑmegaSwap  & Ǒmega Protocol Ltd. Research reports are the personal views of the authors. ǑmegaSwap  & Ǒmega Protocol Ltd. (or any affiliated entity) has not been involved in producing this report and the views contained in the report may differ from the views or opinions of ǑmegaSwap  & Ǒmega Protocol Ltd.
                * GnoSIS Web & GnoSIS Safe logo, trademark  belongs to GnoSIS. 
                * AVA Labs logo, trademark belongs to AVA Labs Inc.
              </p>
)
}
