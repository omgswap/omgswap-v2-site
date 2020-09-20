import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import Layout from '../../layouts'
import SEO from '../../components/seo'
import Ticker from '../../components/ticker'
import BG from '../../components/bg'
import { Button } from '../../components/button'
import Discord from '../../images/discord.inline.svg'
import IConnect from '../../images/icons/connect.svg'
import IAdd from '../../images/icons/add.svg'
import IEarn from '../../images/icons/earn.svg'

const StyledBody = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 4rem;
  margin-bottom: 4rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey2};
  @media (max-width: 375px) {
    margin-bottom: 2rem;
  }
`

const StyledTitle = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  will-change: transform;
  margin: 5rem 0 5rem 0;
  @media (max-width: 960px) {
    margin: 3rem 0 1rem 0;
  }
`

const StyledBodyTitle = styled.h1`
  color: ${({ theme }) => theme.colors.link};
  font-size: 64px;
  margin: 0.5rem 0 0.5rem 0;
  pointer-events: none;
  white-space: wrap;
  overflow-wrap: normal;
  max-width: 900px;
  font-weight: 600;
  text-align: center;
  font-family: 'Source Sans Pro', 'Times New Roman', serif;
  @media (max-width: 1024px) {
    margin: 0.5rem 0 0.5rem 0;
  }

  @media (max-width: 960px) {
    width: 100%;
    font-size: 4rem;
    line-height: 4.5rem;
    margin: 0.5rem 0 0.5rem 0;
    max-width: 600px;
  }
  @media (max-width: 375px) {
    width: 100%;
    margin: 0.5rem 0 0.5rem 0;
    font-weight: 400;
  }
`

const StyledBodyTitle2 = styled.h1`
  color: ${({ theme }) => theme.colors.link};
  font-size: 48px;
  margin: 0.5rem 0 0.5rem 0;
  pointer-events: none;
  white-space: wrap;
  overflow-wrap: normal;
  max-width: 900px;
  text-align: center;
  font-family: 'Source Sans Pro', 'Times New Roman', serif;
  @media (max-width: 1024px) {
    margin: 0.5rem 0 0.5rem 0;
  }

  @media (max-width: 960px) {
    width: 100%;
    font-size: 2rem;
    line-height: 2.5rem;
    margin: 0.5rem 0 0.5rem 0;
    max-width: 600px;
  }
  @media (max-width: 375px) {
    width: 100%;
    margin: 1rem 0 1rem 0;
    font-weight: 400;
  }
`

const StyledBodyTitle3 = styled.h2`
  color: ${({ theme }) => theme.colors.link};
  font-size: 30px;
  margin: 0.5rem 0 1rem 0;
  pointer-events: none;
  white-space: wrap;
  overflow-wrap: normal;
  max-width: 900px;
  text-align: center;
  font-family: 'Source Sans Pro', 'Times New Roman', serif;
  @media (max-width: 1024px) {
    margin: 0.5rem 0 0.5rem 0;
  }

  @media (max-width: 960px) {
    width: 100%;
    font-size: 1rem;
    line-height: 1.5rem;
    margin: 0.5rem 0 0.5rem 0;
    max-width: 600px;
  }
  @media (max-width: 375px) {
    width: 100%;
    margin: 0.5rem 0 0.5rem 0;
    font-weight: 400;
  }
`

const StyledSectionFlex = styled.div`
  padding: 4rem 0;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  /* max-width: 650px; */
  @media (max-width: 1024px) {
    padding: 1rem;
    margin-top: 0rem;
    flex-direction: ${({ wrapSmall }) => (!wrapSmall ? 'row' : 'column')};
  }
  @media (max-width: 960px) {
    padding: 1rem;
    margin-top: 0rem;
    width: 100%;
    max-width: 450px;
  }

  h2 {
    margin-bottom: 0.5rem;
  }
  p {
    margin-bottom: 0.5rem;
  }
`

