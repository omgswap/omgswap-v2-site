import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../layouts'
import SEO from '../components/seo'
import Ticker from '../components/ticker'
import BG from '../components/bg'
import MiniCard from '../components/minicard'
import Wizard from '../components/wizard'
import { Button } from '../components/button'
import Discord from '../images/discord.inline.svg'
import IConnect from '../images/icons/connect.svg'
import IAdd from '../images/icons/add.svg'
import IEarn from '../images/icons/earn.svg'
import Ava from '../images/partners/ava.svg'
import Gnosis from '../images/partners/gnosis.svg'
import Gnosissafe from '../images/partners/gnosis-safe.svg'
import Coinex from '../images/partners/coinex.png'
import Hotbit from '../images/partners/hotbit.png'
import Probit from '../images/partners/probit.png'
import Indoex from '../images/partners/indoex.png'
//import OMGSwap from '../images/partners/OMGSwap.png'

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
  font-size: 112px;
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
  font-size: 24px;
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

const StyledUnicornImage = styled(Img)`
  width: 100%;
  height: 100%;
  min-width: 450px;
  background-color: none;
  margin-top: 1rem;
  border-radius: 20px;
  box-shadow: ${({ theme }) => theme.shadows.huge};
  @media (max-width: 960px) {
    min-width: unset;
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
        title="Home"
        path={props.location.pathname}
        description={'Omega Protocol is decentralized finance (Open finance) refers to the crypto (digital) assets and smart contracts, protocols, and decentralized application (dApp) built on Ethereum and Binance Smart Chain'}
      />
      <StyledBody>
        <StyledTitle>
          <StyledBodyTitle>Ǒmega Protocol</StyledBodyTitle>
          <StyledBodyTitle2>Southeast Asian First DeFi Protocol Project</StyledBodyTitle2>
          <StyledBodyTitle3>Omega Protocol is decentralized finance (Open finance) refers to the crypto (digital) assets and
          smart contracts, protocols, and decentralized application (dApp) built on Ethereum and Binance Smart Chain.</StyledBodyTitle3>
          <span>
            <Button href="https://bapp.omgswap.com/" target="_blank" rel="noopener noreferrer">Binance OMGSwap bApp</Button>
            <Button href="https://app.omgswap.com/" target="_blank" rel="noopener noreferrer">Ethereum OMGSwap App</Button>
            <Button to="/" as={Link} outlined>
              Read the docs
            </Button>
          </span>
        </StyledTitle>
        <SummarySection data={data} />
        <DeveloperSection data={data} />
        <ProductsSection2 data={data} />
        <ProductsSection data={data} />
        <GoalSection />
      </StyledBody>
    </Layout>
  )
}

export default IndexPage

const StyledImgSection = styled.div`
  color: ${({ theme }) => theme.colors.link};
  position: relative;
  margin: 1rem 3rem;
  @media (max-width: 960px) {
    width: 100%;
    margin: 0;
    p {
      max-width: 450px;
    }
    h1 {
      max-width: 450px;
    }
  }
  p {
    line-height: 155%;
    margin-bottom: 2rem;
    max-width: 450px;
  }
  h1 {
    max-width: 450px;
    line-height: 1.3;
  }
  h2 {
    max-width: 450px;
    line-height: 1.3;
    margin-bottom: 1rem;
  }
`

const MiniNewInfo = styled(Link)`
  transform: rotate(4deg) scale(0.98);
  color: ${({ theme }) => theme.textColor};
  display: inline-block;
  height: 500px;

  transition: transform 0.3s ease;
  will-change: transform;
  :hover {
    transform: rotate(-2deg);
  }
  a {
    color: ${({ theme }) => theme.textColor};
  }

  @media (max-width: 960px) {
    position: relative;
    max-width: 450px;
    width: 100%;
    height: 100%;
    margin: 4rem 0;
  }
`

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
const ColS = styled.div`
  flex: 0 0 50%;
  max-width: 50%;
  @media screen and (max-width: 900px) {
      flex: 0 0 100%;
      max-width: 100%;
      }
`

const Card = styled.div`
  margin: 10px;
  padding: 10px;
  color: ${({ theme }) => theme.textColor};
  background-color: ${({ theme }) => theme.cardBG};
  border: 1px solid ${({ theme }) => theme.colors.grey2};
  height: 180px;
    max-width: 100%;
    min-width: 45%;
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

