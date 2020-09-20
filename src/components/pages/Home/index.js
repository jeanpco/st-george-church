import React, { Fragment } from 'react'
import SliderSection from '../../SliderSection/SliderSection'
import PropTypes from 'prop-types'
import Text from '../../Utilities/Text'
import Title from '../../Utilities/Title'
import Quote from '../../Quote'
import { Tablet, Desktop } from '../../Utilities/Media'
import {
  HomeIntroContainer,
  HomeIntroContentContainer,
  HomeIntroTitle,
  HomeIntroText,
  DesktopIntroContainer,
} from './style'
import LocalizedLink from '../../LocalizedLink'
import { WidthLimiterContainer } from '../../Layout/styles'
import Img from 'gatsby-image'

const IndexLayout = ({ data }) => {
  const homePageQuery = data.homePage.nodes[0].data

  const homeIntroGraphic = homePageQuery?.intro_graphic?.url
    ? homePageQuery.intro_graphic.url
    : ''

  const homeIntroTitle = homePageQuery?.intro_title?.text
    ? homePageQuery.intro_title.text
    : ''
  const homeIntroText = homePageQuery?.intro_text
    ? homePageQuery.intro_text
    : ''
  const homeIntroLink = homePageQuery?.intro_link
    ? homePageQuery.intro_link
    : ''

  const quoteText = homePageQuery?.home_quote?.document?.data?.quote_text
    ? homePageQuery.home_quote.document.data.quote_text
    : ''

  const quoteGraphic = homePageQuery?.home_quote?.document?.data?.quote_graphic
    ?.url
    ? homePageQuery.home_quote.document.data.quote_graphic.url
    : ''

  return (
    <Fragment>
      <Tablet>
        <SliderSection imgLength={homePageQuery.body[0].items.length}>
          {homePageQuery.body[0].items?.length > 0
            ? homePageQuery.body[0].items.map((img) => {
                const sliderImage =
                  img.slider_img.localFile.childImageSharp.fluid
                return (
                  <Img
                    fluid={sliderImage}
                    key={img.slider_img.localFile.childImageSharp.id}
                  />
                )
              })
            : ''}
        </SliderSection>
        <HomeIntroContainer>
          <img src={homeIntroGraphic} alt="home__intro-graphic" />

          <HomeIntroContentContainer>
            <HomeIntroTitle>
              <Title as="h3" type="heading2">
                {homeIntroTitle}
              </Title>
            </HomeIntroTitle>
            <HomeIntroText>
              <Text as="p" type="smallText700">
                {homeIntroText}
              </Text>
            </HomeIntroText>
          </HomeIntroContentContainer>
          <Text as="p" type="smallText700">
            <LocalizedLink to="/" className="Home__Intro-link">
              {homeIntroLink}
            </LocalizedLink>
          </Text>
        </HomeIntroContainer>
        <Quote
          query={{
            text: quoteText,
            graphic: quoteGraphic,
          }}
        />
      </Tablet>
      <Desktop>
        <WidthLimiterContainer>
          <DesktopIntroContainer>
            <HomeIntroContainer>
              <img
                src={homeIntroGraphic}
                alt="home intro graphic"
                className="Home__Intro-Graphic"
              />

              <HomeIntroContentContainer>
                <HomeIntroTitle>
                  <Title as="h3" type="heading2">
                    {homeIntroTitle}
                  </Title>
                </HomeIntroTitle>
                <HomeIntroText>
                  <Text as="p" type="smallText700">
                    {homeIntroText}
                  </Text>
                </HomeIntroText>
              </HomeIntroContentContainer>
              <Text as="p" type="smallText700">
                <LocalizedLink to="/" className="Home__Intro-link">
                  {homeIntroLink}
                </LocalizedLink>
              </Text>
            </HomeIntroContainer>
            <div>
              <SliderSection imgLength={homePageQuery.body[0].items.length}>
                {homePageQuery.body[1].items?.length > 0
                  ? homePageQuery.body[1].items.map((img) => {
                      const sliderImage =
                        img.slider_img.localFile.childImageSharp.fluid
                      return (
                        <Img
                          fluid={sliderImage}
                          key={img.slider_img.localFile.childImageSharp.id}
                        />
                      )
                    })
                  : ''}
              </SliderSection>
            </div>
          </DesktopIntroContainer>
        </WidthLimiterContainer>
        <Quote
          query={{
            text: quoteText,
            graphic: quoteGraphic,
          }}
        />
      </Desktop>
    </Fragment>
  )
}

IndexLayout.propTypes = {
  data: PropTypes.object,
}
export default IndexLayout
