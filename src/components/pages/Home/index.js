import React, { Fragment } from 'react'
import SliderSection from '../../SliderSection/SliderSection'
import PropTypes from 'prop-types'
import LocaleContext from '../../../context/LocaleProvider'
import Text from '../../Utilities/Text'
import Title from '../../Utilities/Title'
import { Tablet, Desktop } from '../../Utilities/Media'
import {
  HomeIntroContainer,
  HomeIntroContentContainer,
  HomeIntroTitle,
  HomeIntroText,
} from './style'
import LocalizedLink from '../../LocalizedLink'

const IndexLayout = ({ data }) => {
  const lang = React.useContext(LocaleContext)
  const i18n = lang.i18n[lang.locale]

  const HomePageData = data.homepage.nodes
    .filter((node) => node.locale.toLowerCase() === i18n.locale)
    .map((r) => r.metadata)

  const homePage = HomePageData[0]

  const homeIntoGraphic = homePage?.intro_graphic?.local?.publicURL
    ? homePage.intro_graphic.local.publicURL
    : ''

  const homeIntroTitle = homePage?.intro_title ? homePage.intro_title : ''
  const homeIntroText = homePage?.intro_text ? homePage.intro_text : ''
  const homeIntroLink = homePage?.intro_link ? homePage.intro_link : ''

  const images = []
  homePage.slider_images.map((info) => {
    Object.values(info).map((img) => {
      images.push(img.url)
    })
  })

  return (
    <Fragment>
      <Tablet>
        <SliderSection imgLength={images.length}>
          {images.map((img, index) => {
            return <img src={img} alt="" key={index} />
          })}
        </SliderSection>
        <HomeIntroContainer>
          <img src={homeIntoGraphic} alt="" />

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
      </Tablet>

      <Desktop>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <HomeIntroContainer>
            <img src={homeIntoGraphic} alt="" />

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
          <SliderSection imgLength={images.length}>
            {images.map((img, index) => {
              return <img src={img} alt="" key={index} />
            })}
          </SliderSection>
        </div>
      </Desktop>
    </Fragment>
  )
}

IndexLayout.propTypes = {
  data: PropTypes.object,
}
export default IndexLayout
