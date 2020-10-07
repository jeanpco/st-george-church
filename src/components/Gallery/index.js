import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import Img from 'gatsby-image'

import { WidthLimiterContainer } from '../Layout/styles'
import Title from '../Utilities/Title'
import Text from '../Utilities/Text'
import Icon from '~/components/Icon'
import GallerySliderContent from '../GallerySlider'
import { Link } from 'gatsby'
import { useTheme } from '@material-ui/core/styles'
import { useMediaQuery } from '@material-ui/core'

import {
  GalleryContainer,
  GalleryContentContainer,
  GallerSliderHeader,
  GallerySliderContainer,
  GallerySliderItemsContainer,
  GallerSliderTitle,
  GallerySliderText,
  GallerySliderIcon,
  GalleryItemContent,
} from './styles'

const Gallery = ({ query: { title, uid, ghostData } }) => {
  const theme = useTheme()
  const isTablet = useMediaQuery(theme.breakpoints.down('960'))
  const isDesktop = useMediaQuery(theme.breakpoints.up('960'))

  let slideToShow = 1

  let infinite = false

  if (isDesktop) {
    slideToShow = ghostData.length < 3 ? ghostData.length : 3
    infinite = true
  }

  if (isTablet) {
    slideToShow = 1.4
    infinite = false
  }

  return (
    <div>
      <GalleryContainer id={uid}>
        <WidthLimiterContainer>
          <GalleryContentContainer>
            <GallerSliderHeader>
              {title ? (
                <Title as="h2" type="heading2">
                  {title}
                </Title>
              ) : (
                ''
              )}
              <Icon type="cross-des" />
            </GallerSliderHeader>
            {ghostData?.length > 0 ? (
              <GallerySliderContainer>
                <GallerySliderContent
                  slidesToShow={slideToShow}
                  slidesToScroll={1}
                  infinite={infinite}
                  galleryImageLength={ghostData.length}
                >
                  {ghostData
                    ? ghostData.map((info, index) => {
                        return (
                          <Fragment key={index}>
                            <GalleryItemContent key={index}>
                              <GallerySliderItemsContainer>
                                <Link
                                  to={info.slug}
                                  className="Gallery__Slider_Link"
                                >
                                  <Img
                                    fluid={
                                      info.localFeatureImage.childImageSharp
                                        .fluid
                                    }
                                    alt=""
                                  />
                                </Link>
                                <GallerSliderTitle>
                                  {info?.title ? (
                                    <Title as="h3" type="heading8">
                                      {info.title}
                                    </Title>
                                  ) : (
                                    ''
                                  )}
                                </GallerSliderTitle>
                                <GallerySliderText>
                                  {info?.excerpt ? (
                                    <Text type="smallText700">
                                      {info?.excerpt}
                                    </Text>
                                  ) : (
                                    ''
                                  )}
                                </GallerySliderText>
                              </GallerySliderItemsContainer>
                              <GallerySliderIcon>
                                <Icon type="flower" />
                              </GallerySliderIcon>
                            </GalleryItemContent>
                          </Fragment>
                        )
                      })
                    : ''}
                </GallerySliderContent>
              </GallerySliderContainer>
            ) : (
              ''
            )}
          </GalleryContentContainer>
        </WidthLimiterContainer>
      </GalleryContainer>
    </div>
  )
}

Gallery.propTypes = {
  query: PropTypes.object,
  uid: PropTypes.string,
  ghostData: PropTypes.object,
}

export default Gallery