const SummarySection = props => {
  return (
    <StyledSectionFlex>
      <StyledImgSection>
        <MiniNewInfo to="/blog/launch-omgswap-v2/">
          <StyledUnicornImage fadeIn={false} fluid={props.data.unicornImage.childImageSharp.fluid} />
        </MiniNewInfo>
      </StyledImgSection>
      <StyledImgSection>
        <h1>
          <b>OMGSwap</b> is a fully decentralized protocol for automated LP based on Ethereum and Binance Smart Chain.
        </h1>

        <p>
          OMGSwap empowers developers, liquidity providers and traders to participate in a financial marketplace that is
          open and accessible to all.
        </p>

        <p>
          Omega Protocol Money (OPM), Prime DAI (DAI) is the primary form of collateral backing the Omega assets available
          in the OMGSwap and Omega DEX. Its stakers are entitled to fees generated by OPM, pDAI trades on ODEX and OMGSwap.
        </p>

        <Button as={Link} outlined to="/">
          Read more
        </Button>
      </StyledImgSection>
        <Row>
          <ColS>
            <Card>
              <h1>
                <b>Swap</b>
              </h1>
                <p>
                  Our Swap allows users to quickly and easily exchange one crypto asset for another and much lower GAS fees.
                </p>
            </Card>
          </ColS>
          <ColS>
            <Card>
              <h1>
                <b>Pool</b>
              </h1>
                <p>
                  Use OMGSwap pool with all supported ERC20 and BEP20 tokens to get constant passive income. Can create new pool for liquidity exposure by own control.
                </p>
            </Card>
          </ColS>
          <ColS>
            <Card>
              <h1>
                <b>Liquidity</b>
              </h1>
                <p>
                  Our pool is where only the users can easily add or remove liquidity hence liquidity is sorted out by the users itself.
                </p>
            </Card>
          </ColS>
          <ColS>
            <Card>
              <h1>
                <b>Interest</b>
              </h1>
                <p>
                  Daily interest to grow your cryptocurrency digital tokens.
                </p>
            </Card>
          </ColS>
        </Row>

    </StyledSectionFlex>
  )
}

const DeveloperSection = () => {
  return (
    <>
      <StyledSectionTitle>Build with OMGSwap</StyledSectionTitle>
      <StyledSectionFlex style={{ paddingBottom: '0px', paddingTop: '1rem' }}>
        <Wizard />
          <Row>
            <StyledSectionTitle style={{ paddingBottom: '0px', paddingTop: '1rem', width: '100%' }}>Connect with Omega Protocol</StyledSectionTitle>
          <ColT>
                <img src={IConnect} alt="Connect" height="64"/>
                <h1>Connect</h1>
                <Button href="https://app.omgswap.com/" target="_blank" rel="noopener noreferrer"><b>App</b></Button><Button href="https://bapp.omgswap.com/" target="_blank" rel="noopener noreferrer"><b>bApp</b></Button>
                <p>
                Connect to a wallet (e.g. MetaMask, Coinbase Wallet)
                </p>
          </ColT>
          <ColT>
                <img src={IAdd} alt="Add" height="64"/>
                <h1>Add Liquidity</h1>
                <Button href="https://app.omgswap.com/#/pool" target="_blank" rel="noopener noreferrer"><b>App</b></Button><Button href="https://bapp.omgswap.com/#/pool" target="_blank" rel="noopener noreferrer"><b>bApp</b></Button>
                <p>
                  Add tokens liquidity pools
                </p>
          </ColT>
          <ColT>
                <img src={IEarn} alt="Earn" height="64"/>
                <h1>Get Reward</h1>
                <Button href="https://app.omgswap.com/" target="_blank" rel="noopener noreferrer"><b>App</b></Button><Button href="https://bapp.omgswap.com/" target="_blank" rel="noopener noreferrer"><b>bApp</b></Button>
                <p>
                  Claim fees from the Omega
                </p>
          </ColT>
          </Row>
          <Row>
            <ColT>
              <Card>
                <h1>
                  <b>Secure</b>
                </h1>
                  <p>
                  OMGSwap is multiple and incremental security.
                  </p>
              </Card>
            </ColT>
            <ColT>
              <Card>
                <h1>
                  <b>Decentralized Finance</b>
                </h1>
                  <p>
                    DeFi is also called Open Finance. It is unlimited perform platform.
                  </p>
              </Card>
            </ColT>
            <ColT>
              <Card>
                <h1>
                  <b>Fast & Speed</b>
                </h1>
                  <p>
                    OMGSwap platform is light weight design, so it is working smooth.
                  </p>
              </Card>
            </ColT>
            <ColT>
              <Card>
                <h1>
                  <b>No Risk</b>
                </h1>
                  <p>
                    Pools tokens are stored cold wallet and save your time.
                  </p>
              </Card>
            </ColT>
            <ColT>
              <Card>
                <h1>
                  <b>Earnings</b>
                </h1>
                  <p>
                    Do not make any effort. Easy to make money with Omega pool.
                  </p>
              </Card>
            </ColT>
            <ColT>
              <Card>
                <h1>
                  <b>Smart Contract</b>
                </h1>
                  <p>
                    Pool is controlled by smart contracts can implement any trading.
                  </p>
              </Card>
            </ColT>
          </Row>
      </StyledSectionFlex>
    </>
  )
}

