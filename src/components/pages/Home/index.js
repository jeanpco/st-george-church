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
  HomeIntroBodyContainer,
} from './style'
import { WidthLimiterContainer } from '../../Layout/styles'
import Img from 'gatsby-image'
import Fade from 'react-reveal/Fade'
import { Desktop, Tablet } from '../../../components/Utilities/Media'

const IndexLayout = ({
  data: {
    allGhostPost: { nodes: ghostQuery },
  },
  data: {
    homePage: { data: query },
  },
}) => {
  const contactData = query?.contact_section?.document?.data
  const contactUid = query?.contact_section?.document?.uid
  const blogPageLink = query?.photo_gallery?.document?.data?.blog_page_link.text
  const homeIntroGraphic = query?.intro_graphic?.url
  const homeIntroTitle = query?.intro_title?.text
  const homeIntroText = query?.intro_text
  const homeIntroLink = query?.intro_link
  const quoteText = query?.home_quote?.document?.data?.quote_text
  const quoteGraphic = query?.home_quote?.document?.data?.quote_graphic?.url
  const ministriesSectionTitle =
    query?.ministries_section?.document?.data?.anchor_title?.text
  const ministriesInfo =
    query?.ministries_section?.document?.data?.body[0]?.items
  const ministriesData = query?.ministries_section?.document?.data
  const eventSectionTitle =
    query?.events_calendar?.document?.data?.event_calendar_title?.text
  const eventCalendarTitle =
    query?.events_calendar?.document?.data?.events_title?.text
  const upcomingEventTitle =
    query?.events_calendar?.document?.data?.upcoming_event_title?.text
  const eventAddress =
    query?.events_calendar?.document?.data?.event_address?.html
  const ministriesUid = query?.ministries_section?.uid
  const galleryUid = query?.photo_gallery?.uid
  const eventUid = query?.events_calendar?.uid
  const noEventTitle = query?.events_calendar?.document?.data?.no_events_title

  console.log(ministriesInfo)

  return (
    <HomePageContainer>
      <WidthLimiterContainer className="HomePage__WidthLimiter">
        <DesktopIntroContainer>
          <HomeIntroContainer>
            <Tablet>
              <Slider style={{ marginTop: -10 }} query={query} />
            </Tablet>
            <HomeIntroContentContainer>
              <HomeIntroBodyContainer>
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
                    <HomeIntroTitle as="h2" type="heading1">
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
                    <HomeIntroLink
                      to={`#${ministriesUid}`}
                      className="Home__Intro-link scroll"
                    >
                      {homeIntroLink}
                    </HomeIntroLink>
                  ) : (
                    ''
                  )}
                </Fade>
              </HomeIntroBodyContainer>
            </HomeIntroContentContainer>
            <Desktop>
              <Slider query={query} />
            </Desktop>
          </HomeIntroContainer>
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
          ministries: ministriesInfo,
          ministriesData: ministriesData,
          uid: ministriesUid,
          contactData: contactData,
        }}
      />
      <EventsCalendar
        query={{
          eventSectionTitle,
          calendarTitle: eventCalendarTitle,
          eventAddress,
          uid: eventUid,
          noEventTitle,
          upcomingEventTitle,
        }}
      />
      {query?.photo_gallery?.document?.data?.gallery_title?.text ? (
        <Gallery
          title={query?.photo_gallery?.document?.data?.gallery_title?.text}
          uid={galleryUid}
          blogPageLink={blogPageLink}
          ghostData={ghostQuery ? ghostQuery : ''}
          excludeArticles={'orthoflash'}
        />
      ) : (
        ''
      )}
      {query?.photo_gallery?.document?.data?.gallery_title_secondary?.text ? (
        <Gallery
          title={
            query?.photo_gallery?.document?.data?.gallery_title_secondary?.text
          }
          uid={galleryUid}
          blogPageLink={blogPageLink}
          ghostData={ghostQuery ? ghostQuery : ''}
        />
      ) : (
        ''
      )}
      <Contact
        query={{
          contactData: contactData,
          contactUid: contactUid,
        }}
      />
    </HomePageContainer>
  )
}

const Slider = ({ query, style }) => {
  return (
    <SliderContainer style={style}>
      {query?.body[0].items.length > 0 ? (
        <SliderContent
          slidesToShow={1}
          slidesToScroll={1}
          autoplay={true}
          imgLength={query.body[0].items.length}
        >
          {query.body[0].items?.length > 0
            ? query.body[0].items.map((img, index) => {
                const sliderImage = img?.slider_img?.localFile?.childImageSharp
                  ?.fluid
                  ? img.slider_img.localFile.childImageSharp.fluid
                  : ''
                return (
                  <Img
                    key={index}
                    fluid={{ ...sliderImage, aspectRatio: 714 / 624 }}
                  />
                )
              })
            : ''}
        </SliderContent>
      ) : (
        ''
      )}
    </SliderContainer>
  )
}

Slider.propTypes = {
  query: PropTypes.object,
  style: PropTypes.object,
}

IndexLayout.propTypes = {
  data: PropTypes.object,
  ghostData: PropTypes.object,
}
export default IndexLayout
