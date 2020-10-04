import React from 'react'
import SliderContent from '../../HomeIntroSlider'
import Gallery from '../../Gallery'
import PropTypes from 'prop-types'
import Contact from '../../Contact'
import Quote from '../../Quote'
import EventsCalendar from '../../EventsCalendar'
import AnchorList from '../../AnchorList'
import {
  HomePageContainer,
  HomeIntroContainer,
  HomeIntroContentContainer,
  HomeIntroTitle,
  HomeIntroText,
  DesktopIntroContainer,
  SliderContainer,
  HomeIntroLink,
} from './style'
import { WidthLimiterContainer } from '../../Layout/styles'
import Img from 'gatsby-image'
import AnimatedImage from '../../AnimatedImage'
import Fade from 'react-reveal/Fade'

const IndexLayout = ({
  data: {
    homePage: { data: query },
  },
}) => {
  const photoGalleryTitle =
    query?.photo_gallery?.document?.data?.gallery_title?.text

  const photoGallerySliderContent =
    query?.photo_gallery.document?.data?.body?.[0]?.items

  const homeIntroGraphic = query?.intro_graphic?.url
  const homeIntroTitle = query?.intro_title?.text
  const homeIntroText = query?.intro_text
  const homeIntroLink = query?.intro_link
  const quoteText = query?.home_quote?.document?.data?.quote_text
  const quoteGraphic = query?.home_quote?.document?.data?.quote_graphic?.url
  const ministriesSectionTitle =
    query?.ministries_section?.document?.data?.anchor_title?.text
  const ministriesLinks =
    query?.ministries_section?.document?.data?.body[0]?.items

  const ministries = query?.ministries_section?.document?.data?.body?.[1]?.items
  const ministriesData = query?.ministries_section?.document?.data

  const eventSectionTitle =
    query?.events_calendar?.document?.data?.event_calendar_title?.text

  const eventCalendarTitle =
    query?.events_calendar?.document?.data?.events_title?.text

  const eventAddress =
    query?.events_calendar?.document?.data?.event_address?.text

  const eventDescription =
    query?.events_calendar?.document?.data?.event_description

  const ministriesUid = query?.ministries_section?.uid

  const galleryUid = query?.photo_gallery?.uid

  const eventUid = query?.events_calendar?.uid

  return (
    <HomePageContainer>
      <WidthLimiterContainer className="HomePage__WidthLimiter">
        <DesktopIntroContainer>
          <HomeIntroContainer>
            <HomeIntroContentContainer>
              <Fade bottom distance="30px">
                {homeIntroGraphic ? (
                  <img
                    src={homeIntroGraphic}
                    alt="home intro graphic"
                    className="Home__Intro-Graphic"
                  />
                ) : (
                  ''
                )}
                {homeIntroTitle ? (
                  <HomeIntroTitle as="h1" type="heading1">
                    {homeIntroTitle}
                  </HomeIntroTitle>
                ) : (
                  ' '
                )}
                {homeIntroText ? (
                  <HomeIntroText as="p" type="smallText700">
                    {homeIntroText}
                  </HomeIntroText>
                ) : (
                  ''
                )}
                {homeIntroLink ? (
                  <HomeIntroLink to="/" className="Home__Intro-link">
                    {homeIntroLink}
                  </HomeIntroLink>
                ) : (
                  ''
                )}
              </Fade>
            </HomeIntroContentContainer>
          </HomeIntroContainer>
          <SliderContainer>
            {query?.body[0].items.length > 0 ? (
              <SliderContent
                slidesToShow={1}
                slidesToScroll={1}
                autoplay={true}
                imgLength={query.body[0].items.length}
              >
                {query.body[0].items?.length > 0
                  ? query.body[0].items.map((img, index) => {
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
          </SliderContainer>
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
          ministriesLinks: ministriesLinks,
          ministries: ministries,
          ministriesData: ministriesData,
          uid: ministriesUid,
        }}
      />
      <EventsCalendar
        query={{
          eventSectionTitle: eventSectionTitle,
          calendarTitle: eventCalendarTitle,
          eventAddress: eventAddress,
          eventDescription: eventDescription,
          uid: eventUid,
        }}
      />
      {photoGalleryTitle && photoGallerySliderContent ? (
        <Gallery
          query={{
            title: photoGalleryTitle,
            content: photoGallerySliderContent,
            uid: galleryUid,
          }}
        />
      ) : (
        ''
      )}
      <Contact />
    </HomePageContainer>
  )
}

IndexLayout.propTypes = {
  data: PropTypes.object,
}
export default IndexLayout