const ProductsSection2 = props => {
  return (
    <>
      <StyledSectionFlex style={{ paddingBottom: '0px' }}>
        <StyledGoal style={{ width: '100%' }}>
          <h1>Use Binance Smart Chain (BEP20) OMGSwap bApp</h1>
          <p>We build open tools and experimental products that interact with the Omega protocol.</p>
        </StyledGoal>
      </StyledSectionFlex>
      <StyledSectionFlex wrapSmall={false} style={{ paddingTop: '2rem' }}>
        <MiniCard
          href="https://bapp.omgswap.com/" target="_blank" rel="noopener noreferrer"
          image={props.data.swap.childImageSharp.fluid}
          desc={'OMGSwap bApp'}
          backgroundColor={'#DAA520'}
          color={'white'}
        />
        <MiniCard
          href="http://info.omgswap.link/" target="_blank" rel="noopener noreferrer"
          image={props.data.socks.childImageSharp.fluid}
          desc={'bApp Analytics'}
          backgroundColor={'#DAA520'}
          color={'white'}
        />
      </StyledSectionFlex>
    </>
  )
}

const ProductsSection = props => {
  return (
    <>
      <StyledSectionFlex style={{ paddingBottom: '0px' }}>
        <StyledGoal style={{ width: '100%' }}>
          <h1>Use Ethereum (ERC20) OMGSwap App</h1>
          <p>We build open tools and experimental products that interact with the Omega protocol.</p>
        </StyledGoal>
      </StyledSectionFlex>
      <StyledSectionFlex wrapSmall={false} style={{ paddingTop: '2rem' }}>
        <MiniCard
          href="https://app.omgswap.com/" target="_blank" rel="noopener noreferrer"
          image={props.data.swap.childImageSharp.fluid}
          desc={'OMGSwap App'}
          backgroundColor={'#009685'}
          color={'white'}
        />
        <MiniCard
          href="https://odex.link" target="_blank" rel="noopener noreferrer"
          image={props.data.info.childImageSharp.fluid}
          desc={'Omega Exchange'}
          backgroundColor={'#009685'}
          color={'white'}
        />
        <MiniCard
          href="https://omgswap.link/" target="_blank" rel="noopener noreferrer"
          image={props.data.socks.childImageSharp.fluid}
          desc={'App Analytics'}
          backgroundColor={'#009685'}
          color={'white'}
        />
      </StyledSectionFlex>
    </>
  )
}

const StyledGoal = styled.div`
  color: ${({ theme }) => theme.colors.link};
  border-radius: 0.5rem;
  p {
    line-height: 155%;
    margin-bottom: 2rem;
  }
  @media (max-width: 960px) {
    margin-top: 2rem;
    p {
      max-width: 100%;
    }
  }
`

const GoalSection = () => {
  return (
    <StyledSectionFlex>
      <Row>
    <StyledGoal style={{ width: '100%' }}>
      <h1>Partnership</h1>
      <p>Our exchange partnership</p>
    </StyledGoal>
        <ColT>
          <img src={Coinex} alt="Coinex" height="48"/>
        </ColT>
        <ColT>
          <img src={Hotbit} alt="Hotbit" height="48"/>
        </ColT>
        <ColT>
          <img src={Probit} alt="Probit" height="48"/>
        </ColT>
        <ColT>
          <img src={Indoex} alt="Indoex" height="48"/>
        </ColT>
        <ColT>
          <img src={OMGSwap} alt="OMGSwap" height="48"/>
        </ColT>
      </Row>
      <Row>
    <StyledGoal style={{ width: '100%' }}>
      <h1>Platform Partnership</h1>
      <p>Our platform partnership</p>
    </StyledGoal>
        <ColS>
          <h1>Deployment</h1>
          <p>Future Deployment with ❤️</p>
          <img src={Ava} alt="Ava" height="96"/>
        </ColS>
        <ColS>
          <h1>Wallet</h1>
          <p>Powered by</p>
          <p><img src={Gnosis} alt="Gnosis" height="32"/></p>
          <p>Secured by</p>
          <p><img src={Gnosissafe} alt="Gnosissafe" height="32"/></p>
        </ColS>
      </Row>
    </StyledSectionFlex>
  )
}