const IndexPage = props => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          siteUrl
        }
      }
      unicornImage: file(relativePath: { eq: "trade-history.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      swap: file(relativePath: { eq: "swap.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      info: file(relativePath: { eq: "dex.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      coinex: file(relativePath: { eq: "coinex.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      socks: file(relativePath: { eq: "info.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout path={props.location.pathname}>
      <BG />
      <SEO
        title="OBOX | DFIX Holders Get pDAI Reward | Omega Staking Box"
        path={props.location.pathname}
        description={'Omega Protocol DeFi Index Asset DFIX Holder Get pDAI Reward, Omega Staking Box Application, DFIX Reward System, O-BOX, Prime DAI pDAI Reward'}
      />
      <StyledBody>
        <StyledTitle>
          <StyledBodyTitle>Ǒmega Protocol <br /><b> DeFi Index Asset</b> </StyledBodyTitle>
          <StyledBodyTitle2>From November 2020 Every Single DFIX Holder will Get a Reward from 2 Million Prime DAI (pDAI) Reward Fund</StyledBodyTitle2>
          <StyledBodyTitle3>Which will be distributed through smart contract for next 6 months.</StyledBodyTitle3>
          <span>
            <Button href="https://app.uniswap.org/#/swap?inputCurrency=0x88fbecfef7146242c18d26321b628e9fca6b76dd&outputCurrency=ETH" target="_blank" rel="noopener noreferrer">Buy DFIX</Button>
            <Button href="https://uniswap.info/pair/0x8fc5ECE957f122362fbF994Ac97B546389f0Dc00" target="_blank" rel="noopener noreferrer">DFIX Liquidity Pool</Button>
          </span>
        </StyledTitle>
        <SummarySection data={data} />
        <DeveloperSection data={data} />
      </StyledBody>
    </Layout>
  )
}

export default IndexPage

const StyledSectionTitle = styled.h1`
  color: ${({ theme }) => theme.colors.link};
  font-size: 48px;
  white-space: wrap;
  overflow-wrap: normal;
  max-width: 900px;
  text-align: center;
  font-family: 'Source Sans Pro', 'Inferi Normal', 'Times New Roman', serif;

  @media (max-width: 960px) {
    width: 100%;
    font-size: 2rem;
    line-height: 2.5rem;
    max-width: 600px;
    margin-top: 4rem;
  }
  @media (max-width: 375px) {
    width: 100%;
    font-weight: 400;
    margin-top: 4rem;
  }
`
const ColT = styled.div`
  flex: 0 0 33.33%;
  max-width: 33.33%;
  @media screen and (max-width: 900px) {
      flex: 0 0 100%;
      max-width: 100%;
    }
`

const CardFull = styled.div`
  margin: 20px;
  padding: 20px;
  color: ${({ theme }) => theme.textColor};
  background-color: ${({ theme }) => theme.cardBG};
  border: 1px solid ${({ theme }) => theme.colors.grey2};
  height: 100%;
  width: 100%;
    margin-right: 1rem;
    margin-bottom: 1rem;
    box-shadow: 0px 0px 1px rgba(0,0,0,0.05), 0px 4px 8px rgba(0,0,0,0.05), 0px 16px 24px rgba(0,0,0,0.05), 0px 24px 32px rgba(0,0,0,0.05);
    border-radius: 20px;
    overflow: hidden;
    position: relative;
    display: flex;
    flex-direction: column;
    transition: transform 0.3s ease;
    will-change: transform;
`

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 5rem;
  margin-bottom: 5rem;
  margin-left: 10%;
  margin-right: 10%;
  text-align: center;
  align-items: center;
  width: 100%;
  @media screen and (max-width: 960px) {
    margin: 0;
      }
`

const RowLeft = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 5rem;
  margin-bottom: 5rem;
  margin-left: 10%;
  margin-right: 10%;
  width: 100%;
  @media screen and (max-width: 960px) {
    margin: 0;
      }
`

const SummarySection = props => {
  return (
    <StyledSectionFlex>
    <RowLeft>
      <CardFull>
      <h1>
        <b> Omega Staking Box Application</b> DFIX Reward System is differ from O-BOX
      </h1>
      <p>O-BOX, build on top of Ethereum blockchain operated by smart contracts</p>
      <p>Details will be published at <a href="https://omgswap.in/obox"><b>O-BOX</b></a> </p>
      <p>DFI reward mechanism is a very simple but unique mechanism</p>
      <p>DFI will minted once only 30,000 DFI</p>
      <p>DFI supply will remain fix forever</p>
      <p>DFI is not a security, its tradable digital asset</p>
      <h2><Button href="https://uniswap.info/pair/0x8fc5ECE957f122362fbF994Ac97B546389f0Dc00" target="_blank" rel="noopener noreferrer"><b>DFIX Liquidity Pool</b></Button></h2>
      </CardFull>
      <CardFull>
      <h2>
      <p>Decimal: 18</p>
      <p>Name: DeFi Index</p>
      <p>Ticker: DFIX</p>
      <p>Supply: 30,000</p>
      <p>Contract: 0x88FBeCfeF7146242C18D26321b628E9FCa6B76dd</p>
      <p>Team allocation: 5%</p>
      <Button href="https://app.uniswap.org/#/swap?inputCurrency=0x88fbecfef7146242c18d26321b628e9fca6b76dd&outputCurrency=ETH" target="_blank" rel="noopener noreferrer"><b>Buy DFIX</b></Button>
      </h2>
      </CardFull>
    </RowLeft>
    </StyledSectionFlex>
  )
}

const DeveloperSection = () => {
  return (
    <>

      <StyledSectionFlex style={{ paddingBottom: '0px', paddingTop: '1rem' }}>
      <StyledSectionTitle>Get DFIX Rewards
       <p>
          <span>
          <Button href="https://omegaswap.com/" target="_blank" rel="noopener noreferrer">Use FlashSwap Full Liquidity</Button>
          </span></p>
     </StyledSectionTitle>
          <Row>
          <ColT>
                <img src={IConnect} alt="Connect" height="64"/>
                <h1>Connect</h1>
                <Button href="http://app.uniswap.org/" target="_blank" rel="noopener noreferrer"><b>Connect</b></Button>
                <p>
                Connect to a wallet (e.g. MetaMask)
                </p>
          </ColT>
          <ColT>
                <img src={IAdd} alt="Add" height="64"/>
                <h1>DFIX Pool</h1>
                <Button href="https://app.uniswap.org/#/swap?inputCurrency=0x88fbecfef7146242c18d26321b628e9fca6b76dd&outputCurrency=ETH" target="_blank" rel="noopener noreferrer"><b>Add Liquidity</b></Button>
                <p>
                  Add tokens liquidity pools
                </p>
          </ColT>
          <ColT>
                <img src={IEarn} alt="Earn" height="64"/>
                <h1>pDAI Reward</h1>
                <Button href="https://omgswap.com/obox" target="_blank" rel="noopener noreferrer"><b>Get Reward</b></Button>
                <p>
                  Claim pDAI for DFIX Holders
                </p>
          </ColT>
          </Row>
      </StyledSectionFlex>
    </>
  )
}
