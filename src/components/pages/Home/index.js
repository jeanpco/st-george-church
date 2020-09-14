import React, { Fragment } from 'react'
import SliderSection from '../../SliderSection/SliderSection'
import PropTypes from 'prop-types'
import LocaleContext from '../../../context/LocaleProvider'
import Text from '../../Utilities/Text'
import Title from '../../Utilities/Title'
import Quote from '../../Quote'
import AnchorList from '../../AnchorList'
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

const IndexLayout = ({ data }) => {
  const lang = React.useContext(LocaleContext)
  const i18n = lang.i18n[lang.locale]

  const HomePageData = data.homepage.nodes
    .filter((node) => node.locale.toLowerCase() === i18n.locale)
    .map((r) => r.metadata)

  const homePage = HomePageData[0]

  const homeIntroGraphic = homePage?.intro_graphic?.local?.publicURL
    ? homePage.intro_graphic.local.publicURL
    : ''

  const homeIntroTitle = homePage?.intro_title ? homePage.intro_title : ''
  const homeIntroText = homePage?.intro_text ? homePage.intro_text : ''
  const homeIntroLink = homePage?.intro_link ? homePage.intro_link : ''

  const quoteText = data?.homePagequote?.nodes[0]?.metadata?.quote
    ? data.homePagequote.nodes[0].metadata.quote
    : ''

  const quoteGraphic = data?.homePagequote?.nodes[0]?.metadata?.quote_graphic
    ?.local?.publicURL
    ? data.homePagequote.nodes[0].metadata.quote_graphic.local.publicURL
    : ''

  const anchorTitle = data?.anchor?.nodes[0]?.metadata?.anchor_title
    ? data.anchor.nodes[0].metadata.anchor_title
    : ''

  const ministries = data.anchor.nodes[0].metadata.youth_ministries

  const anchorLinks = data?.anchor?.nodes[0]?.metadata?.anchor_list
    ? data.anchor.nodes[0].metadata.anchor_list
    : ''

  const images = []
  homePage?.slider_images
    ? homePage.slider_images.map((info) => {
        Object.values(info).map((img) => {
          images.push(img.url)
        })
      })
    : ''

  const imagesMob = []
  homePage?.slider_image_mob
    ? homePage.slider_image_mob.map((info) => {
        Object.values(info).map((img) => {
          imagesMob.push(img.url)
        })
      })
    : ''

  return (
    <Fragment>
      <Tablet>
        <SliderSection imgLength={images.length}>
          {imagesMob?.length > 0
            ? imagesMob.map((img, index) => {
                return <img key={index} src={img} alt="slider-images" />
              })
            : ''}
        </SliderSection>
        <HomeIntroContainer>
          <img src={homeIntroGraphic} alt="home__intro-graphic" />

          <HomeIntroContentContainer>
            <HomeIntroTitle>
              <Title as="h1" type="heading1">
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
        <AnchorList
          anchorQuery={{
            title: anchorTitle,
            links: anchorLinks,
            ministries: ministries,
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
              <SliderSection imgLength={images.length}>
                {images?.length > 0
                  ? images.map((img, index) => {
                      return <img src={img} alt="slider images" key={index} />
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
        <AnchorList
          anchorQuery={{
            title: anchorTitle,
            links: anchorLinks,
            ministries: ministries,
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
