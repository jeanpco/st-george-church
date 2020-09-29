import React, { Fragment } from 'react'
import SliderContent from '../../HomeIntroSlider'
import Galery from '../../Gallery'
import PropTypes from 'prop-types'
import Contact from '../../Contact'
import Text from '../../Utilities/Text'
import Title from '../../Utilities/Title'
import Quote from '../../Quote'
import AnchorList from '../../AnchorList'
import { Tablet, Desktop } from '../../Utilities/Media'
import {
  HomePageContainer,
  HomeIntroContainer,
  HomeIntroContentContainer,
  HomeIntroTitle,
  HomeIntroText,
  DesktopIntroContainer,
} from './style'
import LocalizedLink from '../../LocalizedLink'
import { WidthLimiterContainer } from '../../Layout/styles'
import Img from 'gatsby-image'
import AnimatedImage from '../../AnimatedImage'
import Fade from 'react-reveal/Fade'

const IndexLayout = ({ data }) => {
  const homePageQuery = data?.homePage?.data

  const photoGalleryTitle = homePageQuery?.photo_gallery?.document?.data
    ?.gallery_title?.text
    ? homePageQuery?.photo_gallery_section?.document?.data?.gallery_title?.text
    : ''

  const photoGallerySliderContent =
    homePageQuery?.photo_gallery_section?.document?.data?.body?.[0]?.items

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

  const ministriesSectionTitle = homePageQuery?.ministries_section?.document
    ?.data?.anchor_title
    ? homePageQuery.ministries_section.document.data.anchor_title.text
    : ''

  const ministriesLinks = homePageQuery?.ministries_section?.document?.data
    ?.body[0]?.items
    ? homePageQuery.ministries_section.document.data.body[0].items
    : ''

  const ministries = homePageQuery?.ministries_section?.document?.data
    ?.body?.[1]?.items
    ? homePageQuery.ministries_section.document.data.body[1].items
    : ''

  const ministriesData = homePageQuery?.ministries_section?.document?.data

  return (
    <HomePageContainer>
      <Tablet>
        {homePageQuery?.body[0].items.length > 0 ? (
          <SliderContent
            slidesToShow={1}
            slidesToScroll={1}
            autoplay={true}
            imgLength={homePageQuery.body[0].items.length}
          >
            {homePageQuery.body[0].items?.length > 0
              ? homePageQuery.body[0].items.map((img, index) => {
                  const sliderImage = img?.slider_img?.localFile
                    ?.childImageSharp?.fluid
                    ? img.slider_img.localFile.childImageSharp.fluid
                    : ''
                  return (
                    <AnimatedImage key={index}>
                      <Img fluid={sliderImage} />
                    </AnimatedImage>
                  )
                })
              : ''}
          </SliderContent>
        ) : (
          ''
        )}
        <HomeIntroContainer>
          {homeIntroGraphic ? (
            <img src={homeIntroGraphic} alt="home__intro-graphic" />
          ) : (
            ''
          )}

          <HomeIntroContentContainer>
            <HomeIntroTitle>
              {homeIntroTitle ? (
                <Title as="h1" type="heading1">
                  {homeIntroTitle}
                </Title>
              ) : (
                ''
              )}
            </HomeIntroTitle>
            <HomeIntroText>
              {homeIntroText ? (
                <Text as="p" type="smallText700">
                  {homeIntroText}
                </Text>
              ) : (
                ''
              )}
            </HomeIntroText>
          </HomeIntroContentContainer>
          <Text as="p" type="smallText700">
            {homeIntroLink ? (
              <LocalizedLink to="/" className="Home__Intro-link">
                {homeIntroLink}
              </LocalizedLink>
            ) : (
              ''
            )}
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
            title: ministriesSectionTitle,
            links: ministriesLinks,
            ministries: ministries,
            ministriesData: ministriesData,
          }}
        />
        <Galery
          query={{
            title: photoGalleryTitle,
            content: photoGallerySliderContent,
          }}
        />
        <Contact />
      </Tablet>
      <Desktop>
        <WidthLimiterContainer className="HomePage__WidthLimiter">
          <DesktopIntroContainer>
            <HomeIntroContainer>
              {homeIntroGraphic ? (
                <img
                  src={homeIntroGraphic}
                  alt="home intro graphic"
                  className="Home__Intro-Graphic"
                />
              ) : (
                ''
              )}

              <HomeIntroContentContainer>
                <HomeIntroTitle>
                  {homeIntroTitle ? (
                    <Title as="h1" type="heading1">
                      {homeIntroTitle}
                    </Title>
                  ) : (
                    ' '
                  )}
                </HomeIntroTitle>
                <HomeIntroText>
                  {homeIntroText ? (
                    <Text as="p" type="smallText700">
                      {homeIntroText}
                    </Text>
                  ) : (
                    ''
                  )}
                </HomeIntroText>
              </HomeIntroContentContainer>
              <Text as="p" type="smallText700">
                {homeIntroLink ? (
                  <LocalizedLink to="/" className="Home__Intro-link">
                    {homeIntroLink}
                  </LocalizedLink>
                ) : (
                  ''
                )}
              </Text>
            </HomeIntroContainer>

            <div style={{ width: '50%' }}>
              {homePageQuery.body[0].items.length > 0 ? (
                <SliderContent
                  slidesToShow={1}
                  slidesToScroll={1}
                  autoplay={true}
                  imgLength={homePageQuery.body[0].items.length}
                >
                  {homePageQuery.body[1].items?.length > 0
                    ? homePageQuery.body[1].items.map((img, index) => {
                        const sliderImage = img?.slider_img?.localFile
                          ?.childImageSharp?.fluid
                          ? img.slider_img.localFile.childImageSharp.fluid
                          : ''

                        return (
                          <Fragment
                            key={
                              img.slider_img.localFile.childImageSharp.id
                                ? img.slider_img.localFile.childImageSharp.id
                                : index
                            }
                          >
                            {sliderImage ? <Img fluid={sliderImage} /> : ''}
                          </Fragment>
                        )
                      })
                    : ''}
                </SliderContent>
              ) : (
                ''
              )}
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
            title: ministriesSectionTitle,
            links: ministriesLinks,
            ministries: ministries,
            ministriesData: ministriesData,
          }}
        />
        <Galery
          query={{
            title: photoGalleryTitle,
            content: photoGallerySliderContent,
          }}
        />
        <Contact />
      </Desktop>
    </HomePageContainer>
  )
}

IndexLayout.propTypes = {
  data: PropTypes.object,
}
export default IndexLayout