import React from 'react'
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

const IndexLayout = ({ data }) => {
  const homePageQuery = data.homePage.nodes[0].data

  const photoGalleryTitle = homePageQuery?.photo_gallery_section?.document?.data
    ?.gallery_title?.text
    ? homePageQuery.photo_gallery_section.document.data.gallery_title.text
    : ''

  const photoGallerySliderContent =
    homePageQuery.photo_gallery_section.document.data.body[0].items

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

  const ministries = homePageQuery?.ministries_section?.document?.data?.body[1]
    ?.items
    ? homePageQuery.ministries_section.document.data.body[1].items
    : ''

  const contactTitle = homePageQuery?.contact.document?.data?.contact_title
    ?.text
    ? homePageQuery.contact.document.data.contact_title.text
    : ''

  const contactContent = homePageQuery?.contact.document?.data?.body[0]?.items
    ? homePageQuery.contact.document.data.body[0].items
    : ''

  const contactFlyoutTitle = homePageQuery?.contact?.document?.data
    ?.contact_flyout_title?.text
    ? homePageQuery.contact.document.data.contact_flyout_title.text
    : ''

  const contactFlyoutAddress = homePageQuery?.contact?.document?.data
    ?.contact_flyout_address
    ? homePageQuery.contact.document.data.contact_flyout_address
    : ''

  const contactFlyoutNumber = homePageQuery?.contact?.document?.data
    ?.contact_flyout_number
    ? homePageQuery.contact.document.data.contact_flyout_number
    : ''

  const contactFormTitle = homePageQuery?.contact?.document?.data
    ?.contact_form_title
    ? homePageQuery.contact.document.data.contact_form_title
    : ''

  console.log(contactFormTitle)

  return (
    <HomePageContainer>
      <Tablet>
        <SliderContent
          slidesToShow={1}
          slidesToScroll={1}
          autoplay={true}
          imgLength={homePageQuery.body[0].items.length}
        >
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
        </SliderContent>
        <HomeIntroContainer>
          <img src={homeIntroGraphic} alt="home__intro-graphic" />
          <HomeIntroContentContainer>
            <HomeIntroTitle>
              <Title as="h1" type="heading1">
                {homeIntroTitle ? homeIntroTitle : ''}
              </Title>
            </HomeIntroTitle>
            <HomeIntroText>
              <Text as="p" type="smallText700">
                {homeIntroText ? homeIntroText : ''}
              </Text>
            </HomeIntroText>
          </HomeIntroContentContainer>
          <Text as="p" type="smallText700">
            <LocalizedLink to="/" className="Home__Intro-link">
              {homeIntroLink ? homeIntroLink : ''}
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
            title: ministriesSectionTitle,
            links: ministriesLinks,
            ministries: ministries,
          }}
        />
        <Galery
          query={{
            title: photoGalleryTitle,
            content: photoGallerySliderContent,
          }}
        />
        <Contact
          query={{
            title: contactTitle,
            content: contactContent,
            contactFlyoutTitle: contactFlyoutTitle,
            contactFlyoutAddress: contactFlyoutAddress,
            contactFlyoutNumber: contactFlyoutNumber,
            contactFormTitle: contactFormTitle,
          }}
        />
      </Tablet>
      <Desktop>
        <WidthLimiterContainer className="HomePage__WidthLimiter">
          <DesktopIntroContainer>
            <HomeIntroContainer>
              <img
                src={homeIntroGraphic ? homeIntroGraphic : ''}
                alt="home intro graphic"
                className="Home__Intro-Graphic"
              />

              <HomeIntroContentContainer>
                <HomeIntroTitle>
                  <Title as="h1" type="heading1">
                    {homeIntroTitle ? homeIntroTitle : ''}
                  </Title>
                </HomeIntroTitle>
                <HomeIntroText>
                  <Text as="p" type="smallText700">
                    {homeIntroText ? homeIntroText : ''}
                  </Text>
                </HomeIntroText>
              </HomeIntroContentContainer>
              <Text as="p" type="smallText700">
                <LocalizedLink to="/" className="Home__Intro-link">
                  {homeIntroLink ? homeIntroLink : ''}
                </LocalizedLink>
              </Text>
            </HomeIntroContainer>

            <div style={{ width: '50%' }}>
              <SliderContent
                slidesToShow={1}
                slidesToScroll={1}
                autoplay={true}
                imgLength={homePageQuery.body[0].items.length}
              >
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
              </SliderContent>
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
          }}
        />
        <Galery
          query={{
            title: photoGalleryTitle,
            content: photoGallerySliderContent,
          }}
        />
        <Contact
          query={{
            title: contactTitle,
            content: contactContent,
            contactFlyoutTitle: contactFlyoutTitle,
            contactFlyoutAddress: contactFlyoutAddress,
            contactFlyoutNumber: contactFlyoutNumber,
            contactFormTitle: contactFormTitle,
          }}
        />
      </Desktop>
    </HomePageContainer>
  )
}

IndexLayout.propTypes = {
  data: PropTypes.object,
}
export default IndexLayout
